import { useLocation, Link } from "react-router-dom";

const PageProject = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center px-4">
        <h2 className="text-3xl font-bold text-neutral-200">
          Projet non trouvé
        </h2>
        <p className="text-neutral-400">
          Les données du projet semblent manquantes.
        </p>
        <Link
          to="/"
          className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-neutral-700"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const technologies = (
    data.langage + (data.framework ? `, ${data.framework}` : "")
  )
    .split(/,| et /)
    .map((t) => t.trim())

  return (
    <div className="flex flex-col gap-6 pb-20 max-w-7xl mx-auto w-full">
      <Link
        to="/#projects"
        className="self-start inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group py-2"
      >
        <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        <span className="text-sm font-medium uppercase tracking-wider">
          Retour aux projets
        </span>
      </Link>

      <section className="flex flex-col gap-8 p-6 md:p-10 border border-neutral-600 rounded-3xl bg-neutral-900/90 shadow-2xl backdrop-blur-sm">
        <div className="border-b border-neutral-700/50 pb-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              {data.typeProjet}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            {data.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-neutral-500">
                  code
                </span>
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-neutral-800/50 text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300 cursor-default text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-neutral-500">
                  description
                </span>
                À propos du projet
              </h3>
              <div className="text-neutral-300 text-lg leading-loose space-y-4">
                <p>{data.description}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {data.link.site ? (
                <Link
                  to={data.link.site}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Voir le site
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold opacity-50 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Voir le site
                </button>
              )}
              {data.link.code ? (
                <Link
                  to={data.link.code}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 text-white font-semibold border border-neutral-700 hover:bg-neutral-700 transition-colors"
                >
                  <span className="material-symbols-outlined">code</span>
                  Code source
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 text-white font-semibold border border-neutral-700 opacity-50 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">code</span>
                  Code source
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-800 group shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 gap-3 group-hover:text-neutral-500 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  image
                </span>
                <span className="text-sm font-medium uppercase tracking-widest">
                  Aperçu principal
                </span>
              </div>
              {/* <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 to-transparent opacity-60"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl border border-neutral-700 bg-neutral-800/50 flex items-center justify-center text-neutral-700">
                <span className="material-symbols-outlined">
                  screenshot_monitor
                </span>
              </div>
              <div className="aspect-square rounded-xl border border-neutral-700 bg-neutral-800/50 flex items-center justify-center text-neutral-700">
                <span className="material-symbols-outlined">photo_library</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageProject;
