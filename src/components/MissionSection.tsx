import AnimatedSection from "@/components/AnimatedSection";
import { Target, CheckCircle } from "lucide-react";

const goals = [
  "Make digital education accessible to every student in India regardless of their background",
  "Provide high-quality, structured courses that are always 100% free",
  "Train volunteer educators to deliver impactful and engaging lessons",
  "Help learners develop practical skills for education, careers, and daily life",
  "Build a nationwide community of student leaders passionate about technology",
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We aim to reduce digital inequality by offering accessible, free, and high-quality education to
              underserved communities across India. Through dedicated volunteer educators and carefully crafted
              online resources, we help learners develop practical skills that improve their education, expand
              career opportunities, and build confidence in the digital age.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every child deserves the chance to learn, grow, and dream big — no matter where they come from.
              NextGen Bharat V2 exists to make that possible.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl gradient-hero p-[2px]">
              <div className="bg-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
                    <Target className="text-secondary-foreground" size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Our Goals</h3>
                </div>
                <div className="space-y-4">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent mt-0.5 shrink-0" size={20} />
                      <p className="text-muted-foreground leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionSection;
