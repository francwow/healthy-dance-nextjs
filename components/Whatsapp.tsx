"use client";

import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <aside className="whatsapp w-10 h-10 lg:w-14 lg:h-14 fixed bottom-3 right-3 lg:bottom-5 lg:right-5 z-50">
      <Link
        target="_blank"
        href={"https://wa.me/573104823549?text=Hola%20Magdalena%20Store"}
      >
        <Image
          src={"/img/whatsapp_logo.webp"}
          alt="Whatsapp logo"
          priority
          width={200}
          height={200}
        />
      </Link>
    </aside>
  );
};

export default Whatsapp;
