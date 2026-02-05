import "./AboutDetail.css";
import { motion } from "framer-motion";
import ABOUT1 from "../assets/ABOUT1.jpg"; 

export default function AboutDetail() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.4, ease: "easeOut" }}
    >
      {/* Columna izquierda */}
      <div className="about-left">
        <h2 className="about-title">Quiénes somos</h2>

        <p className="about-text">
        
          Enfocamos nuestra práctica en el diálogo abierto, el diseño iterativo y la 
          exploración de nuevas perspectivas.<br/><br/>

          ID·A consiste en concebir ambientes a través de neurociencia: 
          analizando cómo los estímulos sensoriales del entorno afectan el cerebro, 
          las emociones y el comportamiento humano. <br/>
          El objetivo es crear ambientes más saludables, productivos y cómodos.<br/><br/>
          
          Creemos en el poder de la arquitectura como herramienta para catalizar mejoras 
          en nosotros y en el entorno; que además de ser espacios con propósito reflejen la visión del cliente.<br/><br/>
          Nos distinguimos por el análisis minucioso, la observación 
          detallada y una filosofía de profundo compromiso.<br/><br/>
        
          En cada trabajo buscamos destacar, crear espacios
          visualmente impactantes, funcionales, significativos y profundamente humanos. 
          Tomamos tus ideas y las volvemos realidad mediante decisiones 
          conscientes y rigurosas, con el compromiso de crear un proyecto del que 
          estemos orgullosos.
        </p>
      </div>

      {/* Columna derecha */}
      <div className="about-right">
        <img
          src={ABOUT1}
          alt="about detail"
          className="about-image"
        />
      </div>
    </motion.div>
  );
}