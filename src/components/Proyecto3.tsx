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
        <h2 className="about-title">Proyecto 03</h2>

        <p className="about-text">
          Aquí va la descripción del Proyecto 03.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto3" className="about-image" />
      </div>
    </motion.div>
  );
}
