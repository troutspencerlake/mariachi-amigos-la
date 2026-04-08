"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

// ── Context Type ────────────────────────────────────────────
interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

// ── Context ─────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextType | null>(null);

// ── Provider ─────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  const setLanguage = useCallback((newLang: Language) => {
    setLangState(newLang);
    // Update the html lang attribute for accessibility
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === "en" ? "es" : "en");
  }, [lang, setLanguage]);

  const value: LanguageContextType = {
    lang,
    // Cast to the wider Translations type to allow both EN and ES
    t: translations[lang] as unknown as Translations,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
