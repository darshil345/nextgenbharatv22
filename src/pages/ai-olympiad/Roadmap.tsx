import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, CheckCircle2, Star, Crown, Flame, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ROADMAP_STAGES } from "@/data/roadmapData";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Roadmap = () => {
  const { user } = useAuth();
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

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

  const allExerciseIds: string[] = [];
  ROADMAP_STAGES.forEach(stage => stage.nodes.forEach(node => node.exercises.forEach(ex => allExerciseIds.push(ex.id))));

  const isUnlocked = (exerciseId: string) => {
    const idx = allExerciseIds.indexOf(exerciseId);
    if (idx === 0) return true;
    return completedExercises.has(allExerciseIds[idx - 1]);
  };

  // Flatten all nodes across stages for the winding path
  const allNodes = ROADMAP_STAGES.flatMap((stage, si) =>
    stage.nodes.map((node, ni) => ({ ...node, stageIdx: si, stage, nodeIdx: ni }))
  );

  const totalCompleted = allExerciseIds.filter(id => completedExercises.has(id)).length;
  const totalExercises = allExerciseIds.length;

  return (
    <div className="max-w-lg mx-auto pb-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <Flame className="text-secondary" size={18} />
          <span className="text-sm font-bold text-foreground">{totalCompleted}/{totalExercises} completed</span>
          <Sparkles className="text-secondary" size={14} />
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Your Learning Path
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Complete each node to unlock the next!</p>
      </motion.div>

      {/* Winding path */}
      <div className="relative">
        {/* Central winding line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 rounded-full opacity-20" />

        {allNodes.map((node, idx) => {
          const isLeft = idx % 2 === 0;
          const nodeExercises = node.exercises;
          const completedCount = nodeExercises.filter(e => completedExercises.has(e.id)).length;
          const allDone = completedCount === nodeExercises.length;
          const anyUnlocked = nodeExercises.some(e => isUnlocked(e.id));
          const isActive = anyUnlocked && !allDone;

          // Show stage title before first node of each stage
          const showStageTitle = node.nodeIdx === 0;

          return (
            <div key={node.id}>
              {showStageTitle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative z-10 flex justify-center my-6"
                >
                  <div className={`px-5 py-2 rounded-full bg-gradient-to-r ${node.stage.color} text-primary-foreground font-heading font-bold text-sm shadow-lg`}>
                    {node.stage.title}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07, type: "spring", stiffness: 100 }}
                className={`relative flex items-center gap-4 mb-4 ${isLeft ? "flex-row pr-[45%]" : "flex-row-reverse pl-[45%]"}`}
              >
                {/* Node circle */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 shadow-lg transition-all duration-300 ${
                      allDone
                        ? "border-accent bg-accent/10 shadow-accent/20"
                        : isActive
                        ? "border-primary bg-primary/10 shadow-primary/30 animate-pulse"
                        : "border-muted bg-muted/50 opacity-60"
                    }`}
                  >
                    {allDone ? (
                      <div className="relative">
                        <span className="text-2xl">{node.icon}</span>
                        <CheckCircle2 className="absolute -bottom-1 -right-1 text-accent bg-background rounded-full" size={16} />
                      </div>
                    ) : !anyUnlocked ? (
                      <Lock className="text-muted-foreground" size={22} />
                    ) : (
                      <span className="text-2xl">{node.icon}</span>
                    )}
                  </div>

                  {/* Progress dots */}
                  <div className="flex gap-1 justify-center mt-1.5">
                    {nodeExercises.map((ex) => (
                      <div
                        key={ex.id}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          completedExercises.has(ex.id)
                            ? "bg-accent"
                            : isUnlocked(ex.id)
                            ? "bg-primary/50"
                            : "bg-muted-foreground/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Node info card */}
                <div
                  className={`flex-1 rounded-2xl border-2 p-3 transition-all ${
                    allDone
                      ? "border-accent/30 bg-accent/5"
                      : isActive
                      ? "border-primary/30 bg-card shadow-md hover:shadow-lg"
                      : "border-border bg-muted/20 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-foreground text-sm">{node.title}</h3>
                    {allDone && <Crown className="text-secondary" size={14} />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {completedCount}/{nodeExercises.length} exercises
                  </p>

                  {/* Exercise pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {nodeExercises.map((exercise) => {
                      const completed = completedExercises.has(exercise.id);
                      const unlocked = isUnlocked(exercise.id);

                      return (
                        <Link
                          key={exercise.id}
                          to={unlocked ? `/roadmap/${exercise.id}` : "#"}
                          className={!unlocked ? "pointer-events-none" : ""}
                          onClick={(e) => !unlocked && e.preventDefault()}
                        >
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              completed
                                ? "bg-accent/15 text-accent border border-accent/30"
                                : unlocked
                                ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:scale-105 cursor-pointer"
                                : "bg-muted text-muted-foreground border border-border"
                            }`}
                          >
                            {completed ? (
                              <CheckCircle2 size={12} />
                            ) : unlocked ? (
                              <Star size={12} />
                            ) : (
                              <Lock size={10} />
                            )}
                            {exercise.title}
                            <Badge
                              className={`ml-1 text-[9px] px-1 py-0 h-4 ${
                                exercise.difficulty === "Hard"
                                  ? "bg-destructive/10 text-destructive border-destructive/20"
                                  : exercise.difficulty === "Medium"
                                  ? "bg-secondary/10 text-secondary border-secondary/20"
                                  : "bg-accent/10 text-accent border-accent/20"
                              }`}
                            >
                              +{exercise.xpReward}
                            </Badge>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Connector dot on center line */}
              <div className="relative flex justify-center -mt-2 mb-2">
                <div className={`w-3 h-3 rounded-full z-10 ${allDone ? "bg-accent" : anyUnlocked ? "bg-primary" : "bg-muted-foreground/30"}`} />
              </div>
            </div>
          );
        })}

        {/* Finish trophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="relative flex justify-center mt-4"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center shadow-xl border-4 border-background">
            <span className="text-3xl">🏆</span>
          </div>
        </motion.div>
        <p className="text-center text-sm font-heading font-bold text-muted-foreground mt-2">IOAI Ready!</p>
      </div>
    </div>
  );
};

export default Roadmap;
