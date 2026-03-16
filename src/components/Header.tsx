import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";

const navLinks = [
  { href: "/work", label: "navigation.work" },
  { href: "/services", label: "navigation.services" },
  { href: "/about", label: "navigation.about" },
  { href: "/contact", label: "navigation.contact" },
];

const Header = () => {
  const { t } = useTranslation();   // ✅ hook inside component
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-minimal text-foreground">
          Kolev, Minkov & Slavchev
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-minimal transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.label)}   {/* ✅ translation applied */}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-minimal transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(link.label)}   
              </Link>
            ))}

            <div className="pt-4 border-t border-border flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;