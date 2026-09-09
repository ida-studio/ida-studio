import "./ServiciosSection.css";
import { useNavigate } from "react-router-dom";

import servicios1 from "../assets/servicios1.png";
import servicios2 from "../assets/servicios2.png";
import servicios3 from "../assets/servicios3.png";

export default function ServiciosSection() {
  const navigate = useNavigate();

  return (
    <section className="servicios-section" id="servicios">
      <h2 className="servicios-title">Through the Looking Glass</h2>

      <div className="servicios-grid">

        {/* Servicio 1 */}
        <div className="servicio-card">

          <div className="servicio-img-wrapper">
            <img src={servicios1} alt="servicio 1" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/kit-herramientas-digitales")}
          >
            Auditoria Espacial
          </p>

          <p className="servicio-desc">
          Te ayudamos a dar el primer paso con seguridad.<br />
          Alineamos investigación, análisis y concepto a tus prioridades, objetivos, contexto y viabilidad.
          
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="servicio-card">

          <div className="servicio-img-wrapper">
            <img src={servicios2} alt="servicio 2" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/arquitectura")}
          >
            Arquitectura Integral
          </p>

          <p className="servicio-desc">
          Especialistas en diseño de átmosferas.<br />
          Arquitectura enfocada en mejorar tu experiencia en el espacio.<br />
            
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="servicio-card">

          <div className="servicio-img-wrapper">
            <img src={servicios3} alt="servicio 3" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/diseno-integral")}
          >
            Blindaje Constructivo
          </p>

          <p className="servicio-desc">
            Estrategia que unifica gestión de proyecto, construcción, control de calidad y presupuesto.
            Te apoyamos a tener certeza en tu inversión.
          </p>
        </div>

      </div>
    </section>
  );
}
