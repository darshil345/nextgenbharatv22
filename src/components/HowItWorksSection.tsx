import AnimatedSection from "@/components/AnimatedSection";
import { PlayCircle, BookOpen, Users } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: PlayCircle,
    title: "Watch Free Recorded Lessons",
    description: "Access our library of easy-to-follow video lessons at your own pace",
    gradient: "gradient-blue",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Practice with Guided Materials",
    description: "Reinforce learning with worksheets, quizzes, and hands-on exercises",
    gradient: "gradient-orange",
  },
  {
    step: 3,
    icon: Users,
    title: "Join the Community & Grow",
    description: "Connect with mentors and peers to build confidence and skills together",
    gradient: "gradient-green",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.2}>
              <div className="relative text-center">
                <div className={`w-16 h-16 rounded-2xl ${item.gradient} flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}>
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <div className="absolute -top-2 -right-2 md:right-auto md:left-[calc(50%+20px)] w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-heading font-bold text-foreground z-20">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
