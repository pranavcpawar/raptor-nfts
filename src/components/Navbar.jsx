import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col p-2 m-1 h-[160px] w-full bg-[#121212] bg-opacity-70 items-center justify-center space-y-4 outline outline-2 outline-offset-0 outline-black rounded-[20px] backdrop-blur-sm">
      <h1 className="font-poppins text-xl cursor-pointer font-bold">RaptorNFT.</h1>
      <div className="flex flex-col space-y-5">
        <button className="btn btn-sm sm:btn-wide btn-outline font-poppins hover:text-black cursor-pointer bg-opacity-70 backdrop-blur-sm shadow-sm hover:border-black">Mint</button>
        <button className="btn btn-sm sm:btn-wide btn-outline font-poppins hover:text-black cursor-pointer bg-opacity-70 backdrop-blur-sm shadow-sm hover:border-black">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;