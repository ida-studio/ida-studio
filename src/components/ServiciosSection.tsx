import "./ServiciosSection.css";
import { useNavigate } from "react-router-dom";

import servicios1 from "../assets/servicios1.png";
import servicios2 from "../assets/servicios2.png";
import servicios3 from "../assets/servicios3.png";

export default function ServiciosSection() {
  const navigate = useNavigate();

  return (
    <section className="servicios-section" id="servicios">
      <h2 className="servicios-title">Nuestros servicios</h2>

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
            Kit de Herramientas Digitales
          </p>

          <p className="servicio-desc">
            Soluciones digitales que elevan tu experiencia y proceso creativo.
            Optimizamos la comunicación del arquitecto o diseñador para su construcción.
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
            Servicio enfocado en el desarrollo de la etapa creativa y conceptual del proyecto, integrando anteproyecto, programa de necesidades, iluminación e interiorismo para definir una propuesta espacial coherente, funcional y alineada con la identidad del usuario, sin incluir la fase ejecutiva ni constructiva.
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
            Estrategias espaciales que unifican investigación, análisis, concepto, estética, función y bienestar.
            Diseñamos y desarrollamos proyectos ejecutivos listos para construir.
          </p>
        </div>

      </div>
    </section>
  );
}
