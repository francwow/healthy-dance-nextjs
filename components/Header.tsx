import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header-container w-full px-4 py-7">
      <div className="header w-full flex justify-between items-center px-7">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
