import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  return (
    <header className="bg-gradient-to-r from-background via-background to-muted/30 border-b border-border/50 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">PriceCompare</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors" data-testid="link-home">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-help">
              Help
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
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