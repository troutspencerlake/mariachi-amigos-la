"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Crystal G.",
    location: "Downey, CA",
    badge: "Elite Yelper",
    stars: 5,
    date: "January 2, 2024",
    text: "They were really funny, polite and so much talent! Next thing you know, they all marched out playing music. All of us got a good kick out of them singing a song to her that said she was 16. It was funny! They were really funny, polite and so much talent! Definitely a five-star experience. #5Star",
  },
  {
    id: 2,
    name: "Jackie R.",
    location: "Los Angeles, CA",
    badge: null,
    stars: 5,
    date: "July 18, 2022",
    text: "Surprised my mom and uncle with mariachi for their birthdays and they loved it, thank you for being professional and on time! I definitely recommend, they are all talented and the young lady had a beautiful voice!",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-[#FF1A1A] text-[#FF1A1A]" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }: { review: typeof REVIEWS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-4 hover:border-fiesta-gold/30 transition-colors duration-300"
    >
      {/* Yelp red accent line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#FF1A1A]/60 via-[#FF1A1A] to-[#FF1A1A]/60 rounded-full" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Avatar initial */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1A1A] to-[#c0392b] flex items-center justify-center text-white font-black text-base flex-shrink-0">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-bold text-sm">{review.name}</span>
              {review.badge && (
                <span className="bg-[#FF1A1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {review.badge}
                </span>
              )}
            </div>
            <span className="text-white/50 text-xs">{review.location}</span>
          </div>
        </div>
        {/* Yelp logo mark */}
        <span className="text-[#FF1A1A] font-black text-lg flex-shrink-0 leading-none">yelp</span>
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-3">
        <StarRow count={review.stars} />
        <span className="text-white/40 text-xs">{review.date}</span>
      </div>

      {/* Review text */}
      <p className="text-white/80 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
    </motion.div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#0f0500] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 fiesta-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-1 fiesta-divider" />
      <div className="absolute inset-0 confetti-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#FF1A1A]/20 border border-[#FF1A1A]/30 text-[#FF1A1A] font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Yelp Reviews
          </span>
          <h2 className="section-title text-white mb-4">
            What Our Clients{" "}
            <span className="gradient-text">Are Saying</span>
          </h2>

          {/* Overall rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-4"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FF1A1A] text-[#FF1A1A]" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-black text-2xl leading-none">4.9</div>
              <div className="text-white/50 text-xs mt-0.5">89 reviews on Yelp</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.15} />
          ))}
        </div>

        {/* CTA to Yelp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.yelp.com/biz/mariachi-amigos-de-los-angeles-los-angeles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF1A1A] hover:bg-[#e00] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#FF1A1A]/30 hover:shadow-[#FF1A1A]/50 transition-all duration-300 hover:scale-105"
          >
            Read All 89 Reviews on Yelp
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
