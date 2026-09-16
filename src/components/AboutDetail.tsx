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
        
          ID·A nació en el Caribe con el sueño de crear espacios que conectaran contigo, que ayudaran a percibir
          nuestra sensibilidad innata, espacios que contaran historias, que reflejaran análisis minucioso, observación detallada y una filosofía de diseño congruente. <br/><br/>
Nos fuimos especializando en desarrollar arquitectura profundamente personal, con un enfoque iterativo y alineado
con lo más importante: Hacerlo realidad. <br/><br/>
          A lo largo de nuestra historia co-creando id·as, diseñamos una metodología de desarrollo arquitectónico preciso 
          que también nos permite trabajar como consultores en diseño y construcción: entender cada parámetro y etapa con 
          observación, atención al detalle, viabilidad, optimización de capital, anticipación y reducción de imprevistos,
          y análisis puntual de cada hito del proceso para lograr tus objetivos —siempre con el mismo fundamento:
          conectar, destacar y crear una experiencia visualmente significativa y profundamente humana. <br/><br/>
          Éste sistema nos permitió ampliar nuestro mercado, acompañando las id·as y proyectos de colegas, despachos y acompañando obras.<br/><br/>
Nos apasiona la exploración de nuevas perspectivas, el diálogo abierto, aprender y perfeccionar; 
agradecemos poder colaborar con especialistas que están tan comprometidos con su trabajo como nosotros.<br/><br/>
Cr·amos junto a ti la <em>certeza</em>  de un proyecto bien logrado, mediante un proceso agradable, cohesivo y 
basado en decisiones conscientes, rigurosas y con el compromiso de hacer un trabajo del que estemos orgullosos.
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