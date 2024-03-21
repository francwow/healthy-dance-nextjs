"use client";

import Languages from "./Languages";
import Logo from "./Logo";
import MovingSocial from "./MovingSocial";
import Nav from "./Nav";
import Burger from "./Burger";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current !== null) {
      const headerRect = headerRef.current.getBoundingClientRect();
      const headerHeight = headerRect.height;

      window.document.body.style.setProperty(
        "--header-height",
        `${headerHeight}`
      );
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="header-container w-full fixed top-0 left-0 z-50"
    >
      <div className="header w-full flex justify-between items-center  px-4 py-4 lg:py-6 lg:px-6">
        <Logo />
        <div className="header-nav flex gap-9">
          <Nav />
          <Languages />
        </div>
        <Burger />
      </div>
      <MovingSocial />
    </div>
  );
};

export default Header;
