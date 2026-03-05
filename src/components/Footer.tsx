import { Link } from "react-router-dom";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Behance" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand */}
            <div>
              <Link to="/" className="text-minimal text-background mb-6 block">
                ARCH STUDIO
              </Link>
              <p className="text-background/60 leading-relaxed">
                Creating spaces that inspire through thoughtful design and
                uncompromising quality.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-minimal text-background/40 mb-6">NAVIGATE</h4>
              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-minimal text-background/40 mb-6">CONNECT</h4>
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
                  href="mailto:hello@archstudio.com"
                  className="block text-background/70 hover:text-background transition-colors duration-300"
                >
                  hello@archstudio.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="block text-background/70 hover:text-background transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-minimal text-background/40">
              © {currentYear} ARCH STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="text-minimal text-background/40">
              NEW YORK — LONDON — TOKYO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
