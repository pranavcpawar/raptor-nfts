import React from "react";
import { PiSealCheckFill } from "react-icons/pi"
import { TbAlertSquareRoundedFilled } from "react-icons/tb"
import { useMintDappContext } from "../../context";


const AlertBox = () => {

  const { alertBox, loader } = useMintDappContext();

  return (
    <div className={`fixed inset-0 min-h-screen grid place-items-center ${loader.isLoading && alertBox.isAlert == true ? " ": "bg-[rgba(0,0,0,0.3)] bg-opacity-50 backdrop-blur-sm"} transform transition-transform duration-300 ${alertBox.isAlert ?"scale-100": "scale-0"} rounded-[5px]`}>
      <div className="flex flex-col w-[300px] h-[160px] bg-[#0a0a0a] rounded-box outline outline-2 outline-offset-0 outline-black shadow-[1px_3px_20px] shadow-black items-center justify-center px-10 py-5">
        <div className="flex flex-col items-center justify-center space-y-3">
          {alertBox.color == "red" ? 
          <TbAlertSquareRoundedFilled size={48} color="#9d1020" />
            : 
          <PiSealCheckFill size={48} color="#4fa94d" />}
          <p className="font-poppins text-sm text-[#d5d5d5]">{alertBox.msg}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;