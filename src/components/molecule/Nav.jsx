import Link from "../atom/Link";

const Nav = ({ className = "", onClick }) => {
  const style =
    "flex-1 self-center whitespace-nowrap relative hover:text-white hover:translate-y-[-2px] hover:scale-[1.02] transition-all duration-300 p-2 px-4 text-neutral-300";
  return (
    <nav className={`flex gap-5 py-2 text-center ${className}`}>
      <Link style={style} to="/" onClick={onClick}>
        Accueil
      </Link>
      <Link style={style} to="/#about" onClick={onClick}>
        A propos
      </Link>
      <Link style={style} to="/#professionalProject" onClick={onClick}>
        Projet professionnel
      </Link>
      <Link style={style} to="/#projects" onClick={onClick}>
        Projets
      </Link>
    </nav>
  );
};

export default Nav;
