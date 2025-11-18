"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, languages } from "@/translations/languages";

type LanguageContextType = {
  lang: Locale;
  t: any;
  setLang: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Locale | null;
    if (saved && languages[saved]) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Locale) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: languages[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
