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
            Herramientas Digitales
          </p>

          <p className="servicio-desc">
            Soluciones que elevan tu proceso creativo.<br />
            Optimiza la comunicación Arquitecto - Construcción.
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
            Arquitectura
          </p>

          <p className="servicio-desc">
            Diseño arquitectónico e interiorismo personalizado.<br />
            Nos especializamos en la creación de átmosferas que estén conectadas con el usuario y enfocamos el diseño en mejorar tu experiencia en el espacio.
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
            Estrategia de diseño que unifica investigación, análisis, concepto, estética, función y presupuesto.
            Diseñamos y desarrollamos proyectos ejecutivos listos para construir.
          </p>
        </div>

      </div>
    </section>
  );
}
