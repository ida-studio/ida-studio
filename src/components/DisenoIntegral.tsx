import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios3.png";

export default function DisenoIntegral() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Texto */}
      <div className="about-left">
        <h2 className="about-title">Diseño Integral</h2>
        <p className="about-text">
          Aquí va tu texto detallado para Diseño Integral.
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio diseño integral" className="about-image" />
      </div>
    </motion.div>
  );
}
