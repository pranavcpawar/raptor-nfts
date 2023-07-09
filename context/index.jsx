import React, { useContext, useEffect, useState, createContext } from "react";
import abi from "../src/abi/RaptorsNft.json";
import { ethers } from "ethers";

const MintContext = createContext();

export const MintDappProvider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xC4b0F75Aeb8D09Def52c6Af14d413E8d99839729";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({method: "eth_requestAccounts"})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        setState({provider, signer, contract})

      } catch(error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

};
