import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-primary-foreground" size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              We envision a future where every student has access to digital knowledge and opportunities.
              By scaling free education and student leadership, NextGen Bharat V2 aims to build a
              nationwide learning movement.
            </p>
            <div className="flex gap-3 justify-center mt-10">
              <div className="w-12 h-1.5 rounded-full bg-primary-foreground/30" />
              <div className="w-12 h-1.5 rounded-full bg-secondary" />
              <div className="w-12 h-1.5 rounded-full bg-primary-foreground/30" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionSection;
