import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServiceSection from "@/components/section/ServiceSection";
import WorkSection from "@/components/section/WorkSection";
// import Header from "@/components/section/Header";
import ContactSection from "@/components/section/ContactSection";
import Menubutton from "@/components/ui/MenuButton";
import AppButton from '@/components/ui/MBotton'
export default function Home() {
  return (
    <main className="flex w-full  min-h-full   items-center justify-center    bg-black">
      <div className=" flex flex-col w-[400px] h-full  items-center justify-center  bg-white overflow-hidden">
        {/* <Header /> */}
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <WorkSection />
        <ContactSection />
        {/* <Menubutton /> */}
        <AppButton/>
      </div>
    </main>
  );
}
