import AnimatedSection from "@/components/AnimatedSection";
import { Monitor, Shield, Mail, Code, Brain, Briefcase } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Digital Literacy Basics",
    description: "Learn essential computer skills and digital tools for everyday use",
    gradient: "gradient-blue",
  },
  {
    icon: Shield,
    title: "Internet Safety & Cybersecurity",
    description: "Stay safe online with practical security awareness training",
    gradient: "gradient-orange",
  },
  {
    icon: Mail,
    title: "Email & Communication Skills",
    description: "Master professional digital communication for school and work",
    gradient: "gradient-green",
  },
  {
    icon: Code,
    title: "Coding & Logical Thinking",
    description: "Build problem-solving skills through beginner-friendly programming",
    gradient: "gradient-blue",
  },
  {
    icon: Brain,
    title: "Introduction to AI",
    description: "Understand artificial intelligence and its real-world applications",
    gradient: "gradient-orange",
  },
  {
    icon: Briefcase,
    title: "Digital Careers & Future Skills",
    description: "Explore career paths in the technology industry",
    gradient: "gradient-green",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              What We <span className="text-gradient">Teach</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our carefully designed curriculum covers essential digital skills for the modern world.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <AnimatedSection key={course.title} delay={index * 0.1}>
              <div className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-full ${course.gradient}`} />
                </div>
                <div className={`w-12 h-12 rounded-xl ${course.gradient} flex items-center justify-center mb-4`}>
                  <course.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
