import { useParams, useLocation } from "react-router-dom";

const PageProject = () => {
  const { value } = useParams();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Projet : {value}</h2>
        <p>Données non disponibles (accès direct).</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{data.title}</h2>
      <div className="flex gap-2 text-sm text-neutral-400 uppercase tracking-widest">
        <span>{data.typeProjet}</span>
        <span>•</span>
        <span>{data.langage}</span>
        {data.framework && <span>- {data.framework}</span>}
      </div>

      <div className="text-lg mt-4 leading-relaxed">{data.description}</div>
    </div>
  );
};

export default PageProject;
