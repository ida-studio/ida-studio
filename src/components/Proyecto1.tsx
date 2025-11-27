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
        <h2 className="about-title">Proyecto 1</h2>
        <p className="about-text">
          Aquí va la descripción detallada del Proyecto 1.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="Proyecto 1" className="about-image" />
      </div>
    </motion.div>
  );
}
