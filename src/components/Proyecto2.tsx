import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios2.png";

export default function Proyecto2() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-left">
        <h2 className="about-title">Análisis integral del Sitio.</h2>

        <p className="about-text">
          Este servicio se basa en una investigación integral que incluye: Investigación y análisis de la regulación del sitio, sus restricciones y códigos<br /> 
          Análisis bioclimático, topográfico y estudios preliminares según sea el caso, proporcionando una lectura integral del entorno que te permita sacar el máximo beneficio de las carácterísticas de tu emplazamiento.<br />
          Gracias a esta información, tu proyecto se desarrolla a partir de decisiones fundamentadas en las condiciones reales del lugar.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto2" className="about-image" />
      </div>
    </motion.div>
  );
}
