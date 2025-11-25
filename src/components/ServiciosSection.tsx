// ServiciosSection.tsx
import "./ServiciosSection.css";
import { useNavigate } from "react-router-dom";

import servicios1 from "../assets/servicios1.png";
import servicios2 from "../assets/servicios2.png";
import servicios3 from "../assets/servicios3.png";

export default function ServiciosSection() {
  const navigate = useNavigate();

  return (
    <section className="servicios-section">
      <h2 className="servicios-title">Nuestros servicios</h2>

      <div className="servicios-grid">
        
        {/* Servicio 1 */}
        <div className="servicio-card">
          <img src={servicios1} alt="servicio 1" />
          <p
            className="servicio-label"
            onClick={() => navigate("/kit-herramientas-digitales")}
          >
            Kit de Herramientas Digitales
          </p>
          <p className="servicio-desc">
            Soluciones digitales que elevan tu experiencia y proceso creativo.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="servicio-card">
          <img src={servicios2} alt="servicio 2" />
          <p
            className="servicio-label"
            onClick={() => navigate("/arquitectura")}
          >
            Arquitectura
          </p>
          <p className="servicio-desc">
            Diseño arquitectónico enfocado en claridad, coherencia y propósito.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="servicio-card">
          <img src={servicios3} alt="servicio 3" />
          <p
            className="servicio-label"
            onClick={() => navigate("/diseno-integral")}
          >
            Diseño Integral
          </p>
          <p className="servicio-desc">
            Estrategias espaciales que unifican estética, función y bienestar.
          </p>
        </div>

      </div>
    </section>
  );
}
