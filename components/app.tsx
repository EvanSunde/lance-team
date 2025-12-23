import { HeroHeader } from "@/components/header/hero-header";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { Footer } from "@/components/footer/footer";
import { AboutSection } from "./sections/about";
import { ServicesSection } from "./sections/service";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* We need to define all the components in this file to run */}
      <HeroHeader />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <AboutSection />

      <Footer />
    </div>
  );
}