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
        Estamos aquí para acompañarte durante todo el proceso y lograr tus objetivos:<br />
• Análisis inicial: Viabilidad, normativa, presupuesto y objetivos del cliente.<br />
• Conceptualización: estrategia de diseño, criterios espaciales, técnicos y estéticos.<br />
• Anteproyecto: Layout, volumetría, materialidad y toma de decisiciones por medio de ingenieria de valor.<br />
• Desarrollo ejecutivo: Coordinación arquitectónica, constructiva e instalaciones.<br />
• Optimización técnica: Sistemas constructivos, eficiencia, costos y tiempos.<br />
• Documentación: Planimetría clara para obra y licencias.<br />
• Acompañamiento en obra: Asesoría técnica, ajustes y control de calidad.<br />
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="Proyecto 1" className="about-image" />
      </div>
    </motion.div>
  );
}
