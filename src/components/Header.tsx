import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function IconClientes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M 46.29,17.19 L 12.70,75.39 L 12.50,76.37 L 16.21,82.62 L 83.59,82.62 L 86.91,77.15 L 87.30,75.78 L 53.52,17.19 Z
           M 61.33,75.00 L 63.87,70.90 L 69.34,70.90 L 71.88,75.20 L 61.52,75.39 Z
           M 31.25,69.14 L 33.59,65.23 L 46.09,65.23 L 48.63,69.34 L 31.45,69.53 Z
           M 29.88,60.16 L 32.42,64.45 L 29.49,69.53 L 24.80,69.53 L 24.61,69.14 Z
           M 59.96,54.30 L 68.55,69.14 L 68.36,69.53 L 63.67,69.53 L 57.62,59.18 L 57.42,58.40 Z
           M 82.03,81.05 L 16.99,81.25 L 14.45,76.95 L 53.91,76.56 L 53.32,74.61 L 46.88,63.87 L 33.79,63.87 L 31.25,59.57 L 31.45,59.38 L 49.41,59.38 L 59.57,76.76 L 73.63,76.76 L 74.02,75.98 L 60.74,52.93 L 63.28,48.63 Z
           M 50.00,36.91 L 52.34,41.02 L 52.15,41.80 L 46.09,52.15 L 41.41,52.15 L 41.21,51.76 L 49.61,37.11 Z
           M 53.12,31.25 L 53.71,31.64 L 58.40,39.84 L 58.40,40.43 L 53.71,40.43 L 51.17,36.33 L 50.78,35.16 Z
           M 53.12,19.53 L 53.71,19.92 L 85.74,75.98 L 83.40,80.27 L 82.42,79.10 L 64.45,47.46 L 63.48,46.29 L 62.50,46.68 L 55.86,58.40 L 56.45,59.96 L 62.30,69.92 L 62.30,70.51 L 59.96,74.41 L 59.38,73.83 L 50.78,58.79 L 60.74,41.21 L 53.71,28.91 L 52.73,28.91 L 39.65,51.95 L 34.57,51.95 Z
           M 51.76,18.55 L 51.76,19.14 L 32.42,52.93 L 32.81,53.52 L 46.88,53.52 L 52.93,42.97 L 53.91,41.80 L 58.40,41.80 L 58.59,41.99 L 49.22,58.01 L 29.88,57.81 L 28.52,59.38 L 22.46,70.51 L 23.24,71.09 L 49.22,70.90 L 51.95,75.20 L 14.65,75.39 L 14.65,74.80 L 47.07,18.55 Z"
      />
    </svg>
  );
}

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
          className="icon-clientes-btn"
          onClick={() => navigate("/clientes")}
          aria-label="Clientes"
        >
          <IconClientes className="icon-clientes" />
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
              className="mobile-icon-clientes"
              onClick={() => {
                navigate("/clientes");
                setOpen(false);
              }}
            >
              <IconClientes className="icon-clientes" />
              Clientes
            </span>

          </div>
        </div>
      )}
    </header>
  );
}