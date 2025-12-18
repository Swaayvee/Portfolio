const APropos = () => {
  const imageProfile = "";

  return (
    <section
      id="about"
      className="flex flex-col gap-6 p-8 border border-neutral-600 rounded-2xl bg-neutral-900/90 shadow-xl backdrop-blur-sm"
    >
      <h1 className="text-4xl font-bold bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent pb-4 border-b border-neutral-800">
        A propos
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-linear-to-r from-neutral-600 to-neutral-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square w-64 overflow-hidden rounded-full border-4 border-neutral-800 shadow-2xl">
            {imageProfile ? (
              <img
                src={imageProfile}
                className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                alt="Arthur Touron"
              />
            ) : (
              <div className="h-full w-full bg-neutral-700 flex items-center justify-center hover:scale-103 transition-all duration-500">
                <p className="text-lg font-semibold text-neutral-300/80">Pas encore disponible</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 text-neutral-300 leading-relaxed text-lg">
          <p className="font-light italic text-white text-xl border-l-4 border-neutral-500 pl-4 py-1">
            "Futur développeur polyvalent, passionné par le développement web et
            le design."
          </p>

          <div className="space-y-4">
            <p>
              Je m'appelle <strong className="text-white">Arthur Touron</strong>{" "}
              et je poursuis un Bachelor Universitaire de Technologie (BUT)
              Informatique à Sète
              <span className="block mt-1 text-sm font-medium text-neutral-500 uppercase tracking-widest">
                Option Réalisation et Conception de Développement d’Applications
              </span>
            </p>

            <div>
              <p className="font-semibold text-white mb-2">Mon parcours :</p>
              <ul className="space-y-2 ml-4 relative border-l border-neutral-700 pl-4">
                <li className="relative before:absolute before:-left-[21px] before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-neutral-500">
                  Bac général avec spécialités Mathématiques et NSI
                </li>
                <li className="relative before:absolute before:-left-[21px] before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-neutral-200">
                  Bachelor Universitaire de Technologie (BUT) Informatique
                </li>
              </ul>
            </div>

            <p>
              J’ai choisi le BUT informatique car il propose un apprentissage
              structuré, combinant théorie et pratique. Contrairement à une
              licence plus théorique, le BUT offre un équilibre optimal avec des
              projets concrets et des interactions professionnelles.
            </p>

            <p>
              Cette approche assure une continuité avec le lycée tout en
              garantissant une montée en compétences efficace vers le monde
              professionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
