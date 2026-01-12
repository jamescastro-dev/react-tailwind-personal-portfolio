import { Github, Linkedin, Facebook } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="glass-strong">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Brand */}
            <div className="flex flex-col text-center md:text-left">
              <span className="text-sm font-semibold tracking-tight">
                JC<span className="text-primary">.</span>
              </span>
              <span className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} James Castro. All rights reserved.
              </span>
            </div>

            {/* Center: Nav */}
            <nav className="flex items-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
