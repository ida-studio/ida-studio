import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { EntranceButton } from "./components/EntranceButton";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutDetail from "./components/AboutDetail";
import ServiciosSection from "./components/ServiciosSection";
import ProyectosSection from "./components/ProyectosSection";   // ← NUEVO
import PiedePagina from "./components/PiedePagina";

// Subpáginas:
import KitHerramientasDigitales from "./components/KitHerramientasDigitales";
import Arquitectura from "./components/Arquitectura";
import DisenoIntegral from "./components/DisenoIntegral";

// Subpáginas de Proyectos:
import Proyecto1 from "./components/Proyecto1";
import Proyecto2 from "./components/Proyecto2";
import Proyecto3 from "./components/Proyecto3";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <BrowserRouter>
      {!entered ? (
        <EntranceButton onEnter={() => setEntered(true)} />
      ) : (
        <div className="app-shell">
          <Header />

          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServiciosSection />
                  <ProyectosSection />     {/* ← NUEVO */}
                  <PiedePagina />
                </>
              }
            />

            {/* Subpáginas */}
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/kit-herramientas-digitales" element={<KitHerramientasDigitales />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/diseno-integral" element={<DisenoIntegral />} />

            {/* Rutas de Proyectos */}
            <Route path="/proyecto-1" element={<Proyecto1 />} />
            <Route path="/proyecto-2" element={<Proyecto2 />} />
            <Route path="/proyecto-3" element={<Proyecto3 />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;