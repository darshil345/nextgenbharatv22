import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const VOLUNTEER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="w-20 h-20 rounded-full gradient-orange flex items-center justify-center mx-auto shadow-xl">
                <Heart className="text-secondary-foreground" size={36} />
              </div>
              <div className="absolute -inset-4 rounded-full bg-secondary/10 animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Become a <span className="text-gradient">Volunteer</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Passionate about education and technology? Join our volunteer team to teach, mentor, and help expand
              digital education access. Make a real difference in students' lives.
            </p>

            <a href={VOLUNTEER_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="orange" size="xl">
                Apply as a Volunteer
                <ArrowRight className="ml-1" size={20} />
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VolunteerSection;
