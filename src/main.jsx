import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/Routes";
import Header from "./components/organism/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="bg-neutral-950 text-neutral-100 min-h-screen w-full flex flex-col">
        <Header />

        <main className="pt-[100px] px-4 flex-1">
          <AppRoutes />
        </main>

        <footer className="text-center text-sm p-2.5 bg-neutral-800 opacity-80 mt-auto">
          <p>© 2025 Portfolio. Tous droits réservés.</p>
        </footer>
      </div>
    </BrowserRouter>
  </StrictMode>
);
