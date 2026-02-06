import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CoursesSection from "@/components/CoursesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VolunteerSection from "@/components/VolunteerSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <CoursesSection />
        <HowItWorksSection />
        <VolunteerSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
