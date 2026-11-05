import Advantages from "@/components/sections/Advantages";
import { FAQSection } from "@/components/sections/Faq";
import HeroSection from "@/components/sections/HeroSection";
import Location from "@/components/sections/Location";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/ServicesSection";


export default function Home() {
  return <main>
    <HeroSection />
    <Services />
    <Advantages />
    <Process />
    <Location />
    <FAQSection />
  </main>
}
