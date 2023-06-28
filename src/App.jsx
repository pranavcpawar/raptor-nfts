import React from "react";
import { LowerSection, Navbar, Particle, UpperSection } from "./components";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Particle />
      <div className="z-10 relative p-4 m-2">
        <Navbar />
      </div>
      <div className="z-5 fixed w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
};

export default App;
