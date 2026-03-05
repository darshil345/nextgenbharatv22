import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface LeaderboardEntry {
  user_id: string;
  display_name: string | null;
  xp: number;
  streak: number;
  rank: string;
}

const MEDAL_STYLES = [
  "gradient-hero text-primary-foreground",
  "bg-muted text-foreground",
  "bg-secondary/20 text-secondary",
];

const Leaderboard = () => {
  const { user } = useAuth();
  const [players, setPlayers] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("user_id, display_name, xp, streak, rank")
        .order("xp", { ascending: false })
        .limit(50);
      if (data) setPlayers(data);
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  const userRank = players.findIndex(p => p.user_id === user?.id) + 1;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
          🏆 Global Leaderboard
        </h1>
        <p className="text-sm text-muted-foreground">
          <Globe size={14} className="inline mr-1" />
          Worldwide Rankings · {players.length} players
        </p>
      </motion.div>

      {/* Top 3 Podium */}
      {players.length >= 3 && (
        <div className="grid grid-cols-3 gap-3">
          {[1, 0, 2].map((orderIdx, i) => {
            const p = players[orderIdx];
            if (!p) return null;
            const isFirst = orderIdx === 0;
            return (
              <motion.div
                key={p.user_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`text-center p-4 ${isFirst ? "border-primary/30 shadow-lg ring-1 ring-primary/20" : ""}`}>
                  <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-lg font-bold ${MEDAL_STYLES[orderIdx]}`}>
                    {orderIdx === 0 ? "👑" : orderIdx === 1 ? "🥈" : "🥉"}
                  </div>
                  <p className="font-heading font-bold text-foreground text-sm truncate">{p.display_name || "Anonymous"}</p>
                  <p className="text-primary font-bold text-lg mt-1">{p.xp.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">XP</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Your Position */}
      {userRank > 0 && (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-4 flex items-center gap-4">
            <span className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-primary-foreground font-bold text-sm">
              #{userRank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold text-foreground text-sm">You</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Flame size={10} className="text-secondary" /> {players[userRank - 1]?.streak ?? 0} streak
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-primary">{players[userRank - 1]?.xp.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">XP</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Full Rankings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Rankings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {players.map((player, i) => (
            <motion.div
              key={player.user_id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                player.user_id === user?.id ? "bg-primary/5 border border-primary/20" : "hover:bg-muted/50"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  i < 3 ? MEDAL_STYLES[i] : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {player.display_name || "Anonymous"}
                  {player.user_id === user?.id && <span className="text-primary ml-1">(You)</span>}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  {player.rank}
                  <span className="flex items-center gap-0.5">
                    <Flame size={10} className="text-secondary" /> {player.streak}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{player.xp.toLocaleString()}</p>
                <Badge variant="outline" className="text-[10px]">{player.rank}</Badge>
              </div>
            </motion.div>
          ))}
          {players.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No players yet. Be the first!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
