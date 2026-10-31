import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { Location } from "@/components/sections/Location";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return <main>
    <HeroSection/>
    <Services/>
    <WhyUs/>
    <Process/>
    <Location/>
    <FinalCTA/>
  </main>
}