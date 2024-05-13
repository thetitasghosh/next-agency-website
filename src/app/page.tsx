import HeroSection from '@/components/section/HeroSection'
import AboutSection from '@/components/section/AboutSection'
import ServiceSection from '@/components/section/ServiceSection'
import WorkSection from '@/components/section/WorkSection'
import ContactSection from '@/components/section/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-5 mix-blend-normal">
     <HeroSection/>
     <AboutSection/>
     <ServiceSection/>
     <WorkSection/>
     <ContactSection/>
    </main>
  )
}
