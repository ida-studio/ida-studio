// ProyectosSection.tsx
import "./ServiciosSection.css";
import { useNavigate } from "react-router-dom";

import servicios1 from "../assets/servicios1.png";
import servicios2 from "../assets/servicios2.png";
import servicios3 from "../assets/servicios3.png";

export default function ProyectosSection() {
  const navigate = useNavigate();

  return (
    <section className="servicios-section" id="proyectos">
      <h2 className="servicios-title">The Chess-Board</h2>

      <div className="servicios-grid">
        {/* Proyecto 1 */}
        <div className="servicio-card">
          <div className="servicio-img-wrapper">
            <img src={servicios1} alt="proyecto 1" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-1")}
          >
            Consultoría Personalizada.
          </p>

          <p className="servicio-desc">
            Acompañamiento estratégico y personalizado. <br />
            Una vez que identificas el área que te gustaría optimizar, te guiamos paso a paso. <br />
            
          </p>
        </div>

        {/* Proyecto 2 */}
        <div className="servicio-card">
          <div className="servicio-img-wrapper">
            <img src={servicios2} alt="proyecto 2" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-2")}
          >
            Análisis de Valor.
          </p>

          <p className="servicio-desc">
            Establecemos soluciones para proyectos en proceso mediante análisis profundo; facilitando toma de decisiones coherentes
            y alineadas con el propósito de finalizar tu proyecto con éxito y concretar tu inversión.
          </p>
        </div>

        {/* Proyecto 3 */}
        <div className="servicio-card">
          <div className="servicio-img-wrapper">
            <img src={servicios3} alt="proyecto 3" />
          </div>

          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-3")}
          >
            Desarrollo BIM
          </p>

          <p className="servicio-desc">
            Diseñamos ésta metodología para apoyar a constructores trabajando en proyectos desafiantes.
            <br></br>
            Coordinamos disciplinas, anticipamos conflictos y optimizamos procesos de construcción.
          </p>
        </div>
      </div>
    </section>
  );
}
