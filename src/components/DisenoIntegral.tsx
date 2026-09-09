import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios3.png";

export default function DisenoIntegral() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <button
        className="subpage-back-btn"
        onClick={() => navigate("/")}
        aria-label="Regresar al inicio"
      >
        ←
      </button>

      {/* Texto */}
      <div className="about-left">
        <h2 className="about-title">Blindaje Constructivo</h2>
        <p className="about-text">
          
          El servicio está pensando en clientes que prefieren llevar a cabo todo el proceso del proyecto con nosotros. Evaluamos desde el terreno que más te conviene, presupuesto, concepto, diseño, planos, trámites, elección de constructor o contratistas y supervisión de obra hasta concretar tus objetivos. <br></br>
          Ésto con la finalidad de que puedas obtener el mejor resultado de tu inversión. <br></br>
          Avanzamos juntos alineados a tu propósito y tiempo.<br></br>
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio diseño integral" className="about-image" />
      </div>
    </motion.div>
  );
}
