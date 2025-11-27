// ProyectosSection.tsx
import "./ServiciosSection.css"; 
import { useNavigate } from "react-router-dom";

import servicios1 from "../assets/servicios1.png";
import servicios2 from "../assets/servicios2.png";
import servicios3 from "../assets/servicios3.png";

export default function ProyectosSection() {
  const navigate = useNavigate();

  return (
    <section className="servicios-section">
      <h2 className="servicios-title">Proyectos</h2>

      <div className="servicios-grid">

        {/* Proyecto 1 */}
        <div className="servicio-card">
          <img src={servicios1} alt="proyecto 1" />
          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-1")}
          >
            Proyecto 01
          </p>
          <p className="servicio-desc">
            Descripción breve del proyecto 01.
          </p>
        </div>

        {/* Proyecto 2 */}
        <div className="servicio-card">
          <img src={servicios2} alt="proyecto 2" />
          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-2")}
          >
            Proyecto 02
          </p>
          <p className="servicio-desc">
            Descripción breve del proyecto 02.
          </p>
        </div>

        {/* Proyecto 3 */}
        <div className="servicio-card">
          <img src={servicios3} alt="proyecto 3" />
          <p
            className="servicio-label"
            onClick={() => navigate("/proyecto-3")}
          >
            Proyecto 03
          </p>
          <p className="servicio-desc">
            Descripción breve del proyecto 03.
          </p>
        </div>

      </div>
    </section>
  );
}
