import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const footerLinks = [
  { href: "/work", key: "navigation.work" },
  { href: "/services", key: "navigation.services" },
  { href: "/about", key: "navigation.about" },
  { href: "/contact", key: "navigation.contact" }
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" }
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-16 mb-16">

            {/* Brand */}
            <div>
              <Link to="/" className="text-minimal text-background mb-6 block">
                Kolev, Minkov & Slavchev
              </Link>

              <p className="text-background/60 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-minimal text-background/40 mb-6">
                {t("footer.navigate")}
              </h4>

              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-minimal text-background/40 mb-6">
                {t("footer.connect")}
              </h4>

              <div className="space-y-3 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="space-y-2">
                <a
                  href="mailto:miroslav.minkov@gmail.com"
                  className="block text-background/70 hover:text-background transition-colors duration-300"
                >
                  miroslav.minkov@gmail.com
                </a>

                <a
                  href="tel:+359898527830"
                  className="block text-background/70 hover:text-background transition-colors duration-300"
                >
                  +359 898 52 78 30
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-minimal text-background/40">
              © {currentYear} {t("footer.rights")}
            </p>

            <p className="text-minimal text-background/40">
              {t("footer.location")}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;