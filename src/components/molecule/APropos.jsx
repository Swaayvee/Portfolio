import Image from "../atom/Image";

const APropos = () => {
  return (
    <div id="about" className="flex flex-col gap-4 px-4">
      <h1 className="text-3xl font-bold pb-10">A propos</h1>
      <p className="text-xl italic">Futur développeur polyvalent, passionné par le développement web et le design.</p>
      <div className="flex max-lg:flex-col flex-row max-lg:items-center">
         <div className="aspect-square w-60 overflow-hidden rounded-full self-center shrink-0">
          <Image
            src="/src/assets/free-nature-images.jpg"
            style="h-full w-full object-cover hover:scale-105 transition-all duration-300"
            alt="photo de profil"
          />
        </div>
        <div className="flex flex-col p-1 text-base lg:pl-10">
          <p>Je m'appelle Arthur Touron et je poursuis un Bachelor Universitaire de Technologie (BUT) Informatique à Sète <span className="text-[0.7rem] text-neutral-400 uppercase tracking-widest ml-1">– option Réalisation et Conception de Développement d’Applications</span>.</p>
          <p>Mon parcours :</p>
          <ul className="list-disc pl-5 ">
            <li>Bac général avec spécialités Mathématiques et NSI</li>
            <li>Bachelor Universitaire de Technologie (BUT) Informatique</li>
          </ul>
          <p>
            J’ai choisi le BUT informatique car il propose un apprentissage structuré, combinant
            théorie et pratique, une approche particulièrement adaptée au domaine de l’informatique.
            Dans cette discipline, surtout en développement, la pratique est essentielle pour
            comprendre et appliquer des concepts complexes. Contrairement à une licence plus axée
            sur la théorie, le BUT offre un équilibre optimal, intégrant des travaux dirigés, des projets
            concrets et des interactions avec le monde professionnel.
          </p>
          <p>
            L’approche pédagogique du BUT est également un atout pour des étudiants comme moi,
            qui bénéficient d’
            une continuité entre les méthodes de travail du lycée et celles de
            l’enseignement supérieur. Cet encadrement progressif facilite l’adaptation et garantit une
            montée en compétences efficace, sans rupture brutale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APropos;
