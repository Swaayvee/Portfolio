const Card = (props) => {
  const tech = props.framework
    ? `${props.langage} - ${props.framework}`
    : props.langage;
  const typeProjet = props.typeProjet
    ? props.typeProjet.charAt(0).toUpperCase() + props.typeProjet.slice(1)
    : "";
  return (
    <div className="w-[max(350px,100dvw/4)] h-[max(350px,100dvw/4)] flex flex-col items-start justify-start gap-4 border border-neutral-600 rounded-2xl bg-neutral-900/90 backdrop-blur-sm hover:scale-[1.02] hover:border-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 opacity-90 hover:opacity-100 p-6 md:p-8">
      <p className="text-xl font-bold">&nbsp;&nbsp;&nbsp;&nbsp;{props.title}</p>
      <div className="bg-neutral-800 w-full flex-1 min-h-0 rounded-lg p-2 py-3 no-scollbar">
        <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex flex-col">
          <div className="text-sm flex flex-col gap-y-2 px-3">
            <div className="text-base">
              <p>
                <strong>{tech}</strong>
              </p>
              <p className="px-3 py-1 mt-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.1)] w-fit">{typeProjet}</p>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
