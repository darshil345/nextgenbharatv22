import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Users, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Beginner-friendly courses designed for self-paced study",
  },
  {
    icon: Users,
    title: "Built by Students",
    description: "Created and maintained by passionate student volunteers",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    description: "Free, open education breaking geographical barriers",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">NextGen Bharat</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              NextGen Bharat V2 is built by students, for students. We provide structured beginner-friendly courses
              in digital skills, coding fundamentals, and artificial intelligence. Our recorded lessons allow learners
              to study at their own pace and gain confidence in technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.15}>
              <div className="group text-center p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
