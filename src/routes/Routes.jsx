import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageHome from "../pages/PageHome";
import PageProject from "../pages/PageProject";

const AppRoutes = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/project/:value?" element={<PageProject />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default AppRoutes;
