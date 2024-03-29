"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";

type MainBtnProps = {
  btnTextES: string;
  btnTextEN: string;
  href: string;
  target: boolean;
  bgColor: string;
};

const MainBtn = ({
  btnTextES,
  btnTextEN,
  href,
  target,
  bgColor,
}: MainBtnProps) => {
  const { language } = useLanguage();

  return (
    <div
      className={
        bgColor === "white"
          ? "main-btn-container white bg-light-900 text-slate-900"
          : "main-btn-container blue bg-slate-900 text-white"
      }
    >
      {language === "ES" ? (
        <Link href={href} target={target ? "_blank" : "_self"}>
          {btnTextES}
          <Icon icon="arrow_forward_ios" />
        </Link>
      ) : (
        <Link href={href} target={target ? "_blank" : "_self"}>
          {btnTextEN}
          <Icon icon="arrow_forward_ios" />
        </Link>
      )}
    </div>
  );
};

export default MainBtn;
