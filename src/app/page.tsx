"use client";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServiceSection from "@/components/section/ServiceSection";
import WorkSection from "@/components/section/WorkSection";
// import Header from "@/components/section/Header";
import ContactSection from "@/components/section/ContactSection";
import Menubutton from "@/components/ui/MenuButton";
import AppButton from "@/components/ui/MBotton";
import { useEffect, useRef } from "react";
export default function Home() {
  const about = useRef(null);
// useEffect(()=>{
//   const AboutPage = document.querySelector("aboutpage");
//   AboutPage?.addEventListener()
// })
  return (
    <main className="flex w-full  min-h-full   items-center justify-center    bg-black">
      <div className=" flex flex-col w-[400px] h-full  items-center justify-center  bg-white overflow-hidden">
        {/* <Header /> */}
        <HeroSection />
        <div ref={about} id="aboutpage">
          <AboutSection />
        </div>
        <ServiceSection />
        <WorkSection />
        <ContactSection />
        {/* <Menubutton /> */}
        <AppButton />
      </div>
    </main>
  );
}
