import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServiceSection from "@/components/section/ServiceSection";
import WorkSection from "@/components/section/WorkSection";
import ContactSection from "@/components/section/ContactSection";
import Menubutton from "@/components/ui/MenuButton";
export default function Home() {
  return (
    <main className="flex w-screen  min-h-screen  flex-col items-center justify-between p-5   bg-black">
      <div className="flex flex-col w-[418px] h-full items-center justify-center  bg-white ">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <WorkSection />
        <ContactSection />
        <Menubutton />
      </div>
    </main>
  );
}
