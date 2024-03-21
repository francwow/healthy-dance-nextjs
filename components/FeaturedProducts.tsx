"use client";

import { useLanguage } from "../contexts/ContextHooks";
import FeaturedItems from "../data/FeaturedItems";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  const { language } = useLanguage();

  return (
    <section className="featured-products-section py-12 px-4 lg:py-24">
      <div>
        <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold my-10 font-montserrat">
          {language === "ES" ? "Elije tu estilo" : "Choose your look"}
        </h2>
      </div>
      <div className="featured-products flex flex-col relative w-full gap-4 lg:flex-row">
        {FeaturedItems.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className="featured-item relative lg:max-w-96 h-96 lg:basis-1/5"
            >
              <div className="featured-img absolute inset-0">
                <Image
                  className="w-full h-full object-cover"
                  src={item.imgSrc}
                  alt="Magdalena clothing"
                  width={800}
                  height={800}
                />
              </div>
              <div className="featured-heading absolute bottom-0 left-0 right-0 bg-light-900">
                {language === "ES" ? (
                  <h3 className="text-slate-900 text-3xl font-normal text-center py-4 underline lg:no-underline">
                    {item.textES}
                  </h3>
                ) : (
                  <h3 className="text-slate-900 text-3xl font-normal text-center py-4">
                    {item.textEN}
                  </h3>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
