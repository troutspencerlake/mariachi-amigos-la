import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mariachi Fiesta Palette
        fiesta: {
          red: "#DC2626",
          "red-dark": "#991B1B",
          green: "#059669",
          "green-dark": "#065F46",
          yellow: "#EAB308",
          "yellow-dark": "#A16207",
          orange: "#EA580C",
          "orange-dark": "#9A3412",
          turquoise: "#0891B2",
          magenta: "#C026D3",
          gold: "#F59E0B",
          "gold-dark": "#B45309",
          cream: "#FEF9EE",
          dark: "#1A0A00",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "sway": "sway 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "note-float": "noteFloat 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(234, 179, 8, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(234, 179, 8, 0.8)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        noteFloat: {
          "0%": { opacity: "0", transform: "translateY(0) rotate(0deg)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-80px) rotate(20deg)" },
        },
      },
      backgroundImage: {
        "serape-pattern": "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(234,179,8,0.1) 10px, rgba(234,179,8,0.1) 20px)",
        "fiesta-gradient": "linear-gradient(135deg, #DC2626 0%, #EA580C 25%, #EAB308 50%, #059669 75%, #0891B2 100%)",
        "hero-gradient": "linear-gradient(to bottom, rgba(26,10,0,0.7) 0%, rgba(26,10,0,0.4) 50%, rgba(26,10,0,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
