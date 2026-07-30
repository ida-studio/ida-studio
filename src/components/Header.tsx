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
      const element = document.getElementById(id);

      if (element) {
        // Ajuste independiente para cada sección
        const headerOffset =
          id === "servicios" ? 100 : 80;

        const elementPosition =
          element.getBoundingClientRect().top;

        const offsetPosition =
          elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);

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
        <a onClick={() => navigate("/about-detail")}>
          Acerca
        </a>

        <a onClick={() => goToSection("servicios")}>
          Servicios
        </a>

        <a onClick={() => goToSection("proyectos")}>
          Proyectos
        </a>

        <a onClick={() => navigate("/contacto")}>
          Contacto
        </a>
      </nav>

      {/* LOGO */}
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
        <button
          onClick={() =>
            (window.location.href =
              "mailto:hola@ida-studio.com")
          }
        >
          @
        </button>

        <button
          onClick={() => navigate("/clientes")}
        >
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

          <a
            onClick={() => goToSection("servicios")}
          >
            Servicios
          </a>

          <a
            onClick={() => goToSection("proyectos")}
          >
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

          <div className="mobile-icons">

            <span
              onClick={() =>
                (window.location.href =
                  "mailto:hola@ida-studio.com")
              }
            >
              @ Correo
            </span>

            <span
              onClick={() => {
                navigate("/clientes");
                setOpen(false);
              }}
            >
              ★ Clientes
            </span>

          </div>
        </div>
      )}
    </header>
  );
}