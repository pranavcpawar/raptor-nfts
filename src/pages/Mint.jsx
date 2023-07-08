import React from "react";

const Mint = () => {
  return (
    <div className="z-10 min-h-screen grid place-content-center">
        <div className="flex flex-col sm:w-[60vw] sm:h-[60vh] w-[100vw] h-[100vh] bg-[#121212] shadow-[1px_2px_20px] shadow-[#ff33bb] backdrop-blur-sm bg-opacity-70 p-4 m-2 sm:rounded-box outline outline-black outline-2 outline-offset-0 space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="font-poppins text-xl underline underline-offset-2">Contract Address</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className="font-poppins text-sm bg-[#161618] text-[#a726c1] w-[120px] h-[48px] p-2 outline outline-1 outline-offset-0 outline-[#232326] rounded-[12px] hover:bg-[#191919] hover:outline-[#323232] active:scale-110 font-medium">opensea</button>
          </div>
          <div className="flex flex-col items-center">
            Add Image
          </div>
          <div className="flex flex-col items-center">
            <button className="font-poppins text-sm bg-[#161618] text-[#a726c1] w-[120px] h-[48px] p-2 outline outline-1 outline-offset-0 outline-[#232326] rounded-[12px] hover:bg-[#191919] hover:outline-[#323232] active:scale-110 font-medium">Mint NFT</button>
          </div>
        </div>
      </div>
  );
};

export default Mint;