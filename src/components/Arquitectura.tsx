import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios2.png";

export default function Arquitectura() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Texto */}
      <div className="about-left">
        <h2 className="about-title">Arquitectura</h2>
        <p className="about-text">
          
          Aspiramos a generar mejoras tangibles en la calidad de vida y en la experiencia cotidiana.<br /> <br /> 
          Tenemos la certeza de que el entorno habitado afecta directamente la estructura cerebral y nuestro comportamiento.<br /> 
          Es por eso que promovemos y nos especializamos en el uso de ciencias cognitivas y neurologícas para mejorar el diseño de los ambientes construidos.<br />
          El servicio  de Arquitectura está enfocado en el desarrollo creativo y conceptual del proyecto a partir de neuroarquitectura, integrando análisis espacial, contextual, programa de necesidades, iluminación y estilo para definir una propuesta coherente, funcional y alineada con las necesidades puntuales del usuario hasta el anteproyecto para su futuro desarrollo ejecutivo.
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio arquitectura" className="about-image" />
      </div>
    </motion.div>
  );
}
