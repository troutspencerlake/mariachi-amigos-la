"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Check, Star, MapPin, Clock, Tag } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

// Color scheme cycling for cards
const CARD_ACCENTS = [
  { border: "border-fiesta-turquoise/40", glow: "shadow-fiesta-turquoise/20", badge: "bg-fiesta-turquoise", dot: "bg-fiesta-turquoise" },
  { border: "border-fiesta-orange/40", glow: "shadow-fiesta-orange/20", badge: "bg-fiesta-orange", dot: "bg-fiesta-orange" },
  { border: "border-fiesta-gold/60", glow: "shadow-fiesta-gold/30", badge: "bg-fiesta-gold", dot: "bg-fiesta-gold" },
  { border: "border-fiesta-red/40", glow: "shadow-fiesta-red/20", badge: "bg-fiesta-red", dot: "bg-fiesta-red" },
  { border: "border-fiesta-magenta/40", glow: "shadow-fiesta-magenta/20", badge: "bg-fiesta-magenta", dot: "bg-fiesta-magenta" },
  { border: "border-fiesta-green/40", glow: "shadow-fiesta-green/20", badge: "bg-fiesta-green", dot: "bg-fiesta-green" },
];

function PricingCard({
  pkg,
  accent,
  index,
  t,
}: {
  pkg: {
    size: string;
    name: string;
    price: string;
    description: string;
    perfect: string;
    highlights: readonly string[];
    featured?: boolean;
  };
  accent: typeof CARD_ACCENTS[0];
  index: number;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl border ${accent.border} ${
        pkg.featured
          ? `bg-gradient-to-b from-fiesta-gold/10 to-fiesta-orange/5 shadow-2xl ${accent.glow}`
          : "bg-white/5 shadow-lg"
      } p-6 flex flex-col card-lift backdrop-blur-sm transition-all duration-300 hover:bg-white/10`}
    >
      {/* Featured ribbon */}
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-fiesta-gold to-fiesta-orange text-[#1A0A00] font-black text-xs px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-fiesta-gold/40">
            <Star className="w-3 h-3 fill-[#1A0A00]" />
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className={`inline-flex items-center gap-1.5 ${accent.badge} text-white text-xs font-black px-3 py-1 rounded-full mb-2`}>
            <Users className="w-3 h-3" />
            {pkg.size} {t.services.musicians}
          </div>
          <h3 className="text-white font-black text-xl">{pkg.name}</h3>
        </div>
        <div className="text-right">
          <div className="text-white/50 text-xs mb-0.5">{t.services.priceFrom}</div>
          <div className="gradient-text font-black text-3xl leading-none">{pkg.price}</div>
          <div className="text-white/50 text-xs">{t.services.perHour}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm mb-4 leading-relaxed">{pkg.description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-4 flex-1">
        {pkg.highlights.map((h: string) => (
          <li key={h} className="flex items-center gap-2 text-white/80 text-sm">
            <Check className={`w-4 h-4 ${accent.dot.replace("bg-", "text-")} flex-shrink-0`} />
            {h}
          </li>
        ))}
      </ul>

      {/* Perfect for */}
      <div className="border-t border-white/10 pt-4 mb-4">
        <div className="text-white/50 text-xs uppercase tracking-widest mb-1 font-semibold">
          {t.services.perfect}
        </div>
        <p className="text-white/70 text-sm italic">{pkg.perfect}</p>
      </div>

      {/* CTA */}
      <button
        onClick={() =>
          document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
        }
        className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] ${
          pkg.featured
            ? "bg-gradient-to-r from-fiesta-gold to-fiesta-orange text-[#1A0A00] shadow-lg shadow-fiesta-gold/30 hover:shadow-fiesta-gold/50"
            : `${accent.badge} text-white hover:opacity-90`
        }`}
      >
        {t.services.bookThis}
      </button>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1A0A00] via-[#200E00] to-[#1A0A00] overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 confetti-bg" />
      <div className="absolute top-0 left-0 right-0 h-1 fiesta-divider" />

      {/* Big sombrero decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[300px] opacity-[0.03] pointer-events-none select-none leading-none">
        🪗
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block bg-fiesta-red/20 border border-fiesta-red/30 text-fiesta-red font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t.services.sectionLabel}
          </span>
          <h2 className="section-title text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            {t.services.subtitle}
          </p>

          {/* Monday-Thursday discount banner */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fiesta-green/20 to-fiesta-turquoise/20 border border-fiesta-green/40 text-fiesta-green font-bold text-sm px-5 py-2.5 rounded-full"
          >
            <Tag className="w-4 h-4" />
            {t.services.note}
          </motion.div>
        </motion.div>

        {/* ── Pricing Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-16">
          {t.services.packages.map((pkg, i) => (
            <PricingCard
              key={pkg.size}
              pkg={pkg}
              accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
              index={i}
              t={t}
            />
          ))}
        </div>

        {/* ── Event Types + Service Areas Row ── */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Event Types */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
          >
            <h3 className="text-fiesta-gold font-black text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">🎭</span>
              {t.services.eventTypes.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {t.services.eventTypes.events.map((event) => (
                <div
                  key={event}
                  className="flex items-center gap-2 text-white/80 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-fiesta-red flex-shrink-0" />
                  {event}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
          >
            <h3 className="text-fiesta-turquoise font-black text-xl mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Service Areas
            </h3>
            <div className="space-y-3 mb-6">
              {[
                { county: "Los Angeles County", color: "text-fiesta-gold" },
                { county: "Orange County", color: "text-fiesta-green" },
                { county: "San Bernardino County", color: "text-fiesta-orange" },
                { county: "Riverside County", color: "text-fiesta-red" },
                { county: "Ventura County", color: "text-fiesta-magenta" },
              ].map(({ county, color }) => (
                <div key={county} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${color.replace("text-", "bg-")}`} />
                  <span className={`font-semibold ${color}`}>{county}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 bg-fiesta-orange/10 border border-fiesta-orange/20 rounded-xl p-3">
              <Clock className="w-4 h-4 text-fiesta-orange flex-shrink-0 mt-0.5" />
              <p className="text-white/60 text-xs leading-relaxed">
                {t.services.travelNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
