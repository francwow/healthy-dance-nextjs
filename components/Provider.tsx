"use client";

import { PropsWithChildren, useState } from "react";
import { LanguageContext, MobileNavContext } from "../contexts/ContextHooks";
import { LanguageType, MobileNavType } from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [navActive, setNavActive] = useState<MobileNavType>(false);

  return (
    <MobileNavContext.Provider value={{ navActive, setNavActive }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </MobileNavContext.Provider>
  );
};

export default Provider;
