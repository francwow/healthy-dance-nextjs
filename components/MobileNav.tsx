"use client";

import { useEffect } from "react";
import { useMobileNav } from "../contexts/ContextHooks";
import Nav from "./Nav";
import Languages from "./Languages";

const MobileNav = () => {
  const { navActive } = useMobileNav();

  useEffect(() => {
    if (navActive) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [navActive]);

  return (
    <div className={navActive ? "mobile-nav active" : "mobile-nav"}>
      <Languages />
      <Nav />
    </div>
  );
};

export default MobileNav;
