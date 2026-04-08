"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Music, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

const NAV_LINKS = [
  { href: "#about", keyEn: "about" },
  { href: "#services", keyEn: "services" },
  { href: "#gallery", keyEn: "gallery" },
  { href: "#booking", keyEn: "booking" },
] as const;

const COUNTIES = [
  "Los Angeles County",
  "Orange County",
  "San Bernardino County",
  "Riverside County",
  "Ventura County",
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0D0500] overflow-hidden">
      {/* Rainbow top border */}
      <div className="fiesta-divider" />

      {/* Subtle background */}
      <div className="absolute inset-0 confetti-bg pointer-events-none" />

      {/* Large decorative violin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[500px] opacity-[0.02] pointer-events-none select-none leading-none">
        🎻
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* ── Top Row: CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-fiesta-red via-fiesta-orange to-fiesta-gold rounded-3xl p-8 md:p-10 mb-16 text-center shadow-2xl shadow-fiesta-red/30"
        >
          <div className="text-5xl mb-4">🎺 🎻 🎸</div>
          <h3 className="text-white font-black text-2xl md:text-3xl mb-3">
            Ready to Make Your Event Unforgettable?
          </h3>
          <p className="text-white/80 mb-6 text-lg">
            Call us now or fill out the booking form — we respond within hours!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13237676657"
              className="inline-flex items-center justify-center gap-2 bg-white text-fiesta-red font-black text-lg px-8 py-4 rounded-full hover:bg-fiesta-cream transition-colors shadow-xl hover:scale-105 duration-300"
            >
              <Phone className="w-5 h-5" />
              (323) 767-6657
            </a>
            <button
              onClick={() => scrollToSection("#booking")}
              className="inline-flex items-center justify-center gap-2 bg-[#1A0A00]/40 hover:bg-[#1A0A00]/60 border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Online →
            </button>
          </div>
        </motion.div>

        {/* ── Footer Columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fiesta-gold to-fiesta-red flex items-center justify-center shadow-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-black text-sm tracking-wide">MARIACHI</div>
                <div className="gradient-text font-black text-sm tracking-widest">AMIGOS LA</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {t.footer.tagline.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 ? <br /> : ""}</span>
              ))}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mariachiamigos_la"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mariachiamigosla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mariachiamigos_la"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-fiesta-red flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-fiesta-gold font-black text-sm uppercase tracking-widest mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-white/60 hover:text-fiesta-gold text-sm transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              {NAV_LINKS.map(({ href, keyEn }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-white/60 hover:text-fiesta-gold text-sm transition-colors"
                  >
                    {t.nav[keyEn as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-fiesta-green font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Service Areas
            </h4>
            <ul className="space-y-2">
              {COUNTIES.map((county) => (
                <li key={county} className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-fiesta-green flex-shrink-0" />
                  {county}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-fiesta-red font-black text-sm uppercase tracking-widest mb-4">
              {t.footer.contact}
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+13237676657"
                className="phone-link flex items-center gap-2 text-white/80 hover:text-fiesta-red transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-fiesta-red group-hover:scale-110 transition-transform" />
                (323) 767-6657
              </a>
              <a
                href="mailto:mariachiamigosla@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-fiesta-orange transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-fiesta-orange group-hover:scale-110 transition-transform" />
                mariachiamigosla<br />@gmail.com
              </a>
              <a
                href="https://www.instagram.com/mariachiamigos_la"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-fiesta-magenta transition-colors text-sm group"
              >
                <Instagram className="w-4 h-4 text-fiesta-magenta group-hover:scale-110 transition-transform" />
                @mariachiamigos_la
              </a>
              <a
                href="https://www.facebook.com/mariachiamigosla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#1877F2] transition-colors text-sm group"
              >
                <Facebook className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
                /mariachiamigosla
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="fiesta-divider my-8 rounded" />

        {/* ── Bottom Row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            {t.footer.copyright.replace("{year}", String(year))}
          </p>
          <p className="text-white/30 text-sm">{t.footer.madeWith}</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
