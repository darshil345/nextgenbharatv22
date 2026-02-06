import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden gradient-hero">
      {/* Subtle decorative shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-secondary" size={26} />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-6">
              We envision a future where every student in India has access to digital knowledge and the
              opportunities it creates. A future where financial background, geography, or language is no
              longer a barrier to learning technology.
            </p>
            <p className="text-primary-foreground/65 text-base md:text-lg leading-relaxed mb-6">
              By scaling free education and student leadership, NextGen Bharat V2 aims to build a nationwide
              learning movement — one where young people teach, inspire, and uplift each other. We believe
              that when students are given the right tools and knowledge, they can change their own lives
              and the communities around them.
            </p>
            <p className="text-primary-foreground/65 text-base md:text-lg leading-relaxed">
              This is more than a project. It's a mission to create an India where digital literacy is a
              right, not a privilege. Join us in making this vision a reality.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionSection;
