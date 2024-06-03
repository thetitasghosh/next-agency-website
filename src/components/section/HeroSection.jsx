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
import WpShare from "@/components/ui/WpShare";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="flex min-h-screen w-[400px] flex-col items-center justify-start overflow-hidden py-14">
        <Abutton />
        <div className="hero-logo flex h-40 w-full items-center justify-evenly gap-2 px-3">
          <div className="flex size-32 items-center justify-center rounded-xl border border-black">
            <Image src={""} alt="NGT-SOFTWARE logo" />
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <h1 className="text-2xl font-bold">NGT SOFTWARE</h1>
            <h1 className="text-xl font-medium">Digital Marketing Agency</h1>
          </div>
        </div>
        <div className="hero-icon flex h-16 w-full items-center justify-evenly text-3xl text-black">
          {socialIcon.map((data, idx) => {
            return (
              <h1 className="relative flex" key={idx}>
                {" "}
                <span className="absolute -right-[0.80rem] -top-3 size-14 animate-pulse rounded-full ring-4 ring-slate-500" />
                {data.icon}
              </h1>
            );
          })}
        </div>
        <div className="flex h-52 w-full flex-col items-center justify-center gap-2 text-sm text-white">
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-zinc-950 px-5">
            <FaPhone className="size-5" /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-zinc-950 px-5">
            <FaPhone className="size-5" /> |<Link href={""}> 5656565656</Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-zinc-950 px-5">
            <MdEmail className="size-5" /> |
            <Link href={""}> info@software.com</Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-zinc-950 px-5">
            <FaLocationDot className="size-5" /> |
            <Link href={""}> location,via</Link>
          </div>
        </div>
        {/* //TODO:  wp_share_input */}
        <div className="wp_share_input flex h-14 w-96 items-center justify-center rounded-md p-2">
          <WpShare />
        </div>

        <div className="wp_share_input flex h-10 w-96 items-center justify-center gap-2">
          <div className="">
            <Button className="flex gap-1 border border-black bg-zinc-800 text-white">
              save to contacts <PiDownloadFill />
            </Button>
          </div>
          <div className="h-10 w-20">
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
