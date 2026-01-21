import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="header">

      {/* HAMBURGER MENU - MOBILE */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* LEFT NAV — DESKTOP */}
      <nav className="nav-left desktop-nav">
        <a onClick={() => navigate("/about-detail")}>Acerca</a>
        <a onClick={() => scrollToSection("servicios")}>Servicios</a>
        <a onClick={() => scrollToSection("proyectos")}>Proyectos</a>
        <a onClick={() => navigate("/contacto")}>Contacto</a>
      </nav>

      {/* LOGO (centrado siempre) */}
      <div className="nav-center">
        <img 
          src={logo} 
          alt="IDA Studio" 
          className="logo-img"
          onClick={() => navigate("/")}
        />
      </div>

      {/* RIGHT ICONS — DESKTOP ONLY */}
      <div className="nav-right desktop-nav">
        <button onClick={() => (window.location.href = "mailto:hola@ida-studio.com")}>
          @
        </button>
        <button onClick={() => navigate("/clientes")}>
          ★
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <a onClick={() => { navigate("/about-detail"); setOpen(false); }}>
            Acerca
          </a>

          <a onClick={() => scrollToSection("servicios")}>
            Servicios
          </a>

          <a onClick={() => scrollToSection("proyectos")}>
            Proyectos
          </a>

          <a onClick={() => { navigate("/contacto"); setOpen(false); }}>
            Contacto
          </a>

          <div className="mobile-icons">
            <span onClick={() => (window.location.href = "mailto:hola@ida-studio.com")}>
              @ Correo
            </span>

            <span onClick={() => navigate("/clientes")}>
              ★ Clientes
            </span>
          </div>

        </div>
      )}

    </header>
  );
}
