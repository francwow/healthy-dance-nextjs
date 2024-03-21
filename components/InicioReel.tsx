import MainBtn from "../components/MainBtn";

const InicioReel = () => {
  return (
    <section className="inicio-reel">
      <div className="inicio-reel-info relative z-30">
        <h1 className="main-heading text-4xl lg:text-7xl font-bold text-center text-white mb-8">
          Para quienes vestir es mucho más que sólo usar una prenda.
        </h1>
        <MainBtn
          btnTextES="VISITAR TIENDA"
          btnTextEN="VISIT SHOP"
          target={false}
          href="/"
          bgColor="blue"
        />
      </div>
      <div className="video-container">
        {/* <iframe
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/pPP-JkcD9HQ?&autoplay=1si=wOss0bBcDV6fhrZ0&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
        <video
          width={1920}
          height={1080}
          src="/video/reel.mp4"
          muted
          loop
          autoPlay
        ></video>
      </div>
    </section>
  );
};

export default InicioReel;
