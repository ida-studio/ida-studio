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
        <h2 className="about-title">Proyecto 02</h2>

        <p className="about-text">
          Aquí va la descripción del Proyecto 02.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto2" className="about-image" />
      </div>
    </motion.div>
  );
}
