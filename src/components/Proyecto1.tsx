import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios1.png";

export default function Proyecto1() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-left">
        <h2 className="about-title">Consultoría personalizada.</h2>
        
        <p className="about-text">
        No importa la etapa del proyecto en la que te encuentres, si ya identificaste que hay algo optimizable;
        Estamos aquí para lograr objetivos:
        • Análisis inicial: viabilidad, normativa, presupuesto y objetivos del cliente.
• Conceptualización: estrategia de diseño, criterios espaciales, técnicos y estéticos.
• Anteproyecto: layout, volumetría, materialidad y toma de decisiciones por medio de ingenieria de valor.
• Desarrollo ejecutivo: coordinación arquitectónica, constructiva e instalaciones.
• Optimización técnica: sistemas constructivos, eficiencia, costos y tiempos.
• Documentación: planos claros para obra y licencias.
• Acompañamiento en obra: asesoría técnica, ajustes y control de calidad.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="Proyecto 1" className="about-image" />
      </div>
    </motion.div>
  );
}
