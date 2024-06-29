import React from "react";
import LOGO from "../../../public/asset/LOGO.webp";
import {
  HERO_SECTION_WEBSITE_TITLE as title,
  HERO_SECTION_WEBSITE_DESQ as Desq,
  HERO_SECTION_WEBSITE_PHN_NO1 as phone1,
  HERO_SECTION_WEBSITE_PHN_NO2 as phone2,
  HERO_SECTION_WEBSITE_EMAIL as email,
  HERO_SECTION_WEBSITE_lOCATION as location,
} from "@/constants/HeroSection";
import { FaRegShareSquare } from "react-icons/fa";
import { PiDownloadFill } from "react-icons/pi";
import Abutton from "@/components/ui/availableButton";
import { Button } from "../ui/button";
import DialogBox from "@/components/ui/DialogBox";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialIcon } from "@/data/navigation";
import WhatsAppShare from "@/components/ui/WhatsAppShare";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="flex min-h-screen w-[400px] flex-col items-center justify-start gap-2 overflow-hidden py-14">
        <Abutton />
        <div className="hero-logo flex h-40 w-full items-center justify-evenly gap-2 px-3">
          <div className="flex size-32 items-center justify-center rounded-xl border">
            <Image
              src={LOGO}
              className="rounded-xl"
              width={120}
              alt="NGT-SOFTWARE logo"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-lg font-medium"> {Desq} </h1>
          </div>
        </div>
        <div className="hero-icon flex h-16 w-full items-center justify-evenly text-3xl text-black">
          {socialIcon.map((data, idx) => {
            return (
              <Link key={idx} href={data.href} target="_blank">
                <h1 className="relative flex" key={idx}>
                  {" "}
                  <span className="absolute -right-[0.80rem] -top-3 size-14 animate-pulse rounded-full ring-4 ring-blue-300" />
                  {data.icon}
                </h1>
              </Link>
            );
          })}
        </div>
        <div className="flex h-52 w-full flex-col items-center justify-center gap-3 text-sm text-white">
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-Blue px-5">
            <FaPhone className="size-5" /> |<Link href={""}> {phone1} </Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-Blue px-5">
            <FaPhone className="size-5" /> |<Link href={""}> {phone2} </Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-Blue px-5">
            <MdEmail className="size-5" /> |<Link href={""}> {email} </Link>
          </div>
          <div className="flex h-10 w-60 items-center justify-start gap-3 rounded-lg bg-Blue px-5">
            <FaLocationDot className="size-5" /> |
            <Link href={""}> {location} </Link>
          </div>
        </div>
        {/* //TODO:  wp_share_input */}
        <div className="wp_share_input flex h-14 w-96 items-center justify-center rounded-md p-2">
          <WhatsAppShare />
        </div>

        <div className="wp_share_input flex h-10 w-96 items-center justify-center gap-2">
          <div className="">
            <Button className="flex gap-1 border bg-Blue text-white">
              save to contacts <PiDownloadFill />
            </Button>
          </div>
          <div className="h-10 w-20">
            <DialogBox>
              <Button className="flex gap-1 bg-Blue">
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
