import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row p-2 m-1 h-[56px] bg-[#121212] bg-opacity-70 place-content-between items-center outline outline-2 outline-offset-0 outline-purple-800 rounded-[10px]">
      <h1 className="font-poppins cursor-pointer font-bold">RaptorNFT</h1>
      <button className="btn btn-sm lg:btn-wide rounded-[10px] font-poppins bg-gradient-to-t from-[#6d5593] to-[#9a175a] text-black cursor-pointer">Connect</button>
    </div>
  );
};

export default Navbar;