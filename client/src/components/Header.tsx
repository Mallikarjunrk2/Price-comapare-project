import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set dark mode by default for premium look
    document.documentElement.classList.add('dark');
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-white via-orange-200 to-[#FF8C2A] bg-clip-text text-transparent">
              PriceCompare
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105" data-testid="link-home">
              Home
            </a>
            <a href="#" className="text-white/60 hover:text-white font-medium transition-all duration-300 hover:scale-105" data-testid="link-about">
              About
            </a>
            <a href="#" className="text-white/60 hover:text-white font-medium transition-all duration-300 hover:scale-105" data-testid="link-help">
              Help
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              data-testid="button-theme-toggle"
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}