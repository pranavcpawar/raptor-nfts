import React, { useEffect, useState, useContext, createContext } from "react";
import abi from "../src/abi/RaptorsNft.json";
import { ethers } from "ethers";

const MintDappContext = createContext();

export const MintDappProvider = ({ children }) => {

  const [web3state, setWeb3State] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [getNFTs, setGetNFTs] = useState([]);
  const { ethereum } = window;
  const raptorsNftAddress = "0xC4b0F75Aeb8D09Def52c6Af14d413E8d99839729";
  const raptorsNftABI = abi.abi;
  const openSeaURI = `https://testnets.opensea.io/assets/mumbai/${raptorsNftAddress}/`

  useEffect(() => {
    isWalletConnected();
    listenWalletEvent();
  });

  // create contract instance
  const raptorsNft = async() => {
    if (walletAddress) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(raptorsNftAddress, raptorsNftABI, signer);
      setWeb3State({ provider, signer, contract });
    };
  }

  // connect wallet function
  const connectWallet = async() => {
    try {
      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        setWalletAddress(accounts[0]);
        setIsConnected(true);
        console.log("wallet address: ", accounts[0]);
      } else {
        alert("Install Metamask!");
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };

  // check if wallet is still connected
  const isWalletConnected = async() => {
    try {
      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_accounts"});
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } else {
        alert("Install Metamask!");
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };
  
  // add listener for account change
  const listenWalletEvent = async() => {
    if(ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      });
    } else {
      setWalletAddress("");
      setIsConnected(false);
      alert("Install Metamask!");
    }
  };
  
  // disconnect dapp function
  const disconnectWallet = async() => {
    if (ethereum) {
      setWalletAddress("");
      setIsConnected(false);
      window.ethereum.removeAllListeners(["accountsChanged"]);
    }
  };

  // mint nft function
  const mintNft = async() => {
    try {
      if(ethereum) {
        raptorsNft();
        const { contract } = web3state;
        const price = ethers.utils.parseEther("0.01");
        const transaction = await contract.mintRaptorNft({
          from: walletAddress,
          value: price._hex,
        })
        await transaction.wait();
        window.location.reload();
        console.log("transaction completed!")
      }
    } catch (err){
      console.log(err.message);
    }
  };

  // get nfts function
  const getMintedNFTs = async() => {
    try {
      if(ethereum) {
        raptorsNft();
        const { contract } = web3state;
        const raw_nfts = await contract.listMintedNFTs();
        console.log(raw_nfts);
        setGetNFTs(nfts(raw_nfts));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const nfts = (_raw_nfts) => 
    _raw_nfts.map((_nft) => ({
      id: Number(_nft.id),
      url: openSeaURI + _nft.id,
      buyer: _nft.buyer,
      imageUrl: _nft.imageUrl,
      price: parseInt(_nft.price._hex) / 10**18,
      timestamp: new Date(_nft.timestamp.toNumber()).getTime(),
    })).reverse()
  
  return (
    <MintDappContext.Provider
      value={{
        web3state,
        walletAddress,
        isConnected,
        connectWallet,
        getMintedNFTs,
        mintNft,
        disconnectWallet,
        getNFTs,
      }}>
      {children}
    </MintDappContext.Provider>
  );
};

export const useMintDappContext = () => useContext(MintDappContext);