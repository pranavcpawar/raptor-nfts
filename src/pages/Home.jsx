import React from "react";
import { Navbar, UpperSection, LowerSection } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="z-10 absolute p-4 m-2">
        <Navbar />
      </div>
      <div className="z-5 relative w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
};

export default Home;