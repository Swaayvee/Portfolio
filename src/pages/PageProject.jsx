import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const PageProject = () => {
  const location = useLocation();
  const data = location.state;
  const [selectedImage, setSelectedImage] = useState(false);

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

  const { title, langage, framework, typeProjet, description, link, images, contexte } =
    data;

  const technologies = (langage + (framework ? `, ${framework}` : ""))
    .split(/,| et /)
    .map((t) => t.trim());

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
              {typeProjet}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            {title}
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
                <p>{contexte}</p>
                <p>{description}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {link && link.site ? (
                <Link
                  to={link.site}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                  Voir le site
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold opacity-50 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                  Voir le site
                </button>
              )}
              {link && link.code ? (
                <Link
                  to={link.code}
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

          <div className="lg:col-span-5 lg:justify-center flex flex-col gap-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-800 group shadow-2xl">
              {images && images.main ? (
                <button
                  className="absolute inset-0 w-full h-full cursor-zoom-in p-0 border-0 outline-none"
                  onClick={() => setSelectedImage(`${images.main}`)}
                >
                  <img
                    src={`${images.main}`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 gap-3 group-hover:text-neutral-500 transition-colors z-10">
                  <span className="material-symbols-outlined text-6xl">
                    image
                  </span>
                  <span className="text-sm font-medium uppercase tracking-widest">
                    Aperçu principal
                  </span>
                </div>
              )}
              {!images?.main && (
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 to-transparent opacity-60"></div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl border border-neutral-700 bg-neutral-800/50 overflow-hidden relative group">
                {images && images.other ? (
                  <button
                    className="w-full h-full cursor-zoom-in p-0 border-0 outline-none block"
                    onClick={() => setSelectedImage(`${images.other}`)}
                  >
                    <img
                      src={`${images.other}`}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <span className="material-symbols-outlined">
                      screenshot_monitor
                    </span>
                  </div>
                )}
              </div>
              <div className="aspect-square rounded-xl border border-neutral-700 bg-neutral-800/50 overflow-hidden relative group">
                {images && images.code ? (
                  <button
                    className="w-full h-full cursor-zoom-in p-0 border-0 outline-none block"
                    onClick={() => setSelectedImage(`${images.code}`)}
                  >
                    <img
                      src={`${images.code}`}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <span className="material-symbols-outlined">
                      photo_library
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(!selectedImage)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={() => setSelectedImage(!selectedImage)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default PageProject;
