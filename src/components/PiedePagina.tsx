import { Link } from "react-router-dom";
import "./PiedePagina.css";

export default function PiedePagina() {
  return (
    // ✅ CORRECCIÓN: era position:fixed (tapaba contenido)
    // Ahora es un footer normal al final del flujo de la página
    <footer className="footer-fixed">

      <div className="footer-left">
        © 2026 ID·A Studio. Todos los derechos reservados.
      </div>

      <div className="footer-center">
        
      </div>

      <div className="footer-right">
        <Link to="/aviso-privacidad" className="footer-privacy-link">
          Aviso de privacidad
        </Link>
      </div>

    </footer>
  );
}
