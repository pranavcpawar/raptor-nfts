import React from "react";
import { useMintDappContext } from "../../context";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {

  const { isConnected, mintNft, setLoader, setAlertPrompt } = useMintDappContext();

  const onMintNft = async() => {
    
    setLoader({
      isLoading: true,
      msg: "Minting NFT to your wallet",
    })

    let res = await mintNft()
    console.log(res)
      // .then(() => setAlertPrompt("Minting successful...", "green"))
      // .catch(() => setLoader({ isLoading: false, msg: "" }));
  }
  
  return (
    <div className="flex flex-col p-2 m-1 w-[220px] h-[160px] bg-[rgba(0,0,0,0.25)] bg-opacity-70 place-content-center outline outline-2 outline-offset-0 outline-black rounded-box backdrop-blur-sm shadow-[1px_2px_20px]">
      <div className="flex flex-col space-y-5 items-center justify-between">
        <ConnectWallet />
        {isConnected && <button className= "font-poppins text-md w-[160px] h-[48px] p-2 bg-[#161618] outline outline-2 outline-offset-0 outline-black rounded-box backdrop-blur-sm shadow-[1px_1px_20px] shadow-black hover:bg-[#202020] active:scale-110 font-semibold" onClick={onMintNft}>Mint</button>} 
      </div>
    </div>
  );
};

export default Navbar;