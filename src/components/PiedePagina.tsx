import "./PiedePagina.css";
import { useNavigate } from "react-router-dom";

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
        
      </div>

      <div className="footer-right" onClick={() => navigate("/aviso-de-privacidad")}>
        Aviso de privacidad
      </div>

    </footer>
  );
}