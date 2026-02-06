import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, CheckCircle } from "lucide-react";

const VOLUNTEER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";

const benefits = [
  "Gain valuable teaching and mentoring experience",
  "Build leadership skills and strengthen your resume",
  "Connect with a network of like-minded students across India",
  "Make a tangible impact on underserved communities",
  "Flexible commitment — contribute on your own schedule",
];

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Become a <span className="text-gradient">Volunteer</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Passionate about education and technology? Join our volunteer team to teach, mentor, and help expand
              digital education access across India. Whether you're a college student, a working professional, or
              simply someone who cares about education — there's a place for you here.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No prior teaching experience is required. We provide training materials and support to help you
              become an effective educator. All you need is enthusiasm and a desire to make a difference.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto mb-12">
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="text-secondary" size={20} />
                Why Volunteer With Us?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
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
