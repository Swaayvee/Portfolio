import Link from "../atom/Link";

const Nav = () => {
  const style =
    "flex-1 self-center whitespace-nowrap relative hover:text-white hover:translate-y-[-2px] hover:scale-[1.02] transition-all duration-300 p-2 px-4 text-neutral-300";
  return (
    <nav className={`flex gap-5 py-2 text-center`}>
      <Link style={style} to="/">
        Accueil
      </Link>
      <Link style={style} to="/#about">
        A propos
      </Link>
      <Link style={style} to="/#professionalProject">
        Projet professionnel
      </Link>
      <Link style={style} to="/#projects">
        Projets
      </Link>
    </nav>
  );
};

export default Nav;
