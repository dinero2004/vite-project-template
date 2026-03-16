import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-minimal text-foreground">
          Kolev, Minkov & Slavchev
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">

          <a href="/work" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t("navigation.work")}
          </a>

          <a href="/services" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t("navigation.services")}
          </a>

          <a href="/about" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t("navigation.about")}
          </a>

          <a href="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t("navigation.contact")}
          </a>

        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">

            <a href="/work" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {t("navigation.work")}
            </a>

            <a href="/services" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {t("navigation.services")}
            </a>

            <a href="/about" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {t("navigation.about")}
            </a>

            <a href="/contact" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {t("navigation.contact")}
            </a>

            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;