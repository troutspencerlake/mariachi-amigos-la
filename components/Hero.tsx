"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Calendar, ChevronDown, Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

// Floating music notes
const NOTES = ["♩", "♪", "♫", "♬", "𝄞", "♭"];

function FloatingNote({ delay, x, note }: { delay: number; x: string; note: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: -150 }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 2,
        ease: "easeOut",
      }}
      className="absolute bottom-24 text-fiesta-gold text-2xl font-bold pointer-events-none select-none"
      style={{ left: x }}
    >
      {note}
    </motion.div>
  );
}

// Hero background carousel — real band photos
const BG_IMAGES = [
  "/images/photo-01.jpg",
  "/images/photo-05.jpg",
  "/images/photo-09.jpg",
];

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Background carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Image Carousel ── */}
      {BG_IMAGES.map((img, i) => (
        <motion.div
          key={img}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${img}')`,
            y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentBg ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}

      {/* ── Dark overlay + color wash ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A00]/80 via-[#1A0A00]/50 to-[#1A0A00]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-fiesta-red/10 via-transparent to-fiesta-green/10" />

      {/* ── Decorative confetti circles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: [
                "#DC2626", "#EA580C", "#EAB308",
                "#059669", "#0891B2", "#C026D3", "#F59E0B",
              ][i % 7],
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* ── Floating Music Notes ── */}
      {NOTES.map((note, i) => (
        <FloatingNote
          key={i}
          note={note}
          delay={i * 0.8}
          x={`${10 + i * 15}%`}
        />
      ))}

      {/* ── Hero Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-fiesta-gold/20 border border-fiesta-gold/40 text-fiesta-gold font-bold text-sm px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <Star className="w-4 h-4 fill-fiesta-gold" />
          {t.hero.badge}
          <Star className="w-4 h-4 fill-fiesta-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-headline text-white mb-6 [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]"
        >
          {t.hero.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                line
              ) : (
                <span className="gradient-text">{line}</span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/85 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Book Now */}
          <button
            onClick={() =>
              document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-3 bg-gradient-to-r from-fiesta-gold to-fiesta-orange hover:from-fiesta-orange hover:to-fiesta-red text-white font-black text-lg px-8 py-4 rounded-full shadow-2xl shadow-fiesta-gold/40 transition-all duration-300 hover:scale-105 hover:shadow-fiesta-gold/60 btn-pulse min-w-[220px] justify-center"
          >
            <Calendar className="w-5 h-5 group-hover:animate-bounce" />
            {t.hero.cta1}
          </button>

          {/* Phone Call */}
          <a
            href="tel:+13237676657"
            className="phone-link group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-fiesta-gold text-white font-black text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 min-w-[220px] justify-center"
          >
            <Phone className="w-5 h-5 group-hover:animate-bounce text-fiesta-gold" />
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* ── Star Rating Social Proof ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-fiesta-gold text-fiesta-gold star-gold" />
            ))}
          </div>
          <p className="text-white/70 text-sm font-medium">
            5.0 · 500+ Events Performed Across Southern California
          </p>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-fiesta-gold transition-colors flex flex-col items-center gap-2 group"
      >
        <span className="text-xs tracking-widest uppercase font-medium">{t.hero.scroll}</span>
        <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* ── Background dot indicator ── */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBg(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentBg ? "bg-fiesta-gold w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
