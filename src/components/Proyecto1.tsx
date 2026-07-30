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
        No importa la etapa del proyecto en la que te encuentres, si ya identificaste que quieres optimizar algo;
        estamos aquí para acompañarte a establecer metas, transitar el proceso y concretar tus propósitos.<br />
• Análisis inicial: Viabilidad, normativa, presupuesto y objetivos del cliente.<br />
• Conceptualización: estrategia de diseño, criterios espaciales, técnicos y estéticos.<br />
• Anteproyecto: Layout, volumetría, materialidad<br />
• Ingenieria de valor: Análisis profundo y aplicación de medidas para maximizar recursos y disminuir costos, manteniendo funcionalidad, calidad y confiabilidad.<br />
• Desarrollo ejecutivo: Coordinación arquitectónica, constructiva e instalaciones.<br />
• Optimización técnica: Sistemas constructivos, eficiencia, costos y tiempos.<br />
• Documentación: Licencias, permisos y planimetría.<br />
• Acompañamiento en obra: Asesoría técnica, ajustes y control de calidad.<br />
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="Proyecto 1" className="about-image" />
      </div>
    </motion.div>
  );
}
