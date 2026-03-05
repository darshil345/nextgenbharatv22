import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, CheckCircle2, Star, ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ROADMAP_STAGES } from "@/data/roadmapData";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Roadmap = () => {
  const { user } = useAuth();
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [expandedStage, setExpandedStage] = useState<string>(ROADMAP_STAGES[0].id);

  useEffect(() => {
    if (!user) return;
    const fetchProgress = async () => {
      const { data } = await supabase
        .from("exercise_progress")
        .select("exercise_id")
        .eq("user_id", user.id)
        .eq("completed", true);
      if (data) setCompletedExercises(new Set(data.map(d => d.exercise_id)));
    };
    fetchProgress();
  }, [user]);

  // Determine which exercises are unlocked (previous must be complete)
  const allExerciseIds: string[] = [];
  ROADMAP_STAGES.forEach(stage => stage.nodes.forEach(node => node.exercises.forEach(ex => allExerciseIds.push(ex.id))));

  const isUnlocked = (exerciseId: string) => {
    const idx = allExerciseIds.indexOf(exerciseId);
    if (idx === 0) return true;
    return completedExercises.has(allExerciseIds[idx - 1]);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
          🗺️ Learning Roadmap
        </h1>
        <p className="text-sm text-muted-foreground">
          Complete exercises in order to unlock new topics and earn XP
        </p>
      </motion.div>

      {ROADMAP_STAGES.map((stage, stageIdx) => {
        const stageExercises = stage.nodes.flatMap(n => n.exercises);
        const stageCompleted = stageExercises.filter(e => completedExercises.has(e.id)).length;
        const stageTotal = stageExercises.length;
        const stagePercent = stageTotal > 0 ? (stageCompleted / stageTotal) * 100 : 0;
        const isExpanded = expandedStage === stage.id;

        return (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stageIdx * 0.1 }}
          >
            <button
              onClick={() => setExpandedStage(isExpanded ? "" : stage.id)}
              className="w-full text-left"
            >
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                      {stage.title}
                      {stagePercent === 100 && <CheckCircle2 className="text-accent" size={18} />}
                    </h2>
                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{stageCompleted}/{stageTotal}</span>
                    {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                </div>
                <Progress value={stagePercent} className="h-2" />
              </Card>
            </button>

            {isExpanded && (
              <div className="mt-3 ml-4 border-l-2 border-border pl-4 space-y-4">
                {stage.nodes.map((node, nodeIdx) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: nodeIdx * 0.05 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{node.icon}</span>
                      <h3 className="font-heading font-bold text-foreground text-sm">{node.title}</h3>
                    </div>

                    <div className="space-y-2">
                      {node.exercises.map((exercise) => {
                        const completed = completedExercises.has(exercise.id);
                        const unlocked = isUnlocked(exercise.id);

                        return (
                          <Link
                            key={exercise.id}
                            to={unlocked ? `/roadmap/${exercise.id}` : "#"}
                            className={!unlocked ? "pointer-events-none" : ""}
                          >
                            <div
                              className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                                completed
                                  ? "border-accent/30 bg-accent/5"
                                  : unlocked
                                  ? "border-border hover:border-primary/40 bg-card cursor-pointer hover:shadow-sm"
                                  : "border-border bg-muted/30 opacity-50"
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                  completed
                                    ? "bg-accent text-accent-foreground"
                                    : unlocked
                                    ? "gradient-hero text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {completed ? (
                                  <CheckCircle2 size={18} />
                                ) : unlocked ? (
                                  <Star size={18} />
                                ) : (
                                  <Lock size={16} />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-semibold ${completed ? "text-accent" : "text-foreground"}`}>
                                  {exercise.title}
                                </p>
                                <p className="text-xs text-muted-foreground">{exercise.description}</p>
                              </div>
                              <div className="text-right shrink-0">
                                <Badge
                                  className={`text-[10px] ${
                                    exercise.difficulty === "Hard"
                                      ? "bg-destructive/10 text-destructive border-destructive/20"
                                      : exercise.difficulty === "Medium"
                                      ? "bg-secondary/10 text-secondary border-secondary/20"
                                      : "bg-accent/10 text-accent border-accent/20"
                                  }`}
                                >
                                  {exercise.difficulty}
                                </Badge>
                                <p className="text-xs text-muted-foreground mt-1">+{exercise.xpReward} XP</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Roadmap;
