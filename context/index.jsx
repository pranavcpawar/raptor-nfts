import React, { useEffect, useState, useContext, createContext } from "react";
import abi from "../src/abi/RaptorsNft.json";
import { ethers } from "ethers";

const MintDappContext = createContext();

export const MintDappProvider = ({ children }) => {

  const [web3state, setWeb3State] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [loader, setLoader] = useState({
    isLoading: false,
    msg: "",
  });
  const [alertBox, setAlertBox] = useState({
    isAlert: false,
    msg: "",
    color: "",
  });
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [nfts, setNfts] = useState([]);
  const { ethereum } = window;
  const raptorsNftAddress = "0x53B8424D125111B147beaDC6B608af8c0C988430";
  const raptorsNftABI = abi.abi;
  const openSeaURI = `https://testnets.opensea.io/assets/mumbai/${raptorsNftAddress}/`

  useEffect(() => {
    isWalletConnected();
    listenWalletEvent();
  });

  // create contract instance
  const raptorsNft = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(raptorsNftAddress, raptorsNftABI, signer);
    setWeb3State({ provider, signer, contract });
    return { provider, signer, contract }
  }

  // connect wallet function
  const connectWallet = async() => {
    try {
      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        const balances = await ethereum.request({ 
          method: "eth_getBalance",
          params: [accounts[0], "latest"]
        });
        setWalletAddress(accounts[0]);
        setWalletBalance(parseInt(balances,16) / 10**18);
        setIsConnected(true);
        raptorsNft(accounts[0]);
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
          const balances = await ethereum.request({ 
            method: "eth_getBalance",
            params: [accounts[0], "latest"]
          });
          setWalletAddress(accounts[0]);
          setWalletBalance(parseInt(balances,16) / 10**18);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } else {
        alert("Install Metamask!");
      }
    } catch (err) {
      console.log("error: ", err.message);
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
  
  // // Todo: debug this function as it can not retain the previous state and connects again
  // const disconnectWallet = async() => {
  //   if (ethereum) {
  //     setWalletAddress("");
  //     setIsConnected(false);
  //     window.ethereum.removeAllListeners(["accountsChanged"]);
  //   }
  // };

  // mint nft function
  const mintNft = async() => {
    try {
      if(ethereum) {
        const { contract } = raptorsNft();
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
        const { contract } = raptorsNft();
        const nfts = await contract.listMintedNFTs();
        setNfts(arrangeNfts(nfts));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const arrangeNfts = (nfts) => 
    nfts
      .map((nft) => ({
        id: parseInt(nft.id),
        url: openSeaURI + nft.id,
        buyer: nft.buyer,
        imageURL: nft.imageURL,
        mintPrice: parseInt(nft.mintPrice._hex) / 10**18,
        timestamp: new Date(nft.timestamp.toNumber()).getTime(),
      }))
      .reverse()
  
  return (
    <MintDappContext.Provider
      value={{
        web3state,
        walletAddress,
        walletBalance,
        isConnected,
        connectWallet,
        getMintedNFTs,
        mintNft,
        // disconnectWallet,
        nfts,
        raptorsNftAddress,
        loader,
        setLoader,
        alertBox,
        setAlertBox,
      }}>
      {children}
    </MintDappContext.Provider>
  );
};

export const useMintDappContext = () => useContext(MintDappContext);