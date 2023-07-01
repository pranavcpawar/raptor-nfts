import React from "react";
import { LowerSection, Navbar, Particle, Sidebar, UpperSection } from "./components";

const App = () => {
  return (
    <div className="min-h-screen grid justify-center">
      <Particle />
      <div className="z-10 absolute p-4 m-2 top-48">
        <Sidebar />
      </div>
      <div className="z-10 relative p-4 m-2">
        <Navbar />
      </div>
      <div className="z-5 absolute w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
};

export default App;
