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
        Soluciones digitales que elevan tu experiencia y proceso creativo.
            Orientadas a firmas, despachos y constructores, aligeramos tu carga de trabajo y optimizamos tus resultados, por medio de desarrollo de planimetría para tú diseño. Optimizamos la comunicación del arquitecto o diseñador para su construcción, desarrollamos los planos constructivos de la especialidad que requieras para tus proyectos ejecutivos. Nuestro servicio se adapta a las necesidades puntuales y nuestra metodología de trabajo nos permite colaborar de manera clara y eficientes. Reduciendo costos y tiempos.
        
        Sabemos que nuestros colegas buscan siempre optimizar sus servicios, por lo que desarrollamos planimetría para el diseño. Optimizamos la comunicación del artista para su construcción, hacemos planos constructivos para firmas de diseño, arquitectos e interioristas que buscan optimizar el desarrollo de sus proyectos ejecutivos. Nuestro servicio se adapta a las necesidades de su proyecto y nuestra metodología de trabajo nos permite expresar su diseño en planos constructivos claros y eficientes. 
        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="servicio" className="about-image" />
      </div>
    </motion.div>
  );
}
