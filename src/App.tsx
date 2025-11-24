import { useState } from "react";
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { EntranceButton } from "./components/EntranceButton";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutDetail from "./components/AboutDetail";

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
            <Route path="/" element={<HeroSection />} />
            <Route path="/about-detail" element={<AboutDetail />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
