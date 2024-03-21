"use client";

import { useLanguage } from "../contexts/ContextHooks";
import MainBtn from "./MainBtn";

const AboutIntro = () => {
  const { language } = useLanguage();

  return (
    <section className="relative about-intro-section py-12 px-4 lg:py-24 bg-slate-900">
      <div className="about-intro-overlay absolute inset-0 bg-slate-900 blur-md z-10 opacity-20"></div>
      <div className="about-intro-info relative text-light-900 max-w-2xl mx-auto z-30">
        <h2 className="text-4xl lg:text-5xl font-bold my-10 font-montserrat text-center">
          {language === "ES" ? "Descubre nuestra marca" : "Meet our brand"}
        </h2>
        <p className="lg:text-xl my-5 text-center">
          {language === "ES"
            ? "Somos mujeres que visten no solo desde la piel sino desde el alma, colores que desde sus tonalidades develan pensamientos, vencen los miedos a ser diferentes y reafirman su ser y su seguridad."
            : "We are women who dress not only from the skin but from the soul, colors that from their tones reveal thoughts, overcome the fears of being different and reaffirm their being and their security."}
        </p>
        <MainBtn
          bgColor="white"
          btnTextES="CONOCER MÁS"
          btnTextEN="LEARN MORE"
          href="/about"
          target={false}
        />
      </div>
    </section>
  );
};

export default AboutIntro;
