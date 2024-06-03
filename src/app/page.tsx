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
  const home = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const service = useRef(null);

  return (
    <main className="flex min-h-full w-full items-center justify-center bg-black">
      <div className="flex h-full w-[400px] flex-col items-center justify-center overflow-hidden bg-white">
        {/* <Header /> */}
        <div ref={home} id="homepage">
          <HeroSection />
        </div>
        <div ref={about} id="aboutpage">
          <AboutSection />
        </div>
        <div ref={service} id="servicepage">
          <ServiceSection />
        </div>
        <div ref={work} id="workpage">
          <WorkSection />
        </div>
        <div ref={contact} id="contactpage">
          <ContactSection />
        </div>
        {/* <Menubutton /> */}
        <AppButton
          Home={home}
          About={about}
          Contact={contact}
          Work={work}
          Service={service}
        />
      </div>
    </main>
  );
}
