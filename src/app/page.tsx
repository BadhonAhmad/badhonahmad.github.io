import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CompetitiveProgrammingSection from "@/components/sections/CompetitiveProgrammingSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import MouseTrail from "@/components/ui/MouseTrail";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MouseTrail />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CompetitiveProgrammingSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
