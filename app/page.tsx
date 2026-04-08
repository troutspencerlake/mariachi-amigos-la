"use client";

import { LanguageProvider } from "@/lib/LanguageProvider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#1A0A00]">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
