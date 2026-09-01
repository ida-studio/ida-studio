import "./PiedePagina.css";
import { useNavigate } from "react-router-dom";

// ⚠️ Pendiente: reemplazar con el número real (formato: código de país + número, sin + ni espacios)
const WHATSAPP_NUMBER = "521XXXXXXXXXX";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 17.2c0.3-1.3 1.1-4.8 1.1-4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9.3 9.8c0.5-1.1 1.6-1.9 3-1.9 2.1 0 3.4 1.4 3.4 3.3 0 2.4-1.3 4.4-3.3 4.4-1 0-1.8-0.6-2-1.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 20l1.2-3.9A8.4 8.4 0 1 1 12 20.4a8.3 8.3 0 0 1-4-1L4 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 8.6c0.2-0.5 0.4-0.5 0.6-0.5h0.5c0.2 0 0.4 0 0.5 0.4 0.2 0.5 0.6 1.6 0.7 1.7 0.1 0.1 0.1 0.3 0 0.4-0.1 0.2-0.2 0.3-0.3 0.5-0.1 0.1-0.3 0.3-0.1 0.6 0.2 0.3 0.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5 0.3 0.1 0.5 0.1 0.6-0.1 0.2-0.2 0.7-0.8 0.9-1 0.2-0.2 0.4-0.2 0.6-0.1l1.6 0.8c0.2 0.1 0.4 0.2 0.4 0.3 0.1 0.2 0.1 0.9-0.2 1.4-0.4 0.6-1.4 1.1-1.9 1.1-0.5 0.1-1.1 0.1-1.8-0.1-0.4-0.1-0.9-0.3-1.6-0.6-2.7-1.2-4.5-3.9-4.6-4.1-0.1-0.2-1.1-1.4-1.1-2.7 0-1.3 0.7-1.9 0.9-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PiedePagina() {
  const navigate = useNavigate();

  return (
    // ✅ CORRECCIÓN: era position:fixed (tapaba contenido)
    // Ahora es un footer normal al final del flujo de la página
    <footer className="footer-fixed">

      <div className="footer-left">
        © 2026 ID·A Studio. Todos los derechos reservados.
      </div>

      <div className="footer-center">
        <a
          href="https://www.instagram.com/ida.rquitectura"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
        <a
          href="https://pin.it/778xYrDKH"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
          aria-label="Pinterest"
        >
          <IconPinterest />
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
          aria-label="WhatsApp"
        >
          <IconWhatsapp />
        </a>
      </div>

      <div className="footer-right" onClick={() => navigate("/aviso-de-privacidad")}>
        Aviso de privacidad
      </div>

    </footer>
  );
}
