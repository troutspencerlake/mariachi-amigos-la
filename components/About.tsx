"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Music, Award, Heart, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

const STATS = [
  { icon: Award, value: "20+", key: "stat1", color: "text-fiesta-gold" },
  { icon: Music, value: "500+", key: "stat2", color: "text-fiesta-red" },
  { icon: Heart, value: "1,000+", key: "stat3", color: "text-fiesta-magenta" },
  { icon: MapPin, value: "5", key: "stat4", color: "text-fiesta-turquoise" },
];

function StatCard({
  stat,
  label,
  delay,
}: {
  stat: typeof STATS[0];
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm card-lift"
    >
      <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
      <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
      <div className="text-white/70 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#1A0A00] overflow-hidden">
      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 confetti-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 fiesta-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-1 fiesta-divider" />

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-fiesta-green/20 border border-fiesta-green/30 text-fiesta-green font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t.about.sectionLabel}
          </span>
          <h2 className="section-title text-white mb-4">
            {t.about.title.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="gradient-text"> {word} </span>
              ) : (
                <span key={i}>{word === "That" ? " " : ""}{word} </span>
              )
            )}
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-16 h-1 bg-fiesta-red rounded" />
            <div className="w-4 h-4 bg-fiesta-gold rounded-full" />
            <div className="w-16 h-1 bg-fiesta-green rounded" />
          </div>
        </motion.div>

        {/* ── Content Grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: Band Image + decorations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main photo frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-fiesta-red/20 via-fiesta-orange/20 to-fiesta-gold/20 flex items-center justify-center">
                {/* Placeholder for band photo */}
                <img
                  src="/images/photo-09.jpg"
                  alt="Mariachi Amigos LA performing live"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/40 via-transparent to-transparent" />
            </div>

            {/* Floating decorative badge — top left */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-fiesta-red text-white font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-fiesta-red/40"
            >
              🎺 Est. 2005
            </motion.div>

            {/* Floating music note — bottom right */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-fiesta-gold text-[#1A0A00] font-black text-lg w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-fiesta-gold/40"
            >
              ♫
            </motion.div>

            {/* Decorative colored border strips */}
            <div className="absolute -top-2 left-8 right-8 h-2 fiesta-divider rounded" />
            <div className="absolute -bottom-2 left-8 right-8 h-2 fiesta-divider rounded" />
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-white/85 text-lg leading-relaxed">
              {t.about.bio1}
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              {t.about.bio2}
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              {t.about.bio3}
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              {t.about.bio4}
            </p>

            {/* Instruments highlight */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["🎻 Violin", "🎺 Trumpet", "🎸 Vihuela", "🪕 Guitarrón", "🎸 Guitar"].map(
                (instrument) => (
                  <span
                    key={instrument}
                    className="bg-fiesta-gold/10 border border-fiesta-gold/30 text-fiesta-gold text-sm font-semibold px-3 py-1.5 rounded-full"
                  >
                    {instrument}
                  </span>
                )
              )}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-fiesta-red to-fiesta-orange text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-fiesta-red/30 hover:shadow-fiesta-red/50 transition-all duration-300"
            >
              <Calendar />
              {t.booking.sectionLabel}
            </motion.button>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.key}
              stat={stat}
              label={t.about[stat.key as keyof typeof t.about] as string}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

