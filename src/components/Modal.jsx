import React from 'react';
import { metamask } from "../assets";
import { RxCopy } from "react-icons/rx";


const Modal = ({ open, onClose, addr, address, balances }) => {
  
  if (!open) return null;

  const handleClose = (e) => {
    if(e.target.id === "close") onClose();
  };

  return (
    <div onClick={handleClose} id="close" className="inset z-10 bg-black bg-opacity-25 backdrop-blur-sm w-[100vw] min-h-screen grid place-items-center">
      <div className="w-[300px] p-4 h-[200px] bg-black text-white rounded-box outline outline-2 outline-offset-0 outline-[#212121]">
        <div className="flex flex-row items-center justify-start gap-2">
          <img src={metamask} alt="metamask" className="h-14 w-14" />
          <div className="flex flex-col items-start">
            <div className="flex place-items-center flex-row gap-2">
              <h3 className="text-[#dededf] text-md font-poppins font-medium">{address}</h3>
              <RxCopy color="#656565" className="cursor-pointer" />
            </div>
            <h3 className="text-sm font-poppins text-[#656565]">{balances.toFixed(3)} MATIC</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;