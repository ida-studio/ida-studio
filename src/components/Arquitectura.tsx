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
          Aquí va tu texto detallado para Arquitectura.
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio arquitectura" className="about-image" />
      </div>
    </motion.div>
  );
}
