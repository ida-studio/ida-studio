import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { EntranceButton } from "./components/EntranceButton";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutDetail from "./components/AboutDetail";
import ServiciosSection from "./components/ServiciosSection";
import PiedePagina from "./components/PiedePagina";   // ← AGREGADO

// Nuevas subpáginas:
import KitHerramientasDigitales from "./components/KitHerramientasDigitales";
import Arquitectura from "./components/Arquitectura";
import DisenoIntegral from "./components/DisenoIntegral";

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
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServiciosSection />
                  <PiedePagina />    {/* ← AGREGADO AQUÍ */}
                </>
              }
            />

            <Route path="/about-detail" element={<AboutDetail />} />

            {/* Rutas nuevas */}
            <Route path="/kit-herramientas-digitales" element={<KitHerramientasDigitales />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/diseno-integral" element={<DisenoIntegral />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
