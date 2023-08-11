import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useMintDappContext } from "../../context";

const Loader = () => {

  const { loader } = useMintDappContext();

  return (
    <div className={`fixed inset-0 min-h-screen bg-black place-items-center bg-opacity-50 backdrop-blur-sm transform transition-transform duration-300 ${loader.isLoading ? "grid": "hidden"} rounded-[5px]`}>
      <div className="flex flex-col w-[300px] h-[176px] bg-[#0a0a0a] rounded-box outline outline-2 outline-offset-0 outline-black shadow-[1px_3px_20px] shadow-black items-center justify-center px-10 py-5">
      <InfinitySpin width="200"/>
        <div className="flex flex-col items-center justify-center space-y-3">
          <h3 className="font-poppins text-xl text-[#d5d5d5]">Loading...</h3>
          <p className="font-poppins text-xs text-[#d5d5d5]">{loader.msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;