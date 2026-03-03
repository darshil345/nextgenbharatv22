import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flame, Star, Trophy, Target, Zap, BookOpen,
  Swords, TrendingUp, ChevronRight, Award, Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { USER_PROFILE, DAILY_CHALLENGES, RANKS, WEEKLY_STATS, LEADERBOARD_DATA } from "@/data/mockGameData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Dashboard = () => {
  const xpPercent = (USER_PROFILE.xp / USER_PROFILE.xpToNext) * 100;
  const currentRankIdx = RANKS.findIndex((r) => r.name === USER_PROFILE.rank);
  const nextRank = RANKS[currentRankIdx + 1];

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
            {USER_PROFILE.name} 🥷
          </h1>
          <p className="text-primary-foreground/70 text-sm max-w-lg">
            You're on a {USER_PROFILE.streak}-day streak! Keep solving problems to climb the global leaderboard.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/ai-olympiad/practice">
              <Button variant="secondary" size="lg" className="gap-2">
                <Zap size={18} /> Daily Challenge
              </Button>
            </Link>
            <Link to="/ai-olympiad/battle">
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
          { label: "Day Streak", value: USER_PROFILE.streak, icon: Flame, color: "text-secondary" },
          { label: "Global Rank", value: `#${USER_PROFILE.globalRank}`, icon: Trophy, color: "text-primary" },
          { label: "Accuracy", value: `${USER_PROFILE.accuracy}%`, icon: Target, color: "text-accent" },
          { label: "Badges", value: USER_PROFILE.badges, icon: Award, color: "text-secondary" },
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

      {/* Rank Progress + Weekly XP */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeIn}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="text-secondary" size={20} /> Rank Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{RANKS[currentRankIdx]?.icon}</div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground">{USER_PROFILE.rank}</p>
                  <p className="text-sm text-muted-foreground">
                    {USER_PROFILE.xp} / {USER_PROFILE.xpToNext} XP
                  </p>
                  <Progress value={xpPercent} className="mt-2 h-3" />
                </div>
              </div>
              {nextRank && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 text-sm">
                  <span className="text-lg">{nextRank.icon}</span>
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{USER_PROFILE.xpToNext - USER_PROFILE.xp} XP</span> to{" "}
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

        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeIn}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="text-accent" size={20} /> This Week's XP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={WEEKLY_STATS}>
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      background: "hsl(var(--card))",
                    }}
                  />
                  <Bar dataKey="xp" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Daily Challenges + Leaderboard Preview */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div custom={6} initial="hidden" animate="visible" variants={fadeIn}>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="text-secondary" size={20} /> Today's Challenges
                </CardTitle>
                <Link to="/ai-olympiad/practice" className="text-sm text-primary font-medium flex items-center gap-1">
                  See all <ChevronRight size={14} />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {DAILY_CHALLENGES.map((ch) => (
                <div
                  key={ch.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                    ch.completed ? "bg-accent/5 border-accent/20" : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                      ch.completed
                        ? "bg-accent/20 text-accent"
                        : ch.difficulty === "Hard"
                        ? "gradient-orange text-primary-foreground"
                        : "gradient-blue text-primary-foreground"
                    }`}
                  >
                    {ch.completed ? "✓" : ch.xp}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${ch.completed ? "text-accent line-through" : "text-foreground"}`}>
                      {ch.title}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Clock size={10} /> {ch.time} · {ch.type}
                    </p>
                  </div>
                  {!ch.completed && (
                    <Link to="/ai-olympiad/practice">
                      <Button size="sm" variant="outline" className="text-xs">
                        Start
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div custom={7} initial="hidden" animate="visible" variants={fadeIn}>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="text-primary" size={20} /> Top Players
                </CardTitle>
                <Link to="/ai-olympiad/leaderboard" className="text-sm text-primary font-medium flex items-center gap-1">
                  Full board <ChevronRight size={14} />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              {LEADERBOARD_DATA.slice(0, 5).map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      player.rank <= 3
                        ? "gradient-hero text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {player.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {player.country} {player.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{player.school}</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{player.xp.toLocaleString()}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { label: "Study Syllabus", icon: BookOpen, to: "/ai-olympiad/syllabus", gradient: "gradient-blue" },
          { label: "Practice Arena", icon: Zap, to: "/ai-olympiad/practice", gradient: "gradient-orange" },
          { label: "1v1 Battle", icon: Swords, to: "/ai-olympiad/battle", gradient: "gradient-green" },
        ].map((item, i) => (
          <motion.div key={item.label} custom={8 + i} initial="hidden" animate="visible" variants={fadeIn}>
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
