import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Editor } from "./pages/Editor";
import { Plantillas } from "./pages/Plantillas";
import { Galeria } from "./pages/Galeria";
import { GaleriaDetalle } from "./pages/GaleriaDetalle";
import { ExportPage } from "./pages/ExportPage";
import { Colaborar } from "./pages/Colaborar";

const shellless = ["/editor", "/export", "/colaborar"];

export default function App() {
  const location = useLocation();
  const hideShell = shellless.some((path) => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-canvas text-white">
      {!hideShell && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/plantillas" element={<Plantillas />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:id" element={<GaleriaDetalle />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/colaborar" element={<Colaborar />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!hideShell && <Footer />}
    </div>
  );
}
