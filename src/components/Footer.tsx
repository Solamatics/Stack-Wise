import { Calculator, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "mailto:hello@stackwise.io" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/stackwise", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/stackwise",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/stackwise", icon: Github },
];

export default function Footer() {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold mb-4 hover:text-[#7C3AED] transition-colors"
              aria-label="Stackwise Home"
            >
              <Calculator
                className="w-6 h-6 text-[#7C3AED]"
                aria-hidden="true"
              />
              <span>Stackwise</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              The financial toolkit built for freelancers who earn globally and
              spend locally. Track expenses, generate invoices, and stay
              tax-compliant.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Stackwise. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for freelancers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
