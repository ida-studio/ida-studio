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
      <h2 className="servicios-title">Proyectos</h2>

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
            Consultoría personalizada.
          </p>

          <p className="servicio-desc">
            Acompañamiento estratégico y personalizado. Alineando tus objetivos
            con el diseño, técnica y viabilidad constructiva. Una vez que
            identicas el área que te gustaría optimizar, te guiamos paso a paso.
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
            Análisis integral del sitio.
          </p>

          <p className="servicio-desc">
            Establecemos las bases del proyecto mediante el análisis profundo del
            sitio, permitiendo que tomes decisiones de diseño coherentes,
            eficientes y alineadas con las condiciones reales del entorno.
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
            Modelado BIM
          </p>

          <p className="servicio-desc">
            Metodología que centraliza el diseño arquitectónico en un modelo
            digital con información técnica y constructiva integrada. Permite
            coordinar disciplinas, anticipar conflictos y optimizar el proceso
            de diseño a obra.
          </p>
        </div>
      </div>
    </section>
  );
}
