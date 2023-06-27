import React from "react";
import { LowerSection, Navbar, Particle, UpperSection } from "./components";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Particle />
      <div className="z-10 relative w-[60%] top-8 p-4 mr-2 ml-2 mt-2 mb-1 rounded-box">
        <Navbar />
      </div>
      <div className="z-5 absolute w-[100vw] h-[95vh] top-4 p-4 mt-1 mr-2 ml-2 mb-2">
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
};

export default App;
