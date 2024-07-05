"use client";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServiceSection from "@/components/section/ServiceSection";
import WorkSection from "@/components/section/WorkSection";
import ContactSection from "@/components/section/ContactSection";
import AppButton from "@/components/ui/AppBotton";

export default function Home() {
  return (
    <main className="flex min-h-full w-full items-center justify-center bg-black">
      <div className="MainPage flex h-full w-[400px] flex-col items-center justify-center overflow-hidden bg-white">
        {/* <Header /> */}
        <div id="homepage">
          <HeroSection />
        </div>
        <div id="aboutpage">
          <AboutSection />
        </div>
        <div id="servicepage">
          <ServiceSection />
        </div>
        <div id="workpage">
          <WorkSection />
        </div>
        <div id="contactpage">
          <ContactSection />
        </div>
        {/* <Menubutton /> */}
        <AppButton />
      </div>
    </main>
  );
}
