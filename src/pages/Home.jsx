import React from "react";
import { Navbar, UpperSection, LowerSection } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="min-h-screen z-10 fixed pt-5">
        <h1 className="font-poppins text-5xl cursor-pointer font-bold">
          <span>Raptors</span>
          <span className="text-black">NFT.</span>
        </h1>
      </div>
      <div className="z-10 fixed p-4 m-2">
        <Navbar />
      </div>
      <div className="z-5 fixed w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
};

export default Home;