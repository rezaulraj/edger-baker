import React from "react";
import HeroHome from "./HeroHome";
import Services from "./Services";
import Teams from "./Teams";
import Number from "./Number";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black/95">
      <HeroHome />
      <Services />
      <Teams />
      <Number />
    </div>
  );
};

export default HomePage;
