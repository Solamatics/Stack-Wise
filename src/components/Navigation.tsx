"use client";

import { useState, useEffect } from "react";
import { Calculator, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2 text-xl font-bold ${
              isScrolled ? "text-gray-900" : "text-white"
            } hover:text-[#7C3AED] transition-colors`}
            aria-label="Stackwise Home"
          >
            <Calculator className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />
            <span>Stackwise</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${isScrolled ? "text-gray-600" : "text-white"} ${
                  isScrolled ? "hover:text-[#7C3AED]" : "hover:text-white"
                } font-medium transition-colors relative group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#10B981] text-white font-semibold rounded-full hover:bg-[#059669] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 touch-manipulation"
          >
            Get Early Access
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 min-w-11 flex items-center justify-center ${
              isScrolled ? "text-gray-900" : "text-white"
            } hover:text-[#7C3AED] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded-md touch-manipulation`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex px-4 py-3 min-h-12 items-center text-gray-900 hover:bg-gray-50 hover:text-[#7C3AED] font-medium rounded-lg transition-colors touch-manipulation"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex px-4 py-3 min-h-13 items-center justify-center bg-[#10B981] text-white text-center font-semibold rounded-lg hover:bg-[#059669] transition-colors touch-manipulation"
              >
                Get Early Access
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
