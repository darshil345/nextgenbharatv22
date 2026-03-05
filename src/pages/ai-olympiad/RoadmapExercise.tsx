import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, XCircle, ChevronRight, RotateCcw, Star, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ALL_EXERCISES } from "@/data/roadmapData";
import { EXERCISE_QUESTIONS } from "@/data/exerciseQuestions";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const TIMER_SECONDS = 30;

const RoadmapExercise = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const navigate = useNavigate();
  const { user, refreshProfile } = useAuth();
  const { toast } = useToast();

  const exercise = ALL_EXERCISES.find(e => e.id === exerciseId);
  const questions = exerciseId ? EXERCISE_QUESTIONS[exerciseId] ?? [] : [];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [quizDone, setQuizDone] = useState(false);

  const question = questions[currentQ];
  const progressPercent = questions.length > 0 ? ((currentQ + (answered ? 1 : 0)) / questions.length) * 100 : 0;

  useEffect(() => {
    if (answered || quizDone || !question) return;
    if (timer <= 0) { handleAnswer(-1); return; }
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, answered, quizDone, question]);

  const handleAnswer = useCallback((idx: number) => {
    if (answered || !question) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) {
      setScore(s => s + 1);
    }
  }, [answered, question]);

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setQuizDone(true);
      saveProgress();
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setTimer(TIMER_SECONDS);
    }
  };

  const saveProgress = async () => {
    if (!user || !exercise) return;
    const xpEarned = Math.round((score / questions.length) * exercise.xpReward);
    
    // Save exercise progress
    await supabase.from("exercise_progress").upsert({
      user_id: user.id,
      exercise_id: exercise.id,
      completed: true,
      xp_earned: xpEarned,
      score,
      completed_at: new Date().toISOString(),
    }, { onConflict: "user_id,exercise_id" });

    // Update user XP in profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("xp")
      .eq("user_id", user.id)
      .single();
    
    if (profile) {
      await supabase
        .from("profiles")
        .update({ xp: profile.xp + xpEarned })
        .eq("user_id", user.id);
    }

    await refreshProfile();
    
    toast({
      title: `+${xpEarned} XP earned! 🎉`,
      description: `You scored ${score}/${questions.length} on ${exercise.title}`,
    });
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setTimer(TIMER_SECONDS);
    setQuizDone(false);
  };

  if (!exercise || questions.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <p className="text-muted-foreground">Exercise not found.</p>
        <Button onClick={() => navigate("/roadmap")} className="mt-4">Back to Roadmap</Button>
      </div>
    );
  }

  if (quizDone) {
    const accuracy = Math.round((score / questions.length) * 100);
    const xpEarned = Math.round((score / questions.length) * exercise.xpReward);
    return (
      <div className="max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <Card className="p-8">
            <div className="text-6xl mb-4">{accuracy >= 80 ? "🏆" : accuracy >= 60 ? "⭐" : "💪"}</div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{exercise.title} Complete!</h2>
            <p className="text-muted-foreground mb-6">Great effort!</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-muted/50">
                <p className="font-heading text-2xl font-bold text-foreground">{score}/{questions.length}</p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <p className="font-heading text-2xl font-bold text-primary">+{xpEarned}</p>
                <p className="text-xs text-muted-foreground">XP Earned</p>
              </div>
              <div className="p-3 rounded-xl bg-accent/10">
                <p className="font-heading text-2xl font-bold text-accent">{accuracy}%</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={handleRestart} variant="outline" className="gap-2">
                <RotateCcw size={16} /> Try Again
              </Button>
              <Button onClick={() => navigate("/roadmap")} className="gap-2 gradient-hero text-primary-foreground">
                <ArrowLeft size={16} /> Back to Roadmap
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" onClick={() => navigate("/roadmap")} className="gap-1 mb-1 -ml-2">
            <ArrowLeft size={14} /> Roadmap
          </Button>
          <h1 className="font-heading text-xl font-bold text-foreground">{exercise.title}</h1>
          <p className="text-sm text-muted-foreground">
            Question {currentQ + 1} of {questions.length} · +{exercise.xpReward} XP
          </p>
        </div>
        <Badge className={`${
          exercise.difficulty === "Hard"
            ? "bg-destructive/10 text-destructive border-destructive/20"
            : exercise.difficulty === "Medium"
            ? "bg-secondary/10 text-secondary border-secondary/20"
            : "bg-accent/10 text-accent border-accent/20"
        }`}>
          {exercise.difficulty}
        </Badge>
      </div>

      <Progress value={progressPercent} className="h-2" />

      <div className="flex items-center gap-2 justify-end">
        <Clock size={14} className={timer <= 10 ? "text-destructive" : "text-muted-foreground"} />
        <span className={`text-sm font-mono font-bold ${timer <= 10 ? "text-destructive" : "text-foreground"}`}>
          {timer}s
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="font-heading text-lg font-bold text-foreground mb-5">
                {question?.question}
              </h2>
              <div className="space-y-2">
                {question?.options.map((opt, idx) => {
                  const isCorrect = idx === question.correct;
                  const isSelected = idx === selected;
                  let optionClass = "border-border hover:border-primary/40 bg-card cursor-pointer";
                  if (answered) {
                    if (isCorrect) optionClass = "border-accent bg-accent/10";
                    else if (isSelected && !isCorrect) optionClass = "border-destructive bg-destructive/10";
                    else optionClass = "border-border bg-muted/30 opacity-50";
                  } else if (isSelected) {
                    optionClass = "border-primary bg-primary/10";
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => !answered && handleAnswer(idx)}
                      disabled={answered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${optionClass}`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border-2 ${
                        answered && isCorrect ? "border-accent bg-accent text-primary-foreground"
                          : answered && isSelected && !isCorrect ? "border-destructive bg-destructive text-primary-foreground"
                          : "border-border"
                      }`}>
                        {answered && isCorrect ? <CheckCircle2 size={16} />
                          : answered && isSelected && !isCorrect ? <XCircle size={16} />
                          : String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm font-medium text-foreground">{opt}</span>
                    </button>
                  );
                })}
              </div>
              {answered && question && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <p className="text-sm font-semibold text-foreground mb-1">💡 Explanation</p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
          <Button onClick={handleNext} className="gap-2">
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
            <ChevronRight size={16} />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default RoadmapExercise;
