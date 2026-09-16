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
          
           <strong>Certeza en tu inversión.</strong> Servicio diseñado para clientes que priorizan su paz: <br></br>
          Nos responsabilizamos de llevar a cabo todo el proceso del proyecto. Evaluamos desde el terreno que más te conviene, auditoría espacial, arquitectura, interiorismo, trámites, licencias, gestión de constructor y contratistas, hasta la supervisión de obra garantizando calidad, control de presupuesto aprobado y concretamos el proyecto acorde a tu diseño y objetivos. <br></br>
          La finalidad de que puedas obtener el mejor resultado de tu inversión. <br></br>
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
