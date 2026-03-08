import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Clock, ChevronRight, ArrowLeft, Sparkles, GraduationCap, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRACTICE_CATEGORIES, type PracticeCategory, type StudyNote, type Worksheet } from "@/data/practiceMaterials";
import WorksheetQuiz from "@/components/ai-olympiad/WorksheetQuiz";

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const cls = difficulty === "Advanced" ? "bg-destructive/10 text-destructive border-destructive/20"
    : difficulty === "Intermediate" ? "bg-secondary/10 text-secondary border-secondary/20"
    : "bg-accent/10 text-accent border-accent/20";
  return <Badge className={`text-[10px] ${cls}`}>{difficulty}</Badge>;
};

const NoteViewer = ({ note, onBack }: { note: StudyNote; onBack: () => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
    <Button variant="ghost" size="sm" onClick={onBack} className="mb-3 gap-1 text-muted-foreground">
      <ArrowLeft size={14} /> Back to materials
    </Button>
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">{note.icon}</span>
          <h2 className="font-heading text-xl font-bold text-foreground">{note.title}</h2>
        </div>
        <div className="prose prose-sm max-w-none">
          {note.content.split("\n").map((line, i) => {
            if (line === "---") return <hr key={i} className="my-4 border-border" />;
            if (line.startsWith("**") && line.endsWith("**")) return <h3 key={i} className="font-heading font-bold text-foreground text-base mt-4 mb-2">{line.replace(/\*\*/g, "")}</h3>;
            if (line.startsWith("**")) {
              const parts = line.split("**");
              return <p key={i} className="text-sm text-foreground mb-1">{parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : part))}</p>;
            }
            if (line.startsWith("•")) return <p key={i} className="text-sm text-muted-foreground ml-3 mb-0.5">{line}</p>;
            if (line.match(/^\d+\./)) return <p key={i} className="text-sm text-foreground ml-3 mb-0.5">{line}</p>;
            if (line.startsWith("→")) return <p key={i} className="text-sm text-primary font-semibold ml-3 mb-1">{line}</p>;
            if (line.startsWith("|")) return <p key={i} className="text-xs text-muted-foreground font-mono ml-3 mb-0">{line}</p>;
            if (line.trim() === "") return <br key={i} />;
            return <p key={i} className="text-sm text-muted-foreground mb-1">{line}</p>;
          })}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Practice = () => {
  const [selectedCategory, setSelectedCategory] = useState<PracticeCategory | null>(null);
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null);
  const [activeWorksheet, setActiveWorksheet] = useState<Worksheet | null>(null);

  if (activeWorksheet) {
    return <div className="max-w-2xl mx-auto"><WorksheetQuiz worksheet={activeWorksheet} onBack={() => setActiveWorksheet(null)} /></div>;
  }
  if (selectedNote) {
    return <div className="max-w-2xl mx-auto"><NoteViewer note={selectedNote} onBack={() => setSelectedNote(null)} /></div>;
  }
  if (selectedCategory) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <Button variant="ghost" size="sm" onClick={() => setSelectedCategory(null)} className="mb-3 gap-1 text-muted-foreground"><ArrowLeft size={14} /> All Topics</Button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center text-2xl">{selectedCategory.icon}</div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">{selectedCategory.title}</h1>
              <p className="text-sm text-muted-foreground">{selectedCategory.description}</p>
            </div>
          </div>
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="notes" className="flex-1 gap-1"><BookOpen size={14} /> Study Notes</TabsTrigger>
              <TabsTrigger value="worksheets" className="flex-1 gap-1"><FileText size={14} /> Worksheets</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="space-y-3">
              {selectedCategory.notes.map((note, idx) => (
                <motion.div key={note.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                  <Card className="cursor-pointer hover:shadow-md transition-all hover:border-primary/30" onClick={() => setSelectedNote(note)}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg shrink-0">{note.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-foreground text-sm">{note.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{note.content.substring(0, 80).replace(/\*\*/g, "")}...</p>
                      </div>
                      <ChevronRight size={16} className="text-muted-foreground" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
            <TabsContent value="worksheets" className="space-y-3">
              {selectedCategory.worksheets.map((ws, idx) => (
                <motion.div key={ws.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/30">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading font-bold text-foreground text-sm">{ws.title}</h3>
                        <DifficultyBadge difficulty={ws.difficulty} />
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{ws.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><FileText size={12} /> {ws.questionCount} questions</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {ws.estimatedTime}</span>
                        </div>
                        <Button size="sm" className="text-xs h-7 gap-1 gradient-hero text-primary-foreground" onClick={() => setActiveWorksheet(ws)}>
                          <Zap size={12} /> Start Quiz
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {ws.topics.map(t => <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <GraduationCap className="text-primary" size={18} />
          <span className="text-sm font-bold text-foreground">Practice & Study</span>
          <Sparkles className="text-secondary" size={14} />
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Study Materials</h1>
        <p className="text-sm text-muted-foreground mt-1">Notes, worksheets, and practice problems for INAIO prep</p>
      </motion.div>
      <div className="grid gap-3">
        {PRACTICE_CATEGORIES.map((cat, idx) => (
          <motion.div key={cat.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
            <Card className="cursor-pointer hover:shadow-md transition-all hover:border-primary/30" onClick={() => setSelectedCategory(cat)}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center text-2xl shrink-0">{cat.icon}</div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-foreground text-sm">{cat.title}</h2>
                  <p className="text-xs text-muted-foreground">{cat.description}</p>
                  <div className="flex gap-2 mt-1.5">
                    <Badge variant="outline" className="text-[10px] gap-1"><BookOpen size={10} /> {cat.notes.length} notes</Badge>
                    <Badge variant="outline" className="text-[10px] gap-1"><FileText size={10} /> {cat.worksheets.length} worksheets</Badge>
                  </div>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
