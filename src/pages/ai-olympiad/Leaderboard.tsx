import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Flame, Globe, School, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEADERBOARD_DATA, USER_PROFILE } from "@/data/mockGameData";

const TABS = [
  { id: "global", label: "Global", icon: Globe },
  { id: "country", label: "Country", icon: Trophy },
  { id: "school", label: "School", icon: School },
  { id: "friends", label: "Friends", icon: Users },
];

const MEDAL_STYLES = [
  "gradient-hero text-primary-foreground",
  "bg-muted text-foreground",
  "bg-secondary/20 text-secondary",
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("global");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
          🏆 Global Leaderboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Season 3 · Resets in 47 days
        </p>
      </motion.div>

      {/* Tab Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-3">
        {LEADERBOARD_DATA.slice(0, 3).map((player, i) => {
          const order = [1, 0, 2]; // show 2nd, 1st, 3rd
          const p = LEADERBOARD_DATA[order[i]];
          const isFirst = order[i] === 0;
          return (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={isFirst ? "row-start-1" : ""}
            >
              <Card className={`text-center p-4 ${isFirst ? "border-primary/30 shadow-lg ring-1 ring-primary/20" : ""}`}>
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-lg font-bold ${MEDAL_STYLES[order[i]]}`}>
                  {order[i] === 0 ? "👑" : order[i] === 1 ? "🥈" : "🥉"}
                </div>
                <p className="font-heading font-bold text-foreground text-sm truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.country}</p>
                <p className="text-primary font-bold text-lg mt-1">{p.xp.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">XP</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Your Position */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-4 flex items-center gap-4">
          <span className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-primary-foreground font-bold text-sm">
            #{USER_PROFILE.globalRank}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-heading font-bold text-foreground text-sm">{USER_PROFILE.name}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              🥷 {USER_PROFILE.rank} · <Flame size={10} className="text-secondary" /> {USER_PROFILE.streak} streak
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-primary">{USER_PROFILE.xp.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">XP</p>
          </div>
        </CardContent>
      </Card>

      {/* Full Rankings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Rankings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {LEADERBOARD_DATA.map((player, i) => (
            <motion.div
              key={player.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  player.rank <= 3 ? MEDAL_STYLES[player.rank - 1] : "bg-muted text-muted-foreground"
                }`}
              >
                {player.rank}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {player.country} {player.name}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  {player.school}
                  <span className="flex items-center gap-0.5">
                    <Flame size={10} className="text-secondary" /> {player.streak}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{player.xp.toLocaleString()}</p>
                <Badge variant="outline" className="text-[10px]">{player.rankTitle}</Badge>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
