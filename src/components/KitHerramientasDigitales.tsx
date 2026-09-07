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
       Aligeramos el proceso inicial y toma de decisiones pre desarrollo de diseño y construcción mediante
      una investigación integral que incluye: Investigación y análisis de la regulación del sitio, sus restricciones y códigos<br></br>
          Análisis bioclimático, topográfico y estudios preliminares según sea el caso, proporcionando una lectura integral del entorno que te permita sacar el máximo beneficio de las carácterísticas de tu emplazamiento.<br />
          Gracias a esta información, tu proyecto se desarrolla a partir de decisiones fundamentadas en la viabilidad y condiciones reales del lugar.
        . <br></br>
            Finalmente desarrollamos • Conceptualización: estrategia de diseño, criterios espaciales, técnicos y estéticos y un plan financiero alineado con tus objetivos, para que tomes decisiones consientes y alineadas con tu propósito. <br></br>
<br />
            Éste servicio se adapta a tus necesidades puntuales y nuestra metodología nos permite colaborar de manera simultánea, clara y eficiente.
        
          
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="servicio" className="about-image" />
      </div>
    </motion.div>
  );
}
