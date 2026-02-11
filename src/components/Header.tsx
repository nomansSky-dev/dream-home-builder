import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Listing", href: "/listing", hasDropdown: false },
  { label: "Property", href: "#", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center">
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Nest<span className="text-card-accent">Find</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors rounded-md"
                )}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 opacity-60" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Login/Signup - White text with Soft Gold background */}
            <Button 
              className="font-button bg-accent hover:bg-accent/90 text-white rounded-full px-5"
            >
              Login/Signup
            </Button>
            
            {/* Add Listing - Sage Green filled */}
            <Button 
              className="font-button bg-sage hover:bg-sage/90 text-sage-foreground rounded-full px-5"
            >
              Add Listing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background/95 backdrop-blur rounded-lg mt-2">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-accent hover:text-accent/80 hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  )}
                </Link>
              ))}
              <div className="mt-4 px-4 flex flex-col gap-3">
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-5 w-5" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      Dark Mode
                    </>
                  )}
                </button>
                <Button 
                  className="font-button bg-accent hover:bg-accent/90 text-white rounded-full w-full"
                >
                  Login/Signup
                </Button>
                <Button 
                  className="font-button bg-sage hover:bg-sage/90 text-sage-foreground rounded-full w-full"
                >
                  Add Listing
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
