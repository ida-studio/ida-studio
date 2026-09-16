import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios3.png";

export default function Proyecto3() {
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
        <h2 className="about-title">Desarrollo BIM.</h2>

        <p className="about-text">
          
          <strong>Soluciones y estabilidad en tu proceso constructivo.</strong> Centralizamos el modelado BIM para soluciones puntuales: Agilizar y anticipar construyendo un modelo digital inteligente que integra geometría, información técnica y criterios constructivos.
          <br /><br />

          Éste sistema nos permite coordinar arquitectura, estructura, instalaciones, administración y presupuesto en un solo entorno.
          <br /><br />

          A lo largo del proyecto, el modelo facilita la detección de interferencias, la toma de decisiones informadas, la optimización de costos y la generación de documentación precisa para obra, asegurando coherencia entre diseño, ejecución y futuro mantenimiento.<br /><br />
          <br /><br />

<strong><em> Nos Adaptamos a tus necesidades puntuales, con una metodología que permite colaborar de forma simultánea, clara y eficiente </em></strong>


        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto3" className="about-image" />
      </div>
    </motion.div>
  );
}