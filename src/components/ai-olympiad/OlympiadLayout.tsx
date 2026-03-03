import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, BookOpen, Swords, Trophy, Zap, 
  Flame, Star, ArrowLeft, Menu, X 
} from "lucide-react";
import { USER_PROFILE } from "@/data/mockGameData";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { path: "/ai-olympiad", label: "Dashboard", icon: LayoutDashboard },
  { path: "/ai-olympiad/syllabus", label: "Syllabus", icon: BookOpen },
  { path: "/ai-olympiad/practice", label: "Practice", icon: Zap },
  { path: "/ai-olympiad/battle", label: "Battle", icon: Swords },
  { path: "/ai-olympiad/leaderboard", label: "Leaderboard", icon: Trophy },
];

const OlympiadLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const xpPercent = (USER_PROFILE.xp / USER_PROFILE.xpToNext) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors mr-2">
              <ArrowLeft size={18} />
            </Link>
            <Link to="/ai-olympiad" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">AI</span>
              </div>
              <span className="font-heading font-bold text-foreground hidden sm:inline">
                NextGenBharat AI
              </span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-sm">
              <Flame className="text-secondary" size={18} />
              <span className="font-bold text-foreground">{USER_PROFILE.streak}</span>
              <span className="text-muted-foreground">day streak</span>
            </div>
            <div className="flex items-center gap-2 min-w-[160px]">
              <Star className="text-secondary" size={16} />
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="font-semibold text-foreground">{USER_PROFILE.xp} XP</span>
                  <span className="text-muted-foreground">{USER_PROFILE.xpToNext}</span>
                </div>
                <Progress value={xpPercent} className="h-2" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-lg">🥷</span>
              <span className="font-bold text-foreground">{USER_PROFILE.rank}</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Nav */}
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

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-card p-3 space-y-1">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 mb-2">
              <div className="flex items-center gap-1.5 text-sm">
                <Flame className="text-secondary" size={16} />
                <span className="font-bold">{USER_PROFILE.streak}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Star className="text-secondary" size={14} />
                <span className="font-bold">{USER_PROFILE.xp} XP</span>
              </div>
              <span className="text-sm">🥷 {USER_PROFILE.rank}</span>
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
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default OlympiadLayout;
