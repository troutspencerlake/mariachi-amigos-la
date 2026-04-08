"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Instagram, ExternalLink, ZoomIn } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

// Gallery photos — real Mariachi Amigos LA band photos
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/photo-01.jpg",
    thumb: "/images/photo-01.jpg",
    alt: "Mariachi Amigos LA performing live",
    span: "col-span-2 row-span-2",
    category: "Live Performance",
  },
  {
    id: 2,
    src: "/images/photo-02.jpg",
    thumb: "/images/photo-02.jpg",
    alt: "Mariachi Amigos LA band",
    span: "col-span-1 row-span-1",
    category: "Band",
  },
  {
    id: 3,
    src: "/images/photo-03.jpg",
    thumb: "/images/photo-03.jpg",
    alt: "Mariachi wedding performance",
    span: "col-span-1 row-span-1",
    category: "Wedding",
  },
  {
    id: 4,
    src: "/images/photo-04.jpg",
    thumb: "/images/photo-04.jpg",
    alt: "Mariachi Amigos LA at event",
    span: "col-span-1 row-span-2",
    category: "Event",
  },
  {
    id: 5,
    src: "/images/photo-05.jpg",
    thumb: "/images/photo-05.jpg",
    alt: "Mariachi Amigos LA performance",
    span: "col-span-1 row-span-1",
    category: "Performance",
  },
  {
    id: 6,
    src: "/images/photo-06.jpg",
    thumb: "/images/photo-06.jpg",
    alt: "Mariachi Amigos LA musicians",
    span: "col-span-1 row-span-1",
    category: "Musicians",
  },
  {
    id: 7,
    src: "/images/photo-07.jpg",
    thumb: "/images/photo-07.jpg",
    alt: "Mariachi Amigos LA with Santa",
    span: "col-span-2 row-span-1",
    category: "Santa",
  },
  {
    id: 8,
    src: "/images/photo-08.jpg",
    thumb: "/images/photo-08.jpg",
    alt: "Mariachi Amigos LA outdoor event",
    span: "col-span-1 row-span-2",
    category: "Outdoor Event",
  },
];

// Lightbox component
function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: typeof GALLERY_IMAGES[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-fiesta-gold/40 rounded-full flex items-center justify-center text-white transition-colors text-xl font-bold"
        >
          ‹
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-16 z-10 w-12 h-12 bg-white/10 hover:bg-fiesta-gold/40 rounded-full flex items-center justify-center text-white transition-colors text-xl font-bold"
        >
          ›
        </button>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] w-full"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain rounded-xl"
            style={{ maxHeight: "80vh" }}
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
            <span className="bg-fiesta-gold/20 border border-fiesta-gold/40 text-fiesta-gold text-sm font-bold px-3 py-1 rounded-full">
              {image.category}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const currentIndex = selectedImage
    ? GALLERY_IMAGES.findIndex((img) => img.id === selectedImage)
    : -1;

  const goPrev = () => {
    if (currentIndex > 0) setSelectedImage(GALLERY_IMAGES[currentIndex - 1].id);
    else setSelectedImage(GALLERY_IMAGES[GALLERY_IMAGES.length - 1].id);
  };

  const goNext = () => {
    if (currentIndex < GALLERY_IMAGES.length - 1)
      setSelectedImage(GALLERY_IMAGES[currentIndex + 1].id);
    else setSelectedImage(GALLERY_IMAGES[0].id);
  };

  const selectedImg = GALLERY_IMAGES.find((img) => img.id === selectedImage);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-[#1A0A00] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 confetti-bg" />
      <div className="absolute top-0 left-0 right-0 h-1 fiesta-divider" />

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-fiesta-magenta/20 border border-fiesta-magenta/30 text-fiesta-magenta font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t.gallery.sectionLabel}
          </span>
          <h2 className="section-title text-white mb-4">{t.gallery.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </motion.div>

        {/* ── Masonry / Grid Gallery ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px] mb-12">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
              onClick={() => openLightbox(image.id)}
            >
              {/* Image */}
              <img
                src={image.thumb}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-fiesta-gold/90 rounded-full p-3">
                  <ZoomIn className="w-6 h-6 text-[#1A0A00]" />
                </div>
              </div>

              {/* Category badge on hover */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-fiesta-gold text-[#1A0A00] text-xs font-bold px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </div>

              {/* Colorful border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-fiesta-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* ── Instagram CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-fiesta-magenta/10 via-fiesta-red/10 to-fiesta-orange/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <p className="text-white/70 text-sm mb-1">{t.gallery.followUs}</p>
              <p className="gradient-text font-black text-xl">{t.gallery.instagram}</p>
            </div>
            <a
              href="https://www.instagram.com/mariachiamigos_la"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      {selectedImg && (
        <Lightbox
          image={selectedImg}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
