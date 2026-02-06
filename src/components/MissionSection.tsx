import AnimatedSection from "@/components/AnimatedSection";
import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="flex-1">
            <div className="w-20 h-20 rounded-2xl gradient-orange flex items-center justify-center mb-6">
              <Target className="text-secondary-foreground" size={36} />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We aim to reduce digital inequality by offering accessible, free, and high-quality education. Through
              volunteer educators and online resources, we help learners develop practical skills that improve
              education, career opportunities, and confidence in the digital age.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex-1">
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl gradient-hero p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center p-8">
                  <div className="space-y-6 text-center">
                    <div className="text-5xl font-heading font-bold text-gradient">100%</div>
                    <div className="text-foreground font-heading font-semibold text-xl">Free Education</div>
                    <p className="text-muted-foreground text-sm">
                      No fees. No barriers. Just learning.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
