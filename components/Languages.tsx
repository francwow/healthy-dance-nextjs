"use client";

import { useLanguage } from "../contexts/ContextHooks";

const Languages = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <aside className="languages-container">
      <div
        className={
          language === "ES"
            ? "languages es-active flex"
            : "languages en-active flex"
        }
      >
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "ES") {
              setLanguage("ES");
            }
          }}
          onClick={() => setLanguage("ES")}
          className="languages-es p-1"
        >
          ES
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "ES") {
              setLanguage("EN");
            }
          }}
          onClick={() => setLanguage("EN")}
          className="languages-en p-1"
        >
          EN
        </div>
      </div>
    </aside>
  );
};

export default Languages;
