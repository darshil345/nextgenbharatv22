import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, FileText, ExternalLink, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ModuleLink {
  label: string;
  url: string;
}

interface Module {
  title: string;
  topics: string[];
  links?: ModuleLink[];
}

interface Assessment {
  items: string[];
}

interface Part {
  title: string;
  tag?: string;
  modules: Module[];
  assessment: Assessment;
}

const COURSE_1_PARTS: Part[] = [
  {
    title: "Digital Skills",
    
    modules: [
      {
        title: "Understanding Digital Skills",
        topics: [
          "What are Digital Skills",
          "Importance in Modern Education",
          "Digital Skills vs Digital Awareness",
          "Real-world Applications",
        ],
        links: [
          {
            label: "Digital Skills Textbook Part 1 Notes",
            url: "https://docs.google.com/document/d/105DCOiMGnAEC1J4UMlnEwOX-aw1Ti7x7/edit?usp=drivesdk&ouid=108455586325314946829&rtpof=true&sd=true",
          },
          {
            label: "Digital Skills Quiz",
            url: "https://forms.gle/vt4WepDQnacRxuNQ8",
          },
        ],
      },
      {
        title: "Computer & Device Fundamentals",
        topics: [
          "Hardware vs Software",
          "Input–Process–Output Model",
          "Types of Devices",
          "Operating Systems Overview",
        ],
        links: [
          {
            label: "Computer & Device Fundamentals Notes",
            url: "https://docs.google.com/document/d/1eyWON85IkDCB-RRuVBdK5jkmWcdW3kR1vf29sAGsRT4/edit?usp=sharing",
          },
        ],
      },
      {
        title: "File & System Management",
        topics: [
          "Folder Creation",
          "File Naming Conventions",
          "Data Backup",
          "Cloud Storage Basics",
        ],
        links: [
          {
            label: "File & System Management Notes",
            url: "https://docs.google.com/document/d/1ys94WN7W2BXHh6CPbSM7AcSEJt85mPk9Magl4NyjWmE/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Internet Fundamentals",
        topics: [
          "What is the Internet",
          "Web Browsers & Search Engines",
          "Safe Browsing",
          "Effective Online Research",
        ],
        links: [
          {
            label: "Internet Fundamentals Notes",
            url: "https://docs.google.com/document/d/1LmsG0g_nFCusy9MJIDmCs-FCb36H25_2K8StngQyTOM/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Productivity Tools",
        topics: [
          "Word Processing",
          "Presentation Tools",
          "Spreadsheets Basics",
          "Cloud Collaboration",
        ],
        links: [
          {
            label: "Productivity Tools Notes",
            url: "https://docs.google.com/document/d/12eOovbwCwoxLfFo0RYtaRXg69a9igA61YdgSmRwk634/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Introduction to Coding",
        topics: [
          "What is Coding",
          "Algorithms",
          "Logic & Basic Structures",
          "Beginner Projects",
        ],
        links: [
          {
            label: "Introduction to Coding Notes",
            url: "https://docs.google.com/document/d/1tc6mMw-r65j7K7Ccl6RPksCTp-8SooS2UOktOEVe14A/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Introduction to Artificial Intelligence",
        topics: ["What is AI", "AI in Daily Life", "Data & Algorithms", "AI Benefits & Risks"],
        links: [
          {
            label: "Introduction to AI Notes",
            url: "https://docs.google.com/document/d/1uQd-9DQzbVN-4vARP9vjC9JHyOoqIICxSGqKvaN7KqQ/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Digital Safety Basics",
        topics: [
          "Strong Passwords",
          "Phishing Awareness",
          "Safe Downloads",
          "Account Protection",
        ],
        links: [
          {
            label: "Digital Safety Basics Notes",
            url: "https://docs.google.com/document/d/1vIrY6MlxvCwGEbhW3qoYc_Zgdbmu2pjTQlbC_hFH94k/edit?usp=sharing",
          },
        ],
      },
    ],
    assessment: {
      items: [
        "Quiz 1 (MCQ)",
        "Scenario-based Quiz",
        "Final Assessment",
        "PPT Presentation",
        "YouTube Lecture",
      ],
    },
  },
  {
    title: "Information & Media Literacy",
    modules: [
      {
        title: "Understanding Information",
        topics: [
          "Types of Information",
          "Facts vs Opinions",
          "Reliable vs Unreliable Sources",
        ],
        links: [
          {
            label: "Understanding Information Notes",
            url: "https://docs.google.com/document/d/1rxuNvKPS8-KKtmQTcIvgfYeagYhNsfh93A2vFdr5mUs/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Research Skills",
        topics: [
          "Advanced Search Techniques",
          "Evaluating Sources",
          "Cross-Verification",
        ],
        links: [
          {
            label: "Research Skills Notes",
            url: "https://docs.google.com/document/d/1Conx6-cMXKhNf4H4DjCHwTaIE6CGhvt5qjHjjhfWk5I/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Media Awareness",
        topics: [
          "Fake News Detection",
          "Algorithm Awareness",
          "Bias & Misinformation",
        ],
        links: [
          {
            label: "Media Awareness Notes",
            url: "https://docs.google.com/document/d/1Q8jjjiBo68XT60FEFyntAvAbFZlk0buZSqGogU5FtS4/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Ethical Content Usage",
        topics: ["Plagiarism", "Citation Basics", "Copyright Awareness"],
        links: [
          {
            label: "Ethical Content Usage Notes",
            url: "https://docs.google.com/document/d/19gDLAjfV-JJEY6KbQAA77bAJtBnTSLXM6Aoh-EJnwRU/edit?usp=sharing",
          },
        ],
      },
    ],
    assessment: {
      items: [
        "Source Evaluation Quiz",
        "Case Study Assignment",
        "Research Project",
      ],
    },
  },
  {
    title: "Digital Communication & Citizenship",
    modules: [
      {
        title: "Professional Communication",
        topics: [
          "Email Etiquette",
          "Structured Writing",
          "Formal vs Informal Tone",
        ],
      },
      {
        title: "Online Collaboration",
        topics: [
          "Shared Documents",
          "Virtual Meetings",
          "Team Communication",
        ],
      },
      {
        title: "Digital Citizenship",
        topics: [
          "Responsible Behavior",
          "Respect & Privacy",
          "Cyberbullying Awareness",
        ],
      },
      {
        title: "Digital Footprint",
        topics: [
          "Online Reputation",
          "Long-Term Impact",
          "Responsible Posting",
        ],
      },
    ],
    assessment: {
      items: [
        "Communication MCQ Quiz",
        "Email Writing Assignment",
        "Digital Footprint Reflection",
      ],
    },
  },
  {
    title: "Online Safety & Cybersecurity",
    modules: [
      {
        title: "Personal Data Protection",
        topics: [
          "Password Management",
          "Two-Factor Authentication",
          "Privacy Settings",
        ],
      },
      {
        title: "Cyber Threat Awareness",
        topics: ["Phishing", "Malware", "Scams"],
      },
      {
        title: "Safe Digital Practices",
        topics: ["Secure Networks", "Software Updates", "Device Protection"],
      },
      {
        title: "Risk Response",
        topics: [
          "Reporting Cyber Issues",
          "Recovery Basics",
          "Responsible Online Habits",
        ],
      },
    ],
    assessment: {
      items: ["Cybersecurity Quiz", "Scenario-Based Test"],
    },
  },
];

const GRADIENT_COLORS = ["gradient-blue", "gradient-orange", "gradient-green"];

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
              Our Courses & <span className="text-gradient">Materials</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-14 leading-relaxed">
            Explore the NextGen Bharat Official Curriculum — carefully structured courses
            with textbooks, quizzes, presentations, and hands-on projects designed for
            effective digital learning.
          </p>
        </AnimatedSection>

        {/* Course 1 */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center shrink-0">
                <BookOpen className="text-primary-foreground" size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  🥇 Course 1
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Digital Literacy
                </h3>
              </div>
            </div>

            <Accordion type="multiple" className="space-y-4">
              {COURSE_1_PARTS.map((part, partIndex) => (
                <AccordionItem
                  key={part.title}
                  value={`part-${partIndex}`}
                  className="border rounded-2xl px-2 bg-card overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline px-4 py-5">
                    <div className="flex items-center gap-3 text-left">
                      <span
                        className={`w-8 h-8 rounded-lg ${GRADIENT_COLORS[partIndex % 3]} flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0`}
                      >
                        {partIndex + 1}
                      </span>
                      <div>
                        <span className="font-heading font-bold text-foreground text-base">
                          Part {partIndex + 1}: {part.title}
                        </span>
                        {part.tag && (
                          <span className="block text-xs text-accent font-medium mt-0.5">
                            ✅ {part.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5">
                    <Accordion type="multiple" className="space-y-2">
                      {part.modules.map((mod, modIndex) => (
                        <AccordionItem
                          key={mod.title}
                          value={`mod-${partIndex}-${modIndex}`}
                          className="border rounded-xl px-1 bg-muted/30"
                        >
                          <AccordionTrigger className="hover:no-underline px-3 py-3 text-sm">
                            <span className="text-left font-semibold text-foreground">
                              Module {modIndex + 1}: {mod.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-3">
                            <ul className="space-y-1.5 mb-3">
                              {mod.topics.map((topic) => (
                                <li
                                  key={topic}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1 shrink-0">•</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                            {mod.links && mod.links.length > 0 && (
                              <div className="space-y-2 pt-2 border-t border-border">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                  📎 Resources
                                </span>
                                {mod.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                  >
                                    <ExternalLink size={14} className="shrink-0" />
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}

                      {/* Assessment */}
                      <div className="mt-3 p-3 rounded-xl bg-accent/5 border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText size={16} className="text-accent" />
                          <span className="text-sm font-semibold text-accent">
                            Assessment
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {part.assessment.items.map((item) => (
                            <li
                              key={item}
                              className="text-muted-foreground text-sm flex items-start gap-2"
                            >
                              <span className="text-accent mt-1 shrink-0">➡</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesSection;
