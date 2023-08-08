import React, { useEffect, useState } from "react";
import { useMintDappContext } from "../../context";

const Mint = () => {

  const { raptorsNftAddress, mintNft, setLoader } = useMintDappContext();

  const [index, setIndex] = useState(0);
  const images = 65;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (1 + prevIndex) % images);
    },1000);
    return () => {
      clearInterval(intervalId);
    }
  },[]);

  const onMintNft = async() => {
    setLoader({
      isLoading: true,
      msg: "Minting NFT to your wallet",
    })

    await mintNft()
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="min-h-screen z-10 fixed pt-5">
        <h1 className="font-poppins text-5xl cursor-pointer font-bold">
          <span>Mint </span>
          <span className="text-black"> NFT.</span>
        </h1>
      </div>
      <div className="z-10 flex fixed flex-col w-[450px] h-[450px] bg-[rgba(0,0,0,0.25)] shadow-[1px_2px_20px] backdrop-blur-sm bg-opacity-70 p-4 m-2 rounded-box outline outline-black outline-2 outline-offset-0 space-y-5 place-items-center">
        <a target="_blank" href={`https://mumbai.polygonscan.com/address/${raptorsNftAddress}`}>
          <div className="flex flex-col items-center justify-center w-[420px] h-[40px] bg-gradient-to-br from-fuchsia-900 to-violet-900 bgg-animate p-2 rounded-[10px] text-black outline outline-2 outline-offset-0">
            <h1 className="font-poppins font-semibold">{raptorsNftAddress}</h1>
          </div>
        </a>
        <div className="flex flex-1 flex-col bg-[rgb(38,38,38,0.25)] bg-opacity-70 backdrop-blur-sm p-4 rounded-box w-[420px] items-center justify-between outline outline-2 outline-offset-0 outline-black gap-2">
          <div className="w-[240px] h-[240px] cursor-pointer bg-[#0D0D0D] rounded-box outline outline-2 outline-offset-0 outline-black shadow-black shadow-[1px_2px_20px]">
            <img src={`/artworks/${index}.png`} alt="nfts"/>
          </div>
          <div className="flex flex-row gap-4 place-items-center">
            <a target="_blank" href="https://testnets.opensea.io/collection/raptorsnft-9">
              <div className= "font-poppins text-md w-[160px] h-[48px] p-2 bg-[#161618] grid place-items-center outline outline-2 outline-offset-0 outline-black rounded-box backdrop-blur-sm shadow-[1px_1px_20px] shadow-black hover:bg-[#202020] active:scale-110 font-semibold">Opensea</div>
            </a>
            <button className= "font-poppins text-md w-[160px] h-[48px] p-2 bg-[#161618] outline outline-2 outline-offset-0 outline-black rounded-box backdrop-blur-sm shadow-[1px_1px_20px] shadow-black hover:bg-[#202020] active:scale-110 font-semibold" onClick={onMintNft}>Mint</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;