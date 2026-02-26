import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, GraduationCap } from "lucide-react";

const EXTERNAL_COURSES = [
  {
    title: "AI CBSE Handbook",
    url: "https://cbseacademic.nic.in/web_material/Curriculum26/publication/secondary/AI_Facilitators_Handbook_X.pdf",
    source: "CBSE Academic",
  },
  {
    title: "AI Powered Jio Materials",
    url: "https://www.jio.com/ai-classroom/",
    source: "Jio",
  },
  {
    title: "AI: A Modern Approach Textbook",
    url: "https://people.engr.tamu.edu/guni/csce625/slides/AI.pdf",
    source: "Texas A&M University",
  },
  {
    title: "AI IBM Courses",
    url: "https://skillsbuild.org/students/course-catalog/artificial-intelligence",
    source: "IBM SkillsBuild",
  },
];

const CoursesByOthersSection = () => {
  return (
    <section id="courses-by-others" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              External Resources
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Courses by <span className="text-gradient">Others</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-14 leading-relaxed">
            Curated external resources and courses from trusted organizations to supplement your digital learning journey.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
          {EXTERNAL_COURSES.map((course, index) => (
            <AnimatedSection key={course.title} delay={0.15 + index * 0.05}>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="w-11 h-11 rounded-xl gradient-blue flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary-foreground" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-base">
                    {course.title}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {course.source}
                  </span>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesByOthersSection;
