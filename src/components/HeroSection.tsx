import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const VOLUNTEER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";
const MATERIALS_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,91%,15%)/0.85] via-[hsl(217,91%,25%)/0.75] to-[hsl(152,69%,25%)/0.7]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            🇮🇳 Student-Led Digital Education Initiative
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          NextGen Bharat{" "}
          <span className="text-secondary">V2</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-medium mb-4 max-w-2xl mx-auto"
        >
          Free Digital & AI Education for the Next Generation of Learners
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-primary-foreground/60 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          NextGen Bharat V2 is a student-led initiative providing free digital literacy and artificial intelligence
          education to underserved learners. Our mission is to bridge the digital divide and empower students with
          skills needed for the modern world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
              Access Free Learning Videos & Materials
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Learners" },
            { value: "50+", label: "Volunteers" },
            { value: "100+", label: "Lessons" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
