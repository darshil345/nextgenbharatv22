import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VOLUNTEER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfLMXJhgmZi3CZ7ADjJA3MQuy51wJ-6eaTSH1hJOLHFd2pyQg/viewform?usp=header";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Courses", href: "#courses" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Volunteer", href: "#volunteer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">NB</span>
          </div>
          <span
            className={`font-heading font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            NextGen Bharat
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={VOLUNTEER_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm">
              Join Us
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={VOLUNTEER_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="default" className="w-full">
                  Join Us
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
