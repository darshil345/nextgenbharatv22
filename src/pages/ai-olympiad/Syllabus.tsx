import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { INAIO_SYLLABUS } from "@/data/inaiOSyllabus";

// Mock progress data
const TOPIC_PROGRESS: Record<string, number> = {
  "Computational and Logical Thinking": 85,
  "Foundations of Algebra": 60,
  "Probability": 45,
  "Statistics": 70,
  "Linear Algebra and Matrices": 30,
  "Optimization": 20,
  "Data Representation and Visualization": 55,
  "Learning Fundamentals": 40,
  "Evaluation Metrics": 25,
  "Supervised Learning": 50,
  "Unsupervised Learning": 15,
  "Probabilistic Models": 35,
  "Famous Algorithms": 10,
};

const STAGE_COLORS = ["gradient-blue", "gradient-orange"];
const SECTION_COLORS = ["text-primary", "text-secondary", "text-accent"];

const Syllabus = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          📚 INAIO Syllabus
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          Master every topic from Foundations to Advanced ML — structured for International Olympiad in AI preparation.
        </p>
      </motion.div>

      {/* Stage Tabs */}
      {IOAI_SYLLABUS.map((stage, stageIdx) => (
        <motion.div
          key={stage.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stageIdx * 0.1 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${STAGE_COLORS[stageIdx]} flex items-center justify-center shrink-0`}>
                  <BookOpen className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <CardTitle className="text-xl">{stage.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {stage.sections.length} sections · {stage.sections.reduce((a, s) => a + s.topics.length, 0)} topics
                  </p>
                </div>
                {stageIdx === 1 && (
                  <Badge variant="secondary" className="ml-auto gap-1">
                    <Lock size={10} /> Pro
                  </Badge>
                )}
              </div>
              {stage.note && (
                <p className="text-xs text-muted-foreground mt-3 p-3 rounded-lg bg-muted/50 border border-border">
                  ℹ️ {stage.note}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="space-y-2">
                {stage.sections.map((section, secIdx) => (
                  <AccordionItem
                    key={section.title}
                    value={`${stageIdx}-${secIdx}`}
                    className="border rounded-xl px-1 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline px-3 py-3">
                      <div className="flex items-center gap-3 text-left">
                        <span className={`font-heading font-bold ${SECTION_COLORS[secIdx % 3]}`}>
                          §{secIdx + 1}
                        </span>
                        <span className="font-heading font-bold text-foreground text-sm">
                          {section.title}
                        </span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {section.topics.length} topics
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-3">
                      {section.note && (
                        <p className="text-xs text-muted-foreground mb-3 p-2 rounded-lg bg-accent/5 border border-accent/20">
                          💡 {section.note}
                        </p>
                      )}
                      <div className="space-y-2">
                        {section.topics.map((topic) => {
                          const progress = TOPIC_PROGRESS[topic.name] || 0;
                          return (
                            <div
                              key={topic.name}
                              className="p-3 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {progress >= 80 ? (
                                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border-2 border-border shrink-0" />
                                )}
                                <span className="font-semibold text-foreground text-sm flex-1">
                                  {topic.name}
                                </span>
                                <span className="text-xs text-muted-foreground">{progress}%</span>
                              </div>
                              <Progress value={progress} className="h-1.5 mb-2" />
                              <ul className="space-y-1 pl-6">
                                {topic.subtopics.map((sub) => (
                                  <li key={sub} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                    <ChevronRight size={10} className="mt-0.5 shrink-0 text-primary/50" />
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Syllabus;
