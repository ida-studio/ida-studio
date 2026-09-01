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
        
          ID·A nació en el Caribe con el sueño de crear atmósferas que conectaran contigo, que ayudaran a percibir
          nuestra sensibilidad innata, espacios que contaran historias, que reflejaran análisis minucioso, observación detallada y una filosofía de atención al detalle. <br/><br/>
Así nos fuimos especializando en desarrollar arquitectura profundamente personal, con un enfoque iterativo y alineado
con lo más importante: Hacerlo realidad. <br/><br/>
          A lo largo de nuestra historia co-creando id·as, diseñamos una metodología de desarrollo arquitectónico preciso 
          que también nos permite trabajar como consultores en diseño y construcción: entender cada parámetro y etapa con 
          observación detallada, viabilidad, optimización de capital, anticipación y reducción de imprevistos,
          y análisis puntual de cada hito del proceso para lograr tus objetivos —siempre con el mismo fundamento:
          conectar, destacar y crear una experiencia visualmente significativa y profundamente humana. <br/><br/>
          Esta metodología nos permitió ampliar nuestro mercado, para acompañar también las id·as y proyectos de otros colegas y despachos.<br/><br/>
Nos apasiona la exploración de nuevas perspectivas, el diálogo abierto, aprender y perfeccionar; 
estamos agradecidos de poder aprender y colaborar con especialistas que aman su trabajo tanto como nosotros.<br/><br/>
Cr·amos junto a ti la <em>certeza</em>  de un proyecto bien logrado, mediante un proceso agradable, paciente y 
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