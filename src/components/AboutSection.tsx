import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Users, Globe, Heart, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Our courses follow a carefully designed curriculum that takes students from basic digital literacy to advanced topics like AI and coding. Each module builds on the previous one, ensuring a smooth learning journey.",
  },
  {
    icon: Users,
    title: "Built by Students, for Students",
    description: "Every lesson, resource, and mentorship session is created by passionate student volunteers who understand the challenges faced by learners. We speak your language and know what works.",
  },
  {
    icon: Globe,
    title: "Accessible to Everyone",
    description: "Geography and financial status should never be barriers to learning. Our platform is completely free, available online, and designed to work even on basic devices with limited internet connectivity.",
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Join a growing community of learners and mentors who are passionate about technology and education. Get help, share achievements, and grow together.",
  },
  {
    icon: Award,
    title: "Practical Skills That Matter",
    description: "We focus on skills that are directly applicable — from writing professional emails and staying safe online to understanding AI and building simple programs.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">NextGen Bharat</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              NextGen Bharat V2 is built by students, for students. We provide structured, beginner-friendly courses
              in digital skills, coding fundamentals, and artificial intelligence — helping learners
              gain real confidence in technology.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded with the belief that every young person in India deserves access to quality digital education,
              we are creating a movement where students teach students, knowledge is shared freely, and the next
              generation is prepared for the opportunities of tomorrow.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
