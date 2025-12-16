import Nav from "../molecule/Nav";
import Contact from "../molecule/Contact";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 z-50 w-full py-3 px-10 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 text-sm md:text-base transition-all duration-300">
      <Nav />
      <Contact />
    </header>
  );
};

export default Header;
