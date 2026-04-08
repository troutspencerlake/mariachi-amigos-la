"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Music } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

const navLinks = [
  { href: "#about", keyEn: "about" },
  { href: "#services", keyEn: "services" },
  { href: "#gallery", keyEn: "gallery" },
  { href: "#booking", keyEn: "booking" },
] as const;

export default function Navigation() {
  const { t, toggleLanguage, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A0A00]/95 backdrop-blur-md shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        {/* Rainbow serape top bar */}
        <div className="fiesta-divider" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-fiesta-gold via-fiesta-orange to-fiesta-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-fiesta-gold/30 blur-md group-hover:blur-lg transition-all duration-300" />
              </div>
              <div className="text-left">
                <div className="text-white font-black text-sm md:text-base leading-tight tracking-wide">
                  MARIACHI
                </div>
                <div className="gradient-text font-black text-xs md:text-sm leading-tight tracking-widest">
                  AMIGOS LA
                </div>
              </div>
            </button>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ href, keyEn }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-white/80 hover:text-fiesta-gold transition-colors duration-200 font-semibold text-sm tracking-wide uppercase relative group"
                >
                  {t.nav[keyEn as keyof typeof t.nav]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fiesta-gold group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* ── Right side: Phone + Lang toggle + Mobile menu ── */}
            <div className="flex items-center gap-3">
              {/* Phone CTA — always visible */}
              <a
                href="tel:+13237676657"
                className="phone-link hidden sm:flex items-center gap-2 bg-fiesta-red hover:bg-fiesta-red/80 text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-fiesta-red/30 btn-pulse"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">{t.nav.phone}</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3 py-2 rounded-full border border-white/20 hover:border-fiesta-gold transition-all duration-200 backdrop-blur-sm"
                aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
              >
                <span className="text-lg leading-none">{lang === "en" ? "🇲🇽" : "🇺🇸"}</span>
                <span className="hidden sm:inline">{t.nav.langToggle}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white hover:text-fiesta-gold transition-colors p-2"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#1A0A00]/98 backdrop-blur-lg flex flex-col"
          >
            {/* Mobile menu rainbow bar */}
            <div className="fiesta-divider mt-16 md:mt-20" />

            <div className="flex flex-col items-center justify-center flex-1 gap-6 p-8">
              {/* Logo */}
              <div className="text-center mb-4">
                <div className="text-white font-black text-2xl">MARIACHI</div>
                <div className="gradient-text font-black text-2xl">AMIGOS LA</div>
              </div>

              {/* Nav Links */}
              {navLinks.map(({ href, keyEn }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(href)}
                  className="text-white/90 hover:text-fiesta-gold font-bold text-2xl tracking-widest uppercase transition-colors duration-200"
                >
                  {t.nav[keyEn as keyof typeof t.nav]}
                </motion.button>
              ))}

              {/* Phone — large tap target */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="tel:+13237676657"
                className="mt-4 flex items-center gap-3 bg-fiesta-red hover:bg-fiesta-red/80 text-white font-black text-xl px-8 py-4 rounded-full shadow-xl shadow-fiesta-red/40 transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-6 h-6" />
                {t.nav.phone}
              </motion.a>

              {/* Language toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={toggleLanguage}
                className="text-white/60 hover:text-fiesta-gold font-semibold text-sm uppercase tracking-widest transition-colors"
              >
                🌐 {t.nav.langToggle}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
