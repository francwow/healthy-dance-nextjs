export type LanguageType = "ES" | "EN";

export type MobileNavType = boolean;

export type LanguageContextType = {
  language: LanguageType;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (Language: LanguageType) => void;
};

export type MobileNavContextType = {
  navActive: MobileNavType;
  // eslint-disable-next-line no-unused-vars
  setNavActive: (navActive: MobileNavType) => void;
};
