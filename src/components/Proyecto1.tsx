import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios1.png";

export default function Proyecto1() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <button
        className="subpage-back-btn"
        onClick={() => navigate("/")}
        aria-label="Regresar al inicio"
      >
        ←
      </button>

      <div className="about-left">
        <h2 className="about-title">Consultoría personalizada.</h2>
        
        <p className="about-text">
        No importa la etapa del proyecto en la que te encuentres, si ya identificaste que quieres optimizar algo;
        estamos aquí para acompañarte a establecer metas, transitar el proceso y concretar tus propósitos.<br />
• Análisis inicial: Viabilidad, normativa, presupuesto y objetivos.<br />
• Conceptualización: estrategia de diseño, criterios espaciales, técnicos y estéticos.<br />
• Anteproyecto: Zonificación, volumetría, materialidad<br />
• Arquitectura Ejecutiva: Planimetría arquitectónica y/o de especialidad-disciplina requerida. <br />
• Desarrollo ejecutivo: Coordinación arquitectónica, estructural, constructiva y de instalaciones.<br />
• Optimización técnica: Eficiencia de sistemas constructivos, materiales, ingenierias y tiempos.<br />
• Documentación: Licencias, permisos y gestiones administrativas.<br />
• Acompañamiento en obra: Asesoría técnica, ajustes y control de calidad.<br />

<strong><em>Cada etapa puede ser contratada individualmente o según el criterio requerido en la consultoría.</em></strong>

        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="Proyecto 1" className="about-image" />
      </div>
    </motion.div>
  );
}
