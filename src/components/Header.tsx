import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);

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
        <a onClick={() => goToSection("servicios")}>Servicios</a>
        <a onClick={() => goToSection("proyectos")}>Proyectos</a>
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

      {/* RIGHT ICONS — DESKTOP Y MOBILE */}
      <div className="nav-right">
        <button
          onClick={() => (window.location.href = "mailto:hola@ida-studio.com")}
        >
          @
        </button>

        <button onClick={() => navigate("/clientes")}>
          ★
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <a
            onClick={() => {
              navigate("/about-detail");
              setOpen(false);
            }}
          >
            Acerca
          </a>

          <a onClick={() => goToSection("servicios")}>
            Servicios
          </a>

          <a onClick={() => goToSection("proyectos")}>
            Proyectos
          </a>

          <a
            onClick={() => {
              navigate("/contacto");
              setOpen(false);
            }}
          >
            Contacto
          </a>

        </div>
      )}
    </header>
  );
}
