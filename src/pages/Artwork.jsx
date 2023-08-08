import React, { Fragment, useEffect } from "react";
import { useMintDappContext } from "../../context";

const Artwork = () => {
  const { nfts, getMintedNFTs, setLoader, setAlertPrompt, loader, alertBox, isConnected } = useMintDappContext();

  useEffect(() => {
    const getNfts = async() => {
      setLoader({
        isLoading: true,
        msg: "NFTs loading...",
      })
      await getMintedNFTs()
      setAlertPrompt("Successfully loaded NFTs!", "green");

    }
    {isConnected ? getNfts() : setAlertPrompt("wallet not connected!", "red")};
  }, [isConnected]);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="min-h-screen z-10 fixed pt-5">
        <h1 className="font-poppins text-5xl cursor-pointer font-bold">
          <span>NFT Art</span>
          <span className="text-black">work.</span>
        </h1>
      </div>
      {isConnected &&
      <div className={`z-10 group ${loader.isLoading || alertBox.isAlert == true ? "hidden": "flex"} fixed flex-col w-[265px] group-hover:h-[320px] bg-[rgba(0,0,0,0.25)] shadow-[1px_2px_20px] bg-opacity-70 rounded-box outline outline-black outline-2 outline-offset-0 backdrop-blur-sm`}>
        <div className="carousel carousel-center pt-3 pb-3 pr-3 pl-3 space-x-5 rounded-box">
          {nfts.map((nft, i) => (
            <Fragment key={i}>
              <div className="carousel-item">
                <div className="flex flex-col place-items-center space-y-3">
                  <a href={nft.url} target="_blank">
                    <img src={nft.imageURL} className="h-[240px] w-[240px] outline-2 bg-[#0D0D0D] outline outline-black outline-offset-0 shadow-[1px_2px_20px] shadow-black rounded-box"/>
                  </a>
                  <div className="group-hover:grid hidden bg-animate cursor-pointer w-[240px] h-[40px] place-content-center p-2 outline outline-2 outline-offset-0 outline-black rounded-[12px] shadow-[1px_2px_20px] shadow-black">
                    <h1 className="font-poppins text-lg font-semibold text-[black]">RaptorsNFT #{nft.id}</h1>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      }
    </div>
  );
};

export default Artwork;