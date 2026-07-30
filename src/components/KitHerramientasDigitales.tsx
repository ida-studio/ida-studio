import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios2.png";

export default function KitHerramientasDigitales() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-left">
        <h2 className="about-title">Kit de Herramientas Digitales</h2>
        <p className="about-text">
        Herramientas orientadas a despachos y constructores, aligeramos tu carga de trabajo y optimizamos tus resultados.
            Nutrimos tu proceso desarrollando paquetes de planimetría e información técnica para tu proyecto. Orientado a mejorar la comunicación arquitecto - construcción y viceversa. <br></br> 
            Éste servicio se adapta a tus necesidades puntuales y nuestra metodología nos permite colaborar de manera simultánea, clara y eficiente, enfocandonos en tu meta particular.
        
          
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="servicio" className="about-image" />
      </div>
    </motion.div>
  );
}
