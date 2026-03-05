import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, BookOpen, Swords, Trophy, Zap, 
  Flame, Star, Menu, X, Map, LogOut 
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RANKS } from "@/data/mockGameData";

const NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/roadmap", label: "Roadmap", icon: Map },
  { path: "/syllabus", label: "Syllabus", icon: BookOpen },
  { path: "/practice", label: "Practice", icon: Zap },
  { path: "/battle", label: "Battle", icon: Swords },
  { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

const OlympiadLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile, signOut } = useAuth();
  
  const xp = profile?.xp ?? 0;
  const currentRank = RANKS.findIndex((r, i) => {
    const next = RANKS[i + 1];
    return !next || xp < next.minXp;
  });
  const nextRank = RANKS[currentRank + 1];
  const xpToNext = nextRank?.minXp ?? RANKS[RANKS.length - 1].minXp;
  const xpPercent = nextRank ? ((xp - RANKS[currentRank].minXp) / (nextRank.minXp - RANKS[currentRank].minXp)) * 100 : 100;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">AI</span>
              </div>
              <span className="font-heading font-bold text-foreground hidden sm:inline">
                AI Olympiad
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-sm">
              <Flame className="text-secondary" size={18} />
              <span className="font-bold text-foreground">{profile?.streak ?? 0}</span>
              <span className="text-muted-foreground">day streak</span>
            </div>
            <div className="flex items-center gap-2 min-w-[160px]">
              <Star className="text-secondary" size={16} />
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="font-semibold text-foreground">{xp} XP</span>
                  <span className="text-muted-foreground">{xpToNext}</span>
                </div>
                <Progress value={xpPercent} className="h-2" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-lg">{RANKS[currentRank]?.icon}</span>
              <span className="font-bold text-foreground">{profile?.rank ?? "AI Explorer"}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
              <LogOut size={16} />
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="hidden md:block border-t border-border bg-card">
          <div className="container mx-auto px-4 flex gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px",
                    active
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-card p-3 space-y-1">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 mb-2">
              <div className="flex items-center gap-1.5 text-sm">
                <Flame className="text-secondary" size={16} />
                <span className="font-bold">{profile?.streak ?? 0}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Star className="text-secondary" size={14} />
                <span className="font-bold">{xp} XP</span>
              </div>
              <span className="text-sm">{RANKS[currentRank]?.icon} {profile?.rank ?? "AI Explorer"}</span>
            </div>
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={signOut}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 w-full"
            >
              <LogOut size={18} /> Sign Out
            </button>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default OlympiadLayout;
