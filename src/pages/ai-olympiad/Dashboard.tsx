import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flame, Star, Trophy, Target, Zap, BookOpen,
  Swords, TrendingUp, ChevronRight, Award, Map
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { RANKS } from "@/data/mockGameData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Dashboard = () => {
  const { profile } = useAuth();
  const xp = profile?.xp ?? 0;
  const currentRankIdx = RANKS.findIndex((r, i) => {
    const next = RANKS[i + 1];
    return !next || xp < next.minXp;
  });
  const nextRank = RANKS[currentRankIdx + 1];
  const xpToNext = nextRank?.minXp ?? RANKS[RANKS.length - 1].minXp;
  const xpPercent = nextRank
    ? ((xp - RANKS[currentRankIdx].minXp) / (nextRank.minXp - RANKS[currentRankIdx].minXp)) * 100
    : 100;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl gradient-hero p-6 md:p-8 text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative z-10">
          <p className="text-primary-foreground/80 text-sm font-medium mb-1">Welcome back,</p>
          <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            {profile?.display_name ?? "Explorer"} {RANKS[currentRankIdx]?.icon}
          </h1>
          <p className="text-primary-foreground/70 text-sm max-w-lg">
            You're on a {profile?.streak ?? 0}-day streak! Keep solving problems to climb the global leaderboard.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/roadmap">
              <Button variant="secondary" size="lg" className="gap-2">
                <Map size={18} /> Continue Roadmap
              </Button>
            </Link>
            <Link to="/battle">
              <Button
                size="lg"
                className="gap-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30"
              >
                <Swords size={18} /> Quick Battle
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Day Streak", value: profile?.streak ?? 0, icon: Flame, color: "text-secondary" },
          { label: "Total XP", value: xp.toLocaleString(), icon: Star, color: "text-primary" },
          { label: "Level", value: profile?.level ?? 1, icon: Target, color: "text-accent" },
          { label: "Rank", value: profile?.rank ?? "AI Explorer", icon: Award, color: "text-secondary" },
        ].map((stat, i) => (
          <motion.div key={stat.label} custom={i} initial="hidden" animate="visible" variants={fadeIn}>
            <Card className="text-center p-4">
              <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
              <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Rank Progress */}
      <motion.div custom={4} initial="hidden" animate="visible" variants={fadeIn}>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="text-secondary" size={20} /> Rank Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{RANKS[currentRankIdx]?.icon}</div>
              <div className="flex-1">
                <p className="font-heading font-bold text-foreground">{profile?.rank ?? "AI Explorer"}</p>
                <p className="text-sm text-muted-foreground">
                  {xp} / {xpToNext} XP
                </p>
                <Progress value={xpPercent} className="mt-2 h-3" />
              </div>
            </div>
            {nextRank && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 text-sm">
                <span className="text-lg">{nextRank.icon}</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{xpToNext - xp} XP</span> to{" "}
                  <span className="font-semibold text-foreground">{nextRank.name}</span>
                </span>
              </div>
            )}
            <div className="flex gap-2 flex-wrap">
              {RANKS.map((r, i) => (
                <div
                  key={r.name}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-lg border-2 transition-all ${
                    i <= currentRankIdx
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/30 opacity-40"
                  }`}
                  title={r.name}
                >
                  {r.icon}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Roadmap", icon: Map, to: "/roadmap", gradient: "gradient-hero" },
          { label: "Study Syllabus", icon: BookOpen, to: "/syllabus", gradient: "gradient-blue" },
          { label: "Practice Arena", icon: Zap, to: "/practice", gradient: "gradient-orange" },
          { label: "Leaderboard", icon: Trophy, to: "/leaderboard", gradient: "gradient-green" },
        ].map((item, i) => (
          <motion.div key={item.label} custom={6 + i} initial="hidden" animate="visible" variants={fadeIn}>
            <Link to={item.to}>
              <Card className="p-5 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl ${item.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-primary-foreground" size={22} />
                </div>
                <p className="font-heading font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  Go <ChevronRight size={12} />
                </p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
