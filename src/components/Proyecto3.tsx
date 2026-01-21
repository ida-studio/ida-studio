import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios3.png";

export default function Proyecto3() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-left">
        <h2 className="about-title">Desarrollo de modelo BIM.</h2>

        <p className="about-text">
          El modelado BIM consiste en desarrollar un modelo digital inteligente que integra geometría, información técnica y criterios constructivos, permitiendo coordinar arquitectura, estructura e instalaciones en un solo entorno. A lo largo del proyecto, el modelo facilita la detección de interferencias, la toma de decisiones informadas, la optimización de costos y la generación de documentación precisa para obra, asegurando coherencia entre diseño, ejecución y mantenimiento.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto3" className="about-image" />
      </div>
    </motion.div>
  );
}
