import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="p-3" href={"/"}>
      <div className="logo w-40">
        <Image
          src={"/logopng.png"}
          alt="Healthy Dance logo"
          width={400}
          height={400}
        />
      </div>
    </Link>
  );
};

export default Logo;
