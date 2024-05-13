import React from "react";
import Abutton from '@/components/ui/Abutton'
const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-5 justify-start  py-28">
      <Abutton />
      <div className="HeroHeader w-full h-36  flex items-center justify-center flex-col text-4xl ">
        <h1 className="font-semibold">Digital Bandhan</h1>
        <h1>A Creative Agency</h1>
        <h1>For your need</h1>
      </div>
      <div className="HeroDesc w-full text-center h-20 text-base flex items-start justify-center   px-5">
        <p className="leading-5">
          We equip ambitious brands and organizations to lead from the front
          through strategic positioning and thoughtful storytelling.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
