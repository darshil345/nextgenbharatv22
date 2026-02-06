import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const VOLUNTEER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";
const MATERIALS_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Subtle decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 text-center py-28 md:py-36">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-8">
            🇮🇳 Student-Led Digital Education Initiative
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          NextGen Bharat{" "}
          <span className="text-secondary">V2</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-foreground/85 font-medium mb-6 max-w-2xl mx-auto"
        >
          Free Digital & AI Education for the Next Generation of Learners
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/65 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          NextGen Bharat V2 is a student-led initiative providing free digital literacy and artificial intelligence
          education to underserved learners across India. Our mission is to bridge the digital divide and empower
          students with the skills they need for the modern world — completely free of cost.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href={VOLUNTEER_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="orange" size="xl" className="w-full sm:w-auto">
              Join as a Volunteer
              <ArrowRight className="ml-1" size={20} />
            </Button>
          </a>
          <a href={MATERIALS_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              <Play size={20} className="mr-1" />
              Access Free Learning Materials
            </Button>
          </a>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: GraduationCap, label: "Free Courses", desc: "100% free for every student" },
            { icon: Lightbulb, label: "Self-Paced", desc: "Learn anytime, anywhere" },
            { icon: Rocket, label: "Future Ready", desc: "AI & digital skills training" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <item.icon className="text-secondary" size={28} />
              <span className="text-primary-foreground font-heading font-bold text-sm">{item.label}</span>
              <span className="text-primary-foreground/60 text-xs">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 100L80 87.5C160 75 320 50 480 37.5C640 25 800 25 960 33.3C1120 41.7 1280 58.3 1360 66.7L1440 75V100H0Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
