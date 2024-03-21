"use client";

import { useMobileNav } from "../contexts/ContextHooks";

const Burger = () => {
  const { navActive, setNavActive } = useMobileNav();

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setNavActive(!navActive);
        }
      }}
      onClick={() => setNavActive(!navActive)}
      className="burger w-8 h-8 flex items-center justify-center lg:hidden"
    >
      <span
        className={
          navActive
            ? "stick bg-slate-900 after:bg-slate-900 active"
            : "stick bg-slate-900 after:bg-slate-900 "
        }
      ></span>
    </div>
  );
};

export default Burger;
