import Card from "./../components/molecule/Card";
import APropos from "../components/molecule/APropos";
import FuturPro from "./../components/molecule/FuturPro";
import Link from "./../components/atom/Link";

let projects = [
  {
    title: "Portfolio",
    langage: "JavaScript et JSX",
    framework: "React et TailwindCSS",
    typeProjet: "Projet scolaire",
    summary:
      "Mon site personnel et vitrine de mes projets avec un système de navigation intuitif.",
    contexte:
      "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4 qui sont, pour moi, des technologies assez nouvelles. Pour me présenter numériquement dans le milieu professionnel, j'ai décidé de créer ce portfolio. Il permet de montrer mes compétences en développement web acquises au cours de mes études.",
    description:
      "Le portfolio suivant est responsive et fonctionnel sur tous les appareils mais aussi sur tous les moteurs de recherche afin d'assurer une meilleure compatibilité. Ce projet m'as appris à réaliser un effet dit 'liquid glasse' mais aussi à utiliser le framework TailwindCSS pour créer un design moderne et élégant ainsi que la bibliothèque React pour créer des composants réutilisables. Avec l'utilisation de React j'ai aussi la décomposition atomique (composant réutilisable) et la gestion d'état avec le hook useState().",
    link: {
      site: "/",
      code: "https://github.com/Swaayvee/Portfolio",
    },
    images: {
      main: "/assets/Portfolio/generalView.png",
      code: "/assets/Portfolio/codeCard.png",
      other: "/assets/Portfolio/liquidGlassEffect_ProjectPresentation.png",
    },
  },
  {
    title: "To-do list",
    langage: "HTML,CSS et TypeScript",
    framework: "Angular",
    typeProjet: "Projet personnel",
    summary:
      "Application de gestion de tâches simple et efficace avec un système de date et priorité.",
    description:
      "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    link: {
      site: "https://to-do-project-angular.firebaseapp.com/",
    },
    images: {
      main: "/assets/To-Do-Angular/generalView.png",
      code: "/assets/To-Do-Angular/codeLocalStorageToDo.png",
      other: "/assets/To-Do-Angular/editTask.png",
    },
  },
  {
    title: "Co Vote",
    langage: "HTML et PHP",
    framework: "TailwindCSS",
    typeProjet: "Projet scolaire",
    summary:
      "Plateforme de vote similaire à un réseau social permettant de donner son avis en votant.",
    description:
      "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et TailwindCSS v4.",
    link: {
      site: "https://webinfo.iutmontp.univ-montp2.fr/~philippote/sae3a-base/web/controleurFrontal.php",
      code: "https://gitlabinfo.iutmontp.univ-montp2.fr/sae3a/projets/lebalchm-nerrande-tourona-philippote/sae3a-base"
    },
    images: {},
  },
];

const PageHome = () => {
  return (
    <div className="flex flex-col gap-20 p-4 pb-10">
      <APropos />
      <FuturPro />
      <div
        className="flex flex-row flex-wrap items-center justify-around gap-y-20 gap-x-10"
        id="projects"
      >
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            state={{ ...project }}
          >
            <Card
              title={project.title}
              langage={project.langage}
              framework={project.framework}
              typeProjet={project.typeProjet}
            >
              <p className="text-neutral-400 mt-2">{project.summary}</p>
              {project.images.main && (
                <img
                  src={project.images.main}
                  alt="Aperçu"
                  className="w-full h-40 object-cover rounded-lg mt-4 border border-neutral-700"
                />
              )}
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="/assets/cv.pdf"
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
