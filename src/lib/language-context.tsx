"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "id" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "karangseva-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    // Reading localStorage must happen post-mount to avoid an SSR/client
    // hydration mismatch, so this one-time sync render is unavoidable here.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  const toggleLanguage = () => setLanguage(language === "id" ? "en" : "id");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export type Dict<T> = Record<Language, T>;

export function useContent<T>(dict: Dict<T>): T {
  const { language } = useLanguage();
  return dict[language];
}
