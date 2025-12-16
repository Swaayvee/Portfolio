const FuturPro = () => {
  return (
    <section
      id="professionalProject"
      className="flex flex-col gap-6 p-8 border border-neutral-600 rounded-2xl bg-neutral-900/90 shadow-xl backdrop-blur-sm"
    >
      <h2 className="text-4xl font-bold bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent pb-4 border-b border-neutral-800">
        Mes projets après le BUT
      </h2>

      <div className="flex flex-col md:flex-row gap-8 text-neutral-300 text-lg leading-relaxed">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="p-1 bg-neutral-800 rounded bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-neutral-700">
              🏢
            </span>
            Développement en entreprise
          </h3>
          <p className="pl-2 border-l border-neutral-800">
            Après le BUT, mon objectif principal est de travailler dans une
            entreprise se concentrant dans la conception d'application et/ou site web, où je pourrai mettre en
            pratique les compétences acquises durant ces 3 années. Ce premier
            pas dans le monde professionnel me permettra d’approfondir mes
            connaissances, de m’adapter à des environnements variés et de
            contribuer activement à des projets de plus grandes envergures.
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="p-1 bg-neutral-800 rounded bg-linear-to-br from-emerald-500/20 to-teal-500/20 border border-neutral-700">
              🚀
            </span>
            Freelance & Entrepreneuriat
          </h3>
          <p className="pl-2 border-l border-neutral-800">
            En parallèle, je souhaite explorer le domaine du Freelance, une
            opportunité qui m’offrirait à la fois flexibilité et diversité dans
            les projets. Travailler en tant qu'indépendant nécessite une solide
            compréhension des bases entrepreneuriales, un domaine que j’aimerais
            approfondir pour assurer une gestion efficace de ma future carrière.
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-center italic text-neutral-400">
        Mon ambition est de combiner ces deux expériences pour construire un
        parcours professionnel équilibré, entre sécurité d’emploi et liberté
        d’action.
      </div>
    </section>
  );
};

export default FuturPro;
