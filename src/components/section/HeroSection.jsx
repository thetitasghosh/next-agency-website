import React from "react";
import Abutton from "@/components/ui/Abutton";
import { Button } from "../ui/button";
import {socialIcon} from '@/data/navigation'
import Latest from "@/components/ui/Latest";
const HeroSection = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center gap-5 justify-start  py-16">
        <Abutton />
        <div className="w-full h-40  flex items-center justify-evenly">
          <div className="size-36  flex items-center justify-center rounded-full border border-black">
            logo
          </div>
          <div className="flex flex-col items-center justify-evenly">
            <h1 className="text-2xl font-bold">NGT SOFTWARE</h1>
            <h1 className="text-xl font-medium">Digital Marketing Agency</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-evenly h-16  text-black text-3xl">
            {
              socialIcon.map((data,idx)=>{
                return <h1 key={idx}>{data.icon}</h1>
              })
            }
        </div>
      </div>
    </>
  );
};

export default HeroSection;
