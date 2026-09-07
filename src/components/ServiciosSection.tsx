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
            Análisis de plan inicial.<br />
          Damos el primer paso para materializar tu ida con seguridad.
          Alineamos investigación, análisis, solución y diseño a tu contexto, prioridades, objetivos y viabilidad.
          
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
            Diseño arquitectónico e interiorismo personalizado.<br />
            Nos enfocamos en la creación de átmosferas: especialistas en diseño orientado a mejorar tu experiencia en el espacio.
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
            Diseño Integral
          </p>

          <p className="servicio-desc">
            Estrategia que unifica investigación, análisis, diseño, presupuesto, función y construcción.
            Diseñamos y desarrollamos tus sueños de 0 a 100.
          </p>
        </div>

      </div>
    </section>
  );
}
