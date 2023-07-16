import React from "react";
import { LowerSection, Particle, Sidebar, UpperSection } from "./components";
import { Route, Routes } from "react-router-dom";
import { Artwork, Home, Mint } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen relative grid justify-center items-center">
      <Particle />
      <div className="z-10 fixed p-4 m-2 top-48">
        <Sidebar />
      </div>
      <div className="z-5 fixed w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </div>
  );
};

export default App;
