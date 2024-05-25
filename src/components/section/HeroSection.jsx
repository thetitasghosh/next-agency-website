import React from "react";
import { FaRegShareSquare } from "react-icons/fa";
import { PiDownloadFill } from "react-icons/pi";
import Abutton from "@/components/ui/Abutton";
import { Button } from "../ui/button";
import DialogBox from "@/components/ui/DialogBox";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialIcon } from "@/data/navigation";
import Latest from "@/components/ui/Latest";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center  justify-start  py-14">
        <Abutton />
        <div className="hero-logo  w-full h-40  flex items-center justify-evenly px-3  gap-1">
          <div className="size-32  flex items-center justify-center rounded-xl border  border-black">
            logo
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <h1 className="text-2xl font-bold ">NGT SOFTWARE</h1>
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
         flex-col items-center justify-center h-52 gap-2  text-white text-sm"
        >
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaPhone className="size-5" /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaPhone className="size-5" /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <MdEmail className="size-5" /> |
            <Link href={""}> info@software.com</Link>
          </div>
          <div className="w-60 h-10 flex items-center justify-start gap-3 px-5  rounded-lg bg-zinc-950 ">
            <FaLocationDot className="size-5" /> |
            <Link href={""}> location,via</Link>
          </div>
        </div>
        {/* //TODO:  wp_share_input */}
        <div className="wp_share_input border border-black w-96 h-10 m-2 rounded-md "></div>

        <div className="wp_share_input  flex items-center justify-center gap-2  w-96 h-10 ">
          <div className="">
            <Button   className="flex gap-1 border border-black bg-zinc-800 text-white">
              save to contacts <PiDownloadFill />
            </Button>
          </div>
          <div className=" w-20 h-10 ">
            <DialogBox>
              <Button className="flex gap-1">
                share <FaRegShareSquare />
              </Button>
            </DialogBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
