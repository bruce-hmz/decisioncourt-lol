"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  toggleLang: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("decision_court_lang") as Lang | null;
    if (saved === "zh" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  function toggleLang() {
    const next = lang === "zh" ? "en" : "zh";
    setLangState(next);
    localStorage.setItem("decision_court_lang", next);
  }

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("decision_court_lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

