const Card = (props) => {
  const tech = props.framework ? `${props.langage} - ${props.framework}` : props.langage;
  const typeProjet = props.typeProjet ? (props.typeProjet).charAt(0).toUpperCase() + (props.typeProjet).slice(1) : "";
  return (
    <div className="w-[max(350px,100dvw/4)] h-[max(350px,100dvw/4)] flex flex-col items-start justify-start gap-2 border-2 border-white rounded-xl bg-neutral-900 hover:scale-102 hover:shadow-md hover:shadow-neutral-400 hover:translate-y-[-5px] transition-all duration-300 opacity-80 hover:opacity-100 p-8">
      <p className="text-xl font-bold">&nbsp;&nbsp;&nbsp;&nbsp;{props.title}</p>
      <div className="bg-neutral-800 w-full flex-1 min-h-0 rounded-lg p-2 py-3 no-scollbar">
        <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex flex-col">
          <div className="text-sm flex flex-col gap-y-2 px-3">
            <div className="text-base">
              <p>
                <strong>{tech}</strong>
              </p>
              <p>{typeProjet}</p>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
