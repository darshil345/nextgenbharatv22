import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Zap, Clock, Trophy, Shield, Target, Brain, ChevronRight, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { getShuffledQuestions, BattleQuestion } from "@/data/battleQuestions";

type Difficulty = "easy" | "medium" | "hard";
type BattleState = "lobby" | "countdown" | "battle" | "result";

interface BattleStats {
  wins: number;
  losses: number;
  elo_rating: number;
  total_battles: number;
}

const AI_NAMES: Record<Difficulty, string> = { easy: "NoviceBot 🤖", medium: "ChallengerAI 🧠", hard: "GrandmasterAI 👾" };
const AI_EMOJIS: Record<Difficulty, string> = { easy: "🟢", medium: "🟡", hard: "🔴" };

// AI answer speed ranges in ms per question
const AI_SPEED: Record<Difficulty, [number, number]> = {
  easy: [6000, 10000],
  medium: [3000, 6000],
  hard: [1500, 3500],
};
// AI accuracy (probability of correct answer)
const AI_ACCURACY: Record<Difficulty, number> = { easy: 0.45, medium: 0.7, hard: 0.92 };

const ELO_CHANGE: Record<Difficulty, number> = { easy: 10, medium: 20, hard: 35 };

const Battle = () => {
  const { user, profile } = useAuth();
  const [state, setState] = useState<BattleState>("lobby");
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<BattleQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const [aiTotalTime, setAiTotalTime] = useState(0);
  const [userTotalTime, setUserTotalTime] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [stats, setStats] = useState<BattleStats>({ wins: 0, losses: 0, elo_rating: 1000, total_battles: 0 });
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch battle stats
  useEffect(() => {
    if (!user) return;
    const fetch = async () => {
      const { data } = await supabase.from("battle_stats").select("*").eq("user_id", user.id).single();
      if (data) setStats({ wins: data.wins, losses: data.losses, elo_rating: data.elo_rating, total_battles: data.total_battles });
      else {
        await supabase.from("battle_stats").insert({ user_id: user.id });
      }
    };
    fetch();
  }, [user]);

  // Countdown
  useEffect(() => {
    if (state !== "countdown") return;
    if (countdown <= 0) { setState("battle"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [state, countdown]);

  // Per-question timer
  useEffect(() => {
    if (state !== "battle" || showFeedback) return;
    setTimer(0);
    timerRef.current = setInterval(() => setTimer(t => t + 100), 100);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [state, currentQ, showFeedback]);

  const startBattle = (diff: Difficulty) => {
    setDifficulty(diff);
    setQuestions(getShuffledQuestions(diff, 10));
    setCurrentQ(0);
    setUserScore(0);
    setAiScore(0);
    setUserTotalTime(0);
    setAiTotalTime(0);
    setSelected(null);
    setShowFeedback(false);
    setCountdown(3);
    setState("countdown");
  };

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null || !difficulty) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const timeTaken = timer;
    setSelected(idx);
    setShowFeedback(true);
    setUserTotalTime(prev => prev + timeTaken);

    const q = questions[currentQ];
    const isCorrect = idx === q.correct;
    if (isCorrect) setUserScore(s => s + 1);

    // Simulate AI
    const [minT, maxT] = AI_SPEED[difficulty];
    const aiTime = minT + Math.random() * (maxT - minT);
    const aiCorrect = Math.random() < AI_ACCURACY[difficulty];
    if (aiCorrect) setAiScore(s => s + 1);
    setAiTotalTime(prev => prev + aiTime);

    setTimeout(() => {
      setSelected(null);
      setShowFeedback(false);
      if (currentQ < 9) {
        setCurrentQ(c => c + 1);
      } else {
        finishBattle();
      }
    }, 1500);
  }, [selected, difficulty, timer, questions, currentQ]);

  const finishBattle = async () => {
    setState("result");
    if (!user || !difficulty) return;

    // Determine winner: higher score wins, tiebreaker = faster total time
    const finalUserScore = userScore + (selected !== null && questions[currentQ]?.correct === selected ? 1 : 0);
    // We already incremented scores in handleAnswer, but result screen will read state

    setTimeout(async () => {
      const uScore = userScore; // already includes last answer from setState
      // re-fetch to get accurate final
    }, 100);

    // We'll update in the result screen's useEffect
  };

  // Save result when entering result state
  useEffect(() => {
    if (state !== "result" || !user || !difficulty) return;
    const won = userScore > aiScore || (userScore === aiScore && userTotalTime < aiTotalTime);
    const eloChange = ELO_CHANGE[difficulty];

    const update = async () => {
      const newStats = {
        wins: stats.wins + (won ? 1 : 0),
        losses: stats.losses + (won ? 0 : 1),
        elo_rating: stats.elo_rating + (won ? eloChange : -Math.floor(eloChange / 2)),
        total_battles: stats.total_battles + 1,
      };
      setStats(newStats);
      await supabase.from("battle_stats").update({
        ...newStats,
        updated_at: new Date().toISOString(),
      }).eq("user_id", user.id);

      // Award XP
      const xpGain = won ? (difficulty === "hard" ? 50 : difficulty === "medium" ? 30 : 15) : 5;
      if (profile) {
        await supabase.from("profiles").update({ xp: (profile.xp || 0) + xpGain }).eq("user_id", user.id);
      }
    };
    update();
  }, [state]);

  const winRate = stats.total_battles > 0 ? Math.round((stats.wins / stats.total_battles) * 100) : 0;
  const won = userScore > aiScore || (userScore === aiScore && userTotalTime < aiTotalTime);

  // COUNTDOWN SCREEN
  if (state === "countdown") {
    return (
      <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[60vh]">
        <motion.div key={countdown} initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="text-center">
          {countdown > 0 ? (
            <>
              <p className="text-8xl font-heading font-bold text-primary">{countdown}</p>
              <p className="text-muted-foreground mt-2">Get ready...</p>
            </>
          ) : (
            <p className="text-4xl font-heading font-bold text-primary">GO! ⚔️</p>
          )}
        </motion.div>
      </div>
    );
  }

  // BATTLE SCREEN
  if (state === "battle" && difficulty) {
    const q = questions[currentQ];
    if (!q) return null;
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 rounded-2xl gradient-hero text-primary-foreground mb-4">
            <div className="text-center flex-1">
              <div className="text-2xl mb-1">🥷</div>
              <p className="font-heading font-bold text-xs">{profile?.display_name || "You"}</p>
              <p className="text-xl font-bold">{userScore}</p>
            </div>
            <div className="px-3 text-center">
              <Swords size={24} className="mx-auto animate-pulse" />
              <p className="text-[10px] font-bold mt-1">Q{currentQ + 1}/10</p>
            </div>
            <div className="text-center flex-1">
              <div className="text-2xl mb-1">{AI_EMOJIS[difficulty]}</div>
              <p className="font-heading font-bold text-xs">{AI_NAMES[difficulty]}</p>
              <p className="text-xl font-bold">{aiScore}</p>
            </div>
          </div>

          <Progress value={((currentQ + 1) / 10) * 100} className="h-2 mb-4" />

          <Card className="p-5">
            <Badge variant="outline" className="mb-3 text-xs">{q.topic}</Badge>
            <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-4">{q.question}</h2>

            <div className="space-y-2">
              {q.options.map((opt, i) => {
                let borderClass = "border-border hover:border-primary/40";
                if (showFeedback) {
                  if (i === q.correct) borderClass = "border-green-500 bg-green-500/10";
                  else if (i === selected && i !== q.correct) borderClass = "border-red-500 bg-red-500/10";
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={showFeedback}
                    className={`w-full p-3 rounded-xl border-2 ${borderClass} bg-card text-left text-sm font-medium text-foreground transition-all disabled:cursor-default`}
                  >
                    <span className="inline-flex w-6 h-6 rounded-full border-2 border-border items-center justify-center text-xs font-bold mr-2">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                    {showFeedback && i === q.correct && <CheckCircle2 size={16} className="inline ml-2 text-green-500" />}
                    {showFeedback && i === selected && i !== q.correct && <XCircle size={16} className="inline ml-2 text-red-500" />}
                  </button>
                );
              })}
            </div>

            {!showFeedback && (
              <div className="mt-3 flex items-center gap-2 justify-center text-sm text-muted-foreground">
                <Clock size={14} />
                <span className="font-mono font-bold text-foreground">{(timer / 1000).toFixed(1)}s</span>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    );
  }

  // RESULT SCREEN
  if (state === "result" && difficulty) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <div className="text-6xl mb-3">{won ? "🏆" : "😔"}</div>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
            {won ? "Victory!" : userScore === aiScore ? "Close Battle!" : "Defeat"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {won ? "You outperformed the AI!" : "Better luck next time. Keep practicing!"}
          </p>
        </motion.div>

        <Card className="p-5">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground mb-1">🥷 {profile?.display_name || "You"}</p>
              <p className="text-3xl font-heading font-bold text-foreground">{userScore}</p>
              <p className="text-xs text-muted-foreground">{(userTotalTime / 1000).toFixed(1)}s total</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">{AI_EMOJIS[difficulty]} {AI_NAMES[difficulty]}</p>
              <p className="text-3xl font-heading font-bold text-foreground">{aiScore}</p>
              <p className="text-xs text-muted-foreground">{(aiTotalTime / 1000).toFixed(1)}s total</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center">
            <Badge className={won ? "bg-green-500/20 text-green-600 border-green-500/30" : "bg-red-500/20 text-red-600 border-red-500/30"}>
              ELO {won ? `+${ELO_CHANGE[difficulty]}` : `-${Math.floor(ELO_CHANGE[difficulty] / 2)}`}
            </Badge>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 gap-2" onClick={() => { setState("lobby"); setDifficulty(null); }}>
            <ArrowLeft size={16} /> Lobby
          </Button>
          <Button className="flex-1 gap-2 gradient-hero text-primary-foreground" onClick={() => startBattle(difficulty)}>
            <Swords size={16} /> Rematch
          </Button>
        </div>
      </div>
    );
  }

  // LOBBY
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">⚔️ AI Battle Mode</h1>
        <p className="text-muted-foreground text-sm">Challenge an AI opponent! 10 questions, speed matters. Pick your difficulty.</p>
      </motion.div>

      {/* Difficulty Selection */}
      <div className="grid gap-4 md:grid-cols-3">
        {([
          { diff: "easy" as Difficulty, icon: Shield, label: "Easy", desc: "Slower AI, 45% accuracy. Great for warming up!", color: "from-green-500 to-emerald-600", badge: "+10 ELO" },
          { diff: "medium" as Difficulty, icon: Target, label: "Medium", desc: "Balanced AI, 70% accuracy. A real challenge!", color: "from-yellow-500 to-orange-500", badge: "+20 ELO" },
          { diff: "hard" as Difficulty, icon: Brain, label: "Hard", desc: "Lightning-fast AI, 92% accuracy. Only the best win!", color: "from-red-500 to-rose-600", badge: "+35 ELO" },
        ]).map(({ diff, icon: Icon, label, desc, color, badge }) => (
          <motion.div key={diff} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: diff === "easy" ? 0.1 : diff === "medium" ? 0.2 : 0.3 }}>
            <Card className="p-5 hover:shadow-lg transition-all cursor-pointer group border-border hover:border-primary/40" onClick={() => startBattle(diff)}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-1">{AI_EMOJIS[diff]} {label}</h3>
              <p className="text-xs text-muted-foreground mb-3">{desc}</p>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs gap-1"><Clock size={10} /> 10 Qs</Badge>
                <Badge variant="outline" className="text-xs gap-1"><Trophy size={10} /> {badge}</Badge>
              </div>
              <Button className={`w-full gap-2 bg-gradient-to-r ${color} text-white border-0`} size="sm">
                <Swords size={16} /> Challenge {label} AI
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Real Battle Stats */}
      <Card>
        <CardContent className="p-5">
          <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="text-primary" size={18} /> Your Battle Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "ELO Rating", value: stats.elo_rating.toLocaleString(), change: stats.elo_rating > 1000 ? `+${stats.elo_rating - 1000}` : stats.elo_rating < 1000 ? `${stats.elo_rating - 1000}` : "" },
              { label: "Wins", value: stats.wins.toString(), change: "" },
              { label: "Losses", value: stats.losses.toString(), change: "" },
              { label: "Win Rate", value: `${winRate}%`, change: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-xl bg-muted/50">
                <p className="font-heading text-xl font-bold text-foreground">{stat.value}</p>
                {stat.change && <p className="text-xs text-accent font-medium">{stat.change}</p>}
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tournament Banner */}
      <Card className="gradient-hero text-primary-foreground p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative z-10">
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 mb-3">🏆 Coming Soon</Badge>
          <h3 className="font-heading text-xl font-bold mb-1">Monthly AI Tournament</h3>
          <p className="text-primary-foreground/70 text-sm mb-3">Compete in bracket-style elimination. Top 3 win certificates & prizes!</p>
        </div>
      </Card>
    </div>
  );
};

export default Battle;
