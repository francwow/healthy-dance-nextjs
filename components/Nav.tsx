"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";

const Nav = () => {
  const { language } = useLanguage();

  return (
    <nav className="nav ">
      {language === "ES" ? (
        <ul className="nav-items w-full h-full flex justify-center items-center">
          <li className="nav-item font-montserrat">
            <Link href={"#tienda"}>TIENDA</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"#tallers"}>TALLERES</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"#about"}>QUIENES SOMOS</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"#contacto"}>CONTACTO</Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-items w-full h-full flex justify-center items-center">
          <li className="nav-item font-montserrat">
            <Link href={"/"}>STORE</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"/"}>WORKSHOPS</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"/"}>ABOUT US</Link>
          </li>
          <li className="nav-item font-montserrat">
            <Link href={"/"}>CONTACT</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
