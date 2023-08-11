import React from 'react';
import { metamask } from "../assets";
import { RxCopy } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Modal = ({ open, onClose, addr, address, balances }) => {
  
  if (!open) return null;

  const handleClose = (e) => {
    if(e.target.id === "close") onClose();
  };

  const handleCopy = async() => {
    await navigator.clipboard.writeText(`${addr}`);
    toast("wallet address copied to clipboard!");
  };

  return (
    <div onClick={handleClose} id="close" className="inset z-10 bg-black bg-opacity-70 backdrop-blur-sm w-[100vw] min-h-screen grid place-items-center">
      <div className="w-[300px] p-4 h-[160px] bg-[#0a0a0a] text-white rounded-box outline outline-2 outline-offset-0 outline-[#212121] items-center justify-center flex flex-col gap-4 shadow-[1px_2px_20px] shadow-[#ff33bb]">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={metamask} alt="metamask" className="h-16 w-16 cursor-pointer" />
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex place-items-center flex-row gap-2">
              <h3 className="text-[#dededf] text-md font-poppins font-medium">{address}</h3>
              <RxCopy color="#656565" onClick={handleCopy} className="cursor-pointer" />
              <ToastContainer theme="dark" />
            </div>
            <h3 className="text-md font-poppins text-[#656565] cursor-pointer">{balances.toFixed(3)} MATIC</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;