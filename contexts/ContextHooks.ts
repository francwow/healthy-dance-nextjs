"use client";

import { createContext, useContext } from "react";
import { LanguageContextType, MobileNavContextType } from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const MobileNavContext = createContext<MobileNavContextType | null>(
  null
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useMobileNav = (): MobileNavContextType => {
  const context = useContext(MobileNavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
