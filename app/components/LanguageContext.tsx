"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [lang, setLang] = useState<string>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};
