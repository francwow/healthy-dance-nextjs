import AboutIntro from "../components/AboutIntro";
import FeaturedProducts from "../components/FeaturedProducts";
import InicioReel from "../components/InicioReel";

export default function Home() {
  return (
    <main>
      <InicioReel />
      <FeaturedProducts />
      <AboutIntro />
    </main>
  );
}
