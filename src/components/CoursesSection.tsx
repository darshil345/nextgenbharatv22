import AnimatedSection from "@/components/AnimatedSection";
import { Monitor, Shield, Mail, Code, Brain, Briefcase } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Digital Literacy Basics",
    description: "Learn how to use computers, navigate operating systems, manage files and folders, and become comfortable with everyday digital tools. This foundational course ensures every learner can confidently operate in a digital environment.",
    gradient: "gradient-blue",
  },
  {
    icon: Shield,
    title: "Internet Safety & Cybersecurity",
    description: "Understand how to stay safe online — from recognizing phishing scams and creating strong passwords to understanding privacy settings and protecting personal information on the internet.",
    gradient: "gradient-orange",
  },
  {
    icon: Mail,
    title: "Email & Communication Skills",
    description: "Master the art of professional digital communication. Learn to write effective emails, use collaboration tools like Google Workspace, and communicate clearly in academic and professional settings.",
    gradient: "gradient-green",
  },
  {
    icon: Code,
    title: "Coding & Logical Thinking",
    description: "Begin your programming journey with beginner-friendly coding lessons. Develop logical thinking and problem-solving abilities through hands-on exercises in block-based and text-based programming.",
    gradient: "gradient-blue",
  },
  {
    icon: Brain,
    title: "Introduction to Artificial Intelligence",
    description: "Discover what AI is, how it works, and where it is used in the real world. Explore topics like machine learning, chatbots, and smart assistants in an easy-to-understand, non-technical format.",
    gradient: "gradient-orange",
  },
  {
    icon: Briefcase,
    title: "Digital Careers & Future Skills",
    description: "Explore the wide range of career paths available in the technology industry. Learn about freelancing, digital marketing, data entry, graphic design, and other skills that open doors to new opportunities.",
    gradient: "gradient-green",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              What We <span className="text-gradient">Teach</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-14 leading-relaxed">
            Our carefully designed curriculum covers essential digital skills for the modern world. Each course
            is structured with video lessons, practice materials, and real-world examples to ensure effective learning.
            All content is beginner-friendly and requires no prior technical knowledge.
          </p>
        </AnimatedSection>

        <div className="space-y-5 max-w-3xl mx-auto">
          {courses.map((course, index) => (
            <AnimatedSection key={course.title} delay={index * 0.08}>
              <div className="group flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${course.gradient} flex items-center justify-center shrink-0 mt-1`}>
                  <course.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
