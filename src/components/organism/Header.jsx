import { useState } from "react";
import Nav from "../molecule/Nav";
import Contact from "../molecule/Contact";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 transition-all duration-300">
      <div className="flex justify-between items-center py-3 px-6 md:px-10">
        <div className="hidden md:flex w-full justify-between items-center">
          <Nav />
          <Contact />
        </div>

        <div className="md:hidden w-full flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1 hover:bg-neutral-800 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          <Nav className="flex-col w-full" onClick={() => setIsOpen(false)} />
          <div className="w-16 h-px bg-neutral-800"></div>
          <Contact />
        </div>
      </div>
    </header>
  );
};

export default Header;
