import { Link } from "react-router-dom";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/lazar.minkov/", label: "Instagram" },
  { href: "https://www.linkedin.com/in/lazar-minkov-b0494b22a/", label: "LinkedIn" },
  { href: "https://github.com/dinero2004", label: "GitHub" },
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
              <Link to="/" className="text-minimal link-bordo mb-6 block">
              APEX MOTORSPORT
              </Link>
              <p className="text-background/60 leading-relaxed">
                Delivering exceptional automotive experiences through carefully curated vehicles and uncompromising quality.
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
                    className="block text-background/70 text-minimal link-bordo duration-300"
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
                    className="block text-background/70 text-minimal link-bordo duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:hello@archstudio.com"
                  className="block text-background/70 text-minimal link-bordo duration-300"
                >
                  lazar.minkov@gmail.com
                </a>
                <a
                  href="tel:+41782348028"
                  className="block text-background/70 text-minimal link-bordo duration-300"
                >
                  +41 78 234 80 28
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-minimal text-background/40">
              © {currentYear} Apex Motorsport. All rights reserved.
            </p>
            <p className="text-minimal text-background/40 link-bordo">
              🇨🇭BERN — ZURICH — GENEVA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
