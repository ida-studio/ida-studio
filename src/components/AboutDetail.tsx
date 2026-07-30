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
        
          Somos un despacho en el <s>Caribe</s> paraiso, especializado en diseño arquitectónico y consultoría en construcción, 
          con un enfoque iterativo y profundamente personal. <br/><br/>

          Fundado por la Arq. Fernanda, ID·A nace con el sueño de crear atmósferas que interactúen con nosotros 
          de tal forma que podamos conectar con nuestra sensibilidad innata, que mejoren nuestro día a día, que cuenten historias, 
          que reflejen análisis minucioso, observación detallada y una filosofía de profundo compromiso. <br/><br/>
          Transitamos la vida una sola vez; nuestro objetivo en cada proyecto es conectar, destacar y crear una experiencia visualmente impactante, significativa, memorable y profundamente humana.<br/><br/>
          
          Nos apasiona la exploración de nuevas perspectivas, el diálogo abierto, aprender, optimizar y perfeccionar;
          estamos agradecidos de poder colaborar de la mano con especialistas que aman su trabajo tanto como nosotros.<br/><br/>
        
          Tomamos tus id·as y las cr·amos junto a tí mediante un proceso agradable, paciente y sobre todo, basado en decisiones conscientes, rigurosas y con el compromiso 
          de hacer un trabajo del que estemos orgullosos.

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