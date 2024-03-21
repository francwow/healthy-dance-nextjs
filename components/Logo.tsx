import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center">
      <div className="logo">
        <Image
          src={"/logopng.png"}
          alt="Healthy Dance logo"
          width={400}
          height={400}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
