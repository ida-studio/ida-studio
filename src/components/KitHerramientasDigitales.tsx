import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios2.png";

export default function KitHerramientasDigitales() {
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

      <div className="about-left">
        <h2 className="about-title">Auditoría Espacial</h2>
        <p className="about-text">
          <strong>Inversión inteligente inicial.</strong> Antes de comprometerte con un proyecto de diseño o construcción,
          tomar decisiones mediante una investigación integral puede ahorrarte tiempo, dinero y replanteamientos innecesarios.<br /><br />
          Por eso aligeramos el proceso inicial mediante este servicio que incluye:<br />
          • Investigación y análisis de la regulación del sitio, sus restricciones y códigos.<br />
          • Análisis bioclimático y estudios preliminares según sea el caso — una lectura completa del entorno que te permite sacar el máximo beneficio de las características de tu emplazamiento.<br /><br />
          Con esta información, tu proyecto parte de decisiones fundamentadas en la viabilidad y condiciones reales del lugar.<br /><br />
          Finalmente, te proponemos:<br />
          • Conceptualización: estrategia recomendada de diseño y criterios espaciales, con base en los resultados de los dos primeros puntos.<br />
          • Plan financiero alineado a tu presupuesto — para que tomes decisiones conscientes y con propósito.<br /><br />
          Con esta base, partes con información sólida para establecer tus objetivos — sea cual sea el equipo de diseño o construcción con el que decidas continuar.
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="servicio" className="about-image" />
      </div>
    </motion.div>
  );
}
