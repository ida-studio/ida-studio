import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* BOTÓN HAMBURGUESA — SOLO MÓVIL */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* NAV DESKTOP */}
      <nav className="nav-left desktop-nav">
        <a href="#acerca">Acerca</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* LOGO */}
      <div className="nav-center">
        <img src={logo} alt="IDA Studio" className="logo-img" />
      </div>

      {/* ICONOS DERECHA (SOLO DESKTOP) */}
      <div className="nav-right">
        <button 
          onClick={() => (window.location.href = "mailto:hola@ida-studio.com")}
        >
          @
        </button>
        <button>ig</button>
      </div>

      {/* MENU MÓVIL DESPLEGABLE */}
      {open && (
        <div className="mobile-menu">
          <a href="#acerca" onClick={() => setOpen(false)}>Acerca</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}

    </header>
  );
}
