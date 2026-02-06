import AnimatedSection from "@/components/AnimatedSection";
import { PlayCircle, BookOpen, Users } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: PlayCircle,
    title: "Watch Free Recorded Lessons",
    description: "Start by browsing our library of video lessons covering digital literacy, coding, AI, and more. Each lesson is short, focused, and designed for beginners. Watch them anytime, anywhere — at your own pace.",
    gradient: "gradient-blue",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Practice with Guided Materials",
    description: "After watching lessons, reinforce what you learned with our guided worksheets, quizzes, and hands-on exercises. Practice is key to building real skills, and our materials make it easy and fun.",
    gradient: "gradient-orange",
  },
  {
    step: 3,
    icon: Users,
    title: "Join the Community & Grow Your Skills",
    description: "Connect with fellow learners and volunteer mentors in our growing community. Ask questions, share your progress, get help when you're stuck, and celebrate your achievements together. Learning is better together.",
    gradient: "gradient-green",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-14 leading-relaxed">
            Getting started with NextGen Bharat V2 is simple. Follow these three steps to begin your learning journey.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-8">
          {steps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.15}>
              <div className="flex items-start gap-6">
                {/* Step number & line */}
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl ${item.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <item.icon className="text-primary-foreground" size={26} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
