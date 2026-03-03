import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swords, Zap, Clock, Users, Trophy, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type BattleState = "lobby" | "searching" | "found" | "battle";

const Battle = () => {
  const [state, setState] = useState<BattleState>("lobby");
  const [searchTime, setSearchTime] = useState(0);

  useEffect(() => {
    if (state !== "searching") return;
    const interval = setInterval(() => {
      setSearchTime((t) => {
        if (t >= 5) {
          setState("found");
          return t;
        }
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [state]);

  useEffect(() => {
    if (state !== "found") return;
    const timeout = setTimeout(() => setState("battle"), 2000);
    return () => clearTimeout(timeout);
  }, [state]);

  const handleSearch = () => {
    setState("searching");
    setSearchTime(0);
  };

  if (state === "battle") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Battle Header */}
          <div className="flex items-center justify-between p-4 rounded-2xl gradient-hero text-primary-foreground mb-6">
            <div className="text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 mx-auto mb-2 flex items-center justify-center text-2xl">
                🥷
              </div>
              <p className="font-heading font-bold text-sm">You</p>
              <p className="text-xs text-primary-foreground/70">Rating: 1450</p>
            </div>
            <div className="px-4">
              <Swords size={32} className="text-primary-foreground animate-pulse" />
              <p className="text-xs font-bold text-center mt-1">VS</p>
            </div>
            <div className="text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 mx-auto mb-2 flex items-center justify-center text-2xl">
                ⚔️
              </div>
              <p className="font-heading font-bold text-sm">Wei Chen</p>
              <p className="text-xs text-primary-foreground/70">Rating: 1520</p>
            </div>
          </div>

          {/* Battle Round */}
          <Card className="p-6 text-center">
            <Badge className="mb-4">Round 1 of 5</Badge>
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              In K-Means clustering, how are initial centroids typically chosen?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">Answer before your opponent! ⏱️ 25s</p>

            <div className="space-y-2">
              {["Randomly from data points", "Always at the origin", "Using gradient descent", "From the last row"].map(
                (opt, i) => (
                  <button
                    key={i}
                    className="w-full p-4 rounded-xl border-2 border-border hover:border-primary/40 bg-card text-left text-sm font-medium text-foreground transition-all"
                  >
                    <span className="inline-flex w-7 h-7 rounded-full border-2 border-border items-center justify-center text-xs font-bold mr-3">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                )
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 justify-center text-sm text-muted-foreground">
              <Clock size={14} />
              <span className="font-mono font-bold text-foreground">25</span>
              <span>seconds remaining</span>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          ⚔️ AI Battle Mode
        </h1>
        <p className="text-muted-foreground text-sm">
          Compete 1v1 in real-time AI problem-solving. Win to climb the ELO rankings!
        </p>
      </motion.div>

      {/* Battle Modes */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-primary/20 hover:border-primary/40">
            <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Swords className="text-primary-foreground" size={26} />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">Ranked Battle</h3>
            <p className="text-sm text-muted-foreground mb-4">
              5 rounds, ELO-rated. Win to gain ranking points!
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs gap-1"><Clock size={10} /> ~10 min</Badge>
              <Badge variant="outline" className="text-xs gap-1"><Target size={10} /> ELO ±25</Badge>
            </div>
            {state === "searching" ? (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">Finding opponent...</p>
                <p className="text-xs text-muted-foreground">{searchTime}s</p>
              </div>
            ) : state === "found" ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                <div className="text-4xl mb-2">⚔️</div>
                <p className="font-heading font-bold text-foreground">Opponent Found!</p>
                <p className="text-sm text-muted-foreground">Wei Chen · Rating 1520</p>
              </motion.div>
            ) : (
              <Button onClick={handleSearch} className="w-full gap-2 gradient-hero text-primary-foreground" size="lg">
                <Swords size={18} /> Find Opponent
              </Button>
            )}
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-primary-foreground" size={26} />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">Quick Match</h3>
            <p className="text-sm text-muted-foreground mb-4">
              3 rounds, casual play. No rating change, just practice!
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs gap-1"><Clock size={10} /> ~5 min</Badge>
              <Badge variant="outline" className="text-xs gap-1"><Shield size={10} /> Unrated</Badge>
            </div>
            <Button variant="outline" className="w-full gap-2" size="lg">
              <Zap size={18} /> Quick Play
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Your Battle Stats */}
      <Card>
        <CardContent className="p-5">
          <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="text-primary" size={18} /> Your Battle Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "ELO Rating", value: "1,450", change: "+25" },
              { label: "Wins", value: "42", change: "" },
              { label: "Losses", value: "18", change: "" },
              { label: "Win Rate", value: "70%", change: "" },
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
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 mb-3">
            🏆 Coming Soon
          </Badge>
          <h3 className="font-heading text-xl font-bold mb-1">Monthly AI Tournament</h3>
          <p className="text-primary-foreground/70 text-sm mb-3">
            Compete in bracket-style elimination. Top 3 win certificates & prizes!
          </p>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1"><Users size={14} /> 256 slots</span>
            <span className="flex items-center gap-1"><Trophy size={14} /> ₹10,000 prize pool</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Battle;
