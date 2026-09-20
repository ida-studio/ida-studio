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
        
          ID·A nació en el Caribe con el sueño de crear espacios que conectaran contigo, que contaran historias, que reflejaran análisis minucioso, observación detallada y una experiencia visualmente significativa. <br/><br/>
Nos especializamos en desarrollar arquitectura profundamente personal, con un enfoque iterativo y alineado
con lo más importante: Hacerlo realidad. <br/><br/>
          A lo largo de nuestra interacción co-creando id·as, desarrollamos una metodología de diseño arquitectónico preciso 
          que también nos permite trabajar como consultores en construcción: entender cada parámetro y etapa con orden,
          observación, atención al detalle, viabilidad, optimización de capital, anticipación -reducción de imprevistos,
          y análisis puntual de cada hito del proceso para lograr tus objetivos —siempre con la filosofía de
          destacar y conectar para percibir la sensibilidad innata que llega cuando habitamos <br/><br/>
          Éste sistema nos permitió ampliar nuestro portafolio de servicios, acompañando los proyectos y las id·as de colegas constructores, arquitectos, despachos y obras.<br/><br/>
Nos apasiona la exploración de nuevas perspectivas, el diálogo abierto, aprender y perfeccionar; 
estamos orgullosos y agradecidos de hacer equipo con especialistas comprometidos y que aman su trabajo como nosotros.<br/><br/>
Cr·amos junto a ti la <em>certeza</em>  de un proyecto bien logrado, mediante un proceso agradable, cohesivo y 
cimentado en decisiones conscientes, rigurosas y con el compromiso de hacer un trabajo que disfrutemos, pero sobre todo del que estemos orgullosos.
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