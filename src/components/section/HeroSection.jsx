import React from "react";
import Abutton from "@/components/ui/Abutton";
import { Button } from "../ui/button";
import Menubutton from "@/components/ui/MenuButton";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialIcon } from "@/data/navigation";
import Latest from "@/components/ui/Latest";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center gap-1 justify-start  py-16">
        <Abutton />
        <div className="hero-logo  w-full h-40  flex items-center justify-evenly">
          <div className="size-36  flex items-center justify-center rounded-full border border-black">
            logo
          </div>
          <div className="flex flex-col items-center justify-evenly">
            <h1 className="text-2xl font-bold">NGT SOFTWARE</h1>
            <h1 className="text-xl font-medium">Digital Marketing Agency</h1>
          </div>
        </div>
        <div className="hero-icon  w-full flex items-center justify-evenly h-16  text-black text-3xl">
          {socialIcon.map((data, idx) => {
            return (
              <h1 className="relative flex" key={idx}>
                {" "}
                <span className="absolute ring-4 ring-slate-500 size-14 -top-3 -right-[0.80rem] rounded-full animate-pulse" />
                {data.icon}
              </h1>
            );
          })}
        </div>
        <div
          className="w-full flex
         flex-col items-center justify-center h-52 gap-2  text-white"
        >
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaPhone className="size-5" /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaPhone /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <MdEmail /> |<Link href={""}> info@ngtsoftware</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaLocationDot /> |<Link href={""}> location,via</Link>
          </div>
        </div>
        <Menubutton />
      </div>
    </>
  );
};

export default HeroSection;
