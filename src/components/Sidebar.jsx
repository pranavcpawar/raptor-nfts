import React, { Fragment, useEffect, useState } from "react";
import { logo } from "../assets";
import { navlinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("home");

  useEffect(() => {
    navigate("/");
  },[])

  return (
    <div className="bg-[#121212] bg-opacity-70 hidden backdrop-blur-sm outline outline-2 outline-offset-0 outline-black rounded-box w-[80px] sm:flex flex-col h-[320px] p-2">
      <div className="flex flex-col items-center justify-center space-y-12 p-2 m-1">
        <Link to="/">
          <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#212121] p-2 rounded-box cursor-pointer outline-black outline outline-2 outline-offset-0 hover:scale-105">
            <img className="w-full h-full" src={logo} alt="logo"/>
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center gap-5">
          {navlinks.map((item) => (
            <Fragment key={item.name}>
              <div 
                className={`cursor-pointer ${isActive && isActive === item.name && "text-[#ff33bb] bg-[rgba(255,51,187,0.2)]  bg-opacity-70 w-[70px] flex justify-center rounded-[5px] active:scale-110"}`} 
                onClick={() => {
                  setIsActive(item.name);
                  navigate(item.link);
                  }}>
                <h3 className="font-poppins font-medium">{item.name}</h3>
              </div>
            </Fragment >
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;