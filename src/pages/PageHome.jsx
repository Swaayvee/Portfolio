import Card from "./../components/molecule/Card";
import APropos from "../components/molecule/APropos";
import FuturPro from "./../components/molecule/FuturPro";
import Link from "./../components/atom/Link";

const projects = [
  {
    title: "Portfolio",
    langage: "JavaScript et JSX",
    framework: "React et TailwindCSS",
    typeProjet: "Projet scolaire",
    summary:
      "Mon site personnel et vitrine de mes projets avec un système de navigation intuitif.",
    contexte:
      "Ce portfolio a été réalisé pour présenter mes compétences et mes projets. Il utilise React 19 et Tailwind CSS v4 qui sont, pour moi, des technologies assez nouvelles. Pour me présenter numériquement dans le milieu professionnel, j'ai décidé de créer ce portfolio. Il permet de montrer mes compétences en développement web acquises au cours de mes études.",
    description:
      "Le portfolio suivant est responsive et fonctionnel sur tous les appareils mais aussi sur tous les moteurs de recherche afin d'assurer une meilleure compatibilité. Ce projet m'a appris à réaliser un effet dit 'liquid glass' mais aussi à utiliser le framework Tailwind CSS pour créer un design moderne et élégant ainsi que la bibliothèque React pour créer des composants réutilisables. Avec l'utilisation de React, j'ai aussi la décomposition atomique (composant réutilisable) et la gestion d'état avec le hook useState().",
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
    contexte:
      "Lors des grandes vacances 2024-2025, j'ai décidé de créer une application de gestion de tâches simple et efficace avec un système de date et de priorité dont l'objectif était d'apprendre un framework web, Angular. To-do List était un projet fait seul dont le but était de mettre en pratique ce que j'avais appris.",
    description:
      "Ce projet utilise donc des composants Angular appelés ’component’. Pour cela j'ai créé une application web avec un système de stockage des informations avec la base de données 'Local Sotrage' permettant de stocker toutes les informations côté client. Il y a aussi un système de connexion avec Gmail, cependant je n'ai pas réussi à créer un compte dont toutes les informations liées à l'utilisateur étaient gardées en fonction de son e-mail.",
    link:{
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
    contexte:
      "Ce projet a été réalisé lors du premier semestre de l'année 2025-2026 (BUT 2ᵉ année) dans le cadre d'une SAE. Elle a pour but de mettre en pratique les connaissances acquises en PHP vues durant le même semestre. Il a aussi comme but secondaire une relation client et développeur se matérialisant en groupes de 4 à 5 personnes.",
    description:
      "Le sujet était une application web permettant de voter de différentes façons (avec différents types de vote). Pour cela on utilisait la structure MVC pour l'architecture et la méthode de travail SCRUM (méthode agile) pour l'équipe. Afin de stocker toutes les informations et de synchroniser toutes les instances de l'application, il fallait stocker toutes les données. On a donc utilisé PHP MyAdmin, qui est un système de gestion de base de données. Pour réaliser celui-ci, il fallait se coordonner pour une meilleure productivité.",
    link: {
      site: "https://webinfo.iutmontp.univ-montp2.fr/~philippote/sae3a-base/web/controleurFrontal.php",
      code: "https://gitlabinfo.iutmontp.univ-montp2.fr/sae3a/projets/lebalchm-nerrande-tourona-philippote/sae3a-base"
    },
    images: {
      main: "/assets/Co-Vote/generalView.png",
      other: "/assets/Co-Vote/configurationQuestion.png",
      code: "/assets/Co-Vote/codeFonctionAntiInjectionSQL.png"
    },
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
