"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./GoogleIcon";

const ScrollNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function scrollTop() {
      let scrollY = window.scrollY;
      if (scrollY >= 300) {
        setScrolled(true);
      } else if (scrollY <= 299) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollTop);

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scrollDirection);
  // }, [scrollDirection]);

  if (scrolled) {
    return (
      <aside className="scroll-up-btn w-10 h-10 bottom-3 left-3 lg:w-14 lg:h-14 fixed lg:bottom-5 lg:left-5 bg-slate-800 z-50 rounded-full flex justify-center items-center">
        <Link href="#">
          <Icon icon="stat_1" />
        </Link>
      </aside>
    );
  } else {
    return null;
  }
};

export default ScrollNav;
