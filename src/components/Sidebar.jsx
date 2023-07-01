import React from "react";
import { logo } from "../assets";

const Sidebar = () => {
  return (
    <div className="bg-[#121212] bg-opacity-70 backdrop-blur-sm outline outline-2 outline-offset-0 outline-black rounded-[20px] w-[80px] flex flex-col h-[360px] p-2">
      <div className="flex flex-col items-center justify-center gap-14 p-2 m-1">
        <div className="w-[64px] h-[64px] flex items-center justify-center bg-black p-2 rounded-box cursor-pointer border-gray-600">
          <img className="w-full h-full" src={logo} alt="logo"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
        <h3>Home</h3>
        <h3>Evolve</h3>
        <h3>Artwork</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;