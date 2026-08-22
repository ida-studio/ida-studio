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
        <h2 className="about-title">Kit de Herramientas Digitales</h2>
        <p className="about-text">
        Servicio desarrollado especialmente para despachos y constructores: Aligeramos tu carga de trabajo y optimizamos tus resultados. <br></br>
            Nutrimos tu proceso desarrollando paquetes de planimetría e información técnica para tu proyecto. <br></br>
            La finalidad es optimizar la comunicación arquitecto - construcción y viceversa para lograr el resultado disminuyendo interferencias, atrasos, errores de ejecución y previendo dificultades. <br></br> 
            Éste servicio se adapta a tus necesidades puntuales y nuestra metodología nos permite colaborar de manera simultánea, clara y eficiente, enfocandonos en tu meta particular.
        
          
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="servicio" className="about-image" />
      </div>
    </motion.div>
  );
}
