import React from "react";
import { useMintDappContext } from "../../context";
import { metamask } from "../assets";


const truncate = (_walletAddress) => {
  if (!_walletAddress) return ""
  return _walletAddress.substring(0,6) + "..." + _walletAddress.slice(-4);
}

const ConnectWallet = () => {

  const { walletAddress, isConnected, connectWallet, walletBalance } = useMintDappContext();

  const truncatedAddress = truncate(walletAddress);

  return (
    <div className="flex flex-col items-center">
      <button 
        className= {`font-poppins text-md w-[160px] ${!isConnected ? "h-[48px]" : "h-[64px] w-[180px]"} pt-2 pb-2 pr-[12px] pl-[12px] bg-[#161618] outline outline-2 outline-offset-0 outline-black rounded-box backdrop-blur-sm shadow-[1px_1px_20px] shadow-black hover:bg-[#202020] active:scale-110 font-semibold`} 
        onClick={() => { !isConnected ? connectWallet() : alert("modal open") }}>
        {isConnected ? (
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-col items-start">
              <h3 className="text-[#dededf] text-sm font-poppins font-medium">{walletBalance.toFixed(3)} MATIC</h3>
              <h3 className="text-xs font-medium font-poppins text-[#656565]">{truncatedAddress}</h3>
            </div>
            <img src={metamask} alt="metamask" className="h-12 w-12" />
          </div>
        ) : (
          "Connect"
        )}
      </button>
    </div>
  );
};

export default ConnectWallet;