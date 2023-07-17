import React from "react";
import { AlertBox, Loader, LowerSection, Particle, Sidebar, UpperSection } from "./components";
import { Route, Routes } from "react-router-dom";
import { Artwork, Home, Mint } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen relative grid items-center justify-center">
      <Particle />
      <div className="z-10 fixed p-4 m-2">
        <Sidebar />
      </div>
      <div className="fixed w-[100vw] h-[100vh]">
        <UpperSection />
        <LowerSection />
      </div>
      <div className="z-20 fixed">
        <Loader />
        <AlertBox />
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
