import Card from "./../components/molecule/Card";
import APropos from "../components/molecule/APropos";
import FuturPro from "./../components/molecule/FuturPro";
import Link from "./../components/atom/Link";

const PageHome = () => {
  const projects = [
    {
      title: "Portfolio",
      langage: "JavaScript et JSX",
      framework: "React et TailwindCSS",
      typeProjet: "Projet scolaire",
      description:
        "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    },
    {
      title: "To-do list",
      langage: "HTML,CSS et TypeScript",
      framework: "Angular",
      typeProjet: "Projet personnel",
      description:
        "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    },
    {
      title: "Co Vote",
      langage: "HTML et PHP",
      framework: "TailwindCSS",
      typeProjet: "Projet scolaire",
      description:
        "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    },
    {
      title: "Pokemon TCG",
      langage: "Java",
      framework: "JavaFX",
      typeProjet: "Projet scolaire",
      description:
        "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    },
  ];















  return (
    <div className="flex flex-col gap-20 p-4 pb-10">
      < APropos />
      <FuturPro />
      <div
        className="flex flex-row flex-wrap items-center justify-around gap-y-20 gap-x-10 m-4"
        id="projects"
      >
        <Link to="/project/portfolio" state={{ ...projects[0] }}>
          <Card
            title="Portfolio"
            langage="JavaScript et JSX"
            framework="React et TailwindCSS"
            typeProjet="Projet scolaire"
          >
            test
          </Card>
        </Link>

        <Link to="/project/to-do-list" state={{ ...projects[1] }}>
          <Card
            title="To-do list"
            langage="HTML,CSS et TypeScript"
            framework="Angular"
            typeProjet="Projet personnel"
          ></Card>
        </Link>

        <Link to="/project/co-vote" state={{ ...projects[2] }}>
          <Card
            title="Co Vote"
            langage="HTML et PHP"
            framework="TailwindCSS"
            typeProjet="Projet scolaire"
          ></Card>
        </Link>

        <Link to="/project/pokemon-tcg" state={{...projects[3]}}>
          <Card
            title="Pokemon TCG"
            langage="Java"
            framework="JavaFX"
            typeProjet="Projet scolaire"
          ></Card>
        </Link>

      </div>
      <div className="flex justify-center">
        <a
          href="/src/assets/cv.pdf"
          download="CV_Touron_Arthur.pdf"
          className="flex items-center gap-1 border border-white p-2 rounded-lg hover:bg-white hover:text-neutral-950 transition-all duration-750"
        >
          <span className="material-symbols-outlined">download</span>
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

export default PageHome;
