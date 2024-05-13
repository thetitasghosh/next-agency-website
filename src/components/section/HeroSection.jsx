import React from "react";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start py-10">
      <div className="HeroHeader w-full h-36  flex items-center justify-center flex-col text-3xl l">
        <h1>Digital Bandhan</h1>
        <h1>A Creative Agency</h1>
        <h1>For your need</h1>
      </div>
      <div className="HeroDesc w-full text-center h-20 text-xs flex items-start justify-center   px-5">
        <p>we are digital bandhan,a creative digital agency for your creative proccess</p>
      </div>
    </div>
  );
};

export default HeroSection;
