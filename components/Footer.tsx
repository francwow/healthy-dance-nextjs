import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer-section py-4 px-4 lg:py-10">
      <div className="footer-grid grid grid-cols-1 lg:grid-cols-2">
        <Logo />
        <div className="copyright flex justify-center items-center">
          <span>Donoso Films © 2024. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
