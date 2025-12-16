import Nav from "../molecule/Nav";
import Contact from "../molecule/Contact";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 z-50 w-full py-1 px-10 bg-neutral-800 text-sm md:text-base">
      <Nav/>
      <Contact/>
    </header>
  );
};

export default Header;
