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

          Nuestra id·a consiste en concebir ambientes a través de neurociencia: 
          analizando cómo los estímulos sensoriales del entorno afectan el cerebro, 
          las emociones y el comportamiento humano. El objetivo es crear ambientes más 
          saludables, productivos y cómodos.<br/><br/>
          
          Creemos en el poder de la arquitectura como herramienta para catalizar mejoras 
          en los entornos que habitamos; que reflejen la visión de cada cliente, 
          resaltando siempre el verdadero propósito detrás de cada espacio. Nos hemos 
          distinguido por una filosofía que une el análisis minucioso, la observación 
          detallada y un profundo compromiso.<br/><br/>

          Aspiramos a generar mejoras tangibles en la 
          calidad de vida y en la experiencia cotidiana. Nuestra meta es entregar algo que 
          el cliente no sabía que necesitaba, pero reconoce inmediatamente.<br/><br/>

          A través de un taller arquitectónico colaborativo, reunimos perspectivas para 
          abordar proyectos residenciales, comerciales y hoteleros, integrándolos 
          armoniosamente en su entorno y en su tiempo; cada proyecto dialoga con su 
          contexto y generando vínculos. Abogamos por un enfoque atemporal, capaz de 
          mantenerse vigente mediante un diseño que evoluciona; preferimos la sobriedad 
          inteligente sobre la tendencia fugaz; valoramos la arquitectura que pertenece al 
          sitio, no la que compite con él.<br/><br/>

          Reconocemos que la complejidad actual demanda mucho más que talento individual: 
          requiere pensamiento científico, diseño circular y la capacidad de integrar 
          múltiples disciplinas. Por ello, trabajamos en conjunto con expertos en cada área 
          desde ingenieros, científicos, empresarios y colegas arquitectos para responder 
          a los desafíos contemporáneos, guiados por los principios de sostenibilidad y en 
          alineación a los Objetivos de Desarrollo Sostenible de la ONU.<br/><br/>

          Cuestionamos, experimentamos 
          y expandimos los límites del diseño para ofrecer a nuestros clientes claridad, 
          herramientas y visión en cada etapa del proceso.<br/><br/>

          Como tu compañero de pensamiento, damos forma a tus ideas mediante experiencias 
          espaciales que combinan tecnología, creatividad y propósito.<br/><br/>

          En cada proyecto buscamos no solo superar expectativas, sino crear espacios que sean 
          visualmente impactantes, funcionales, significativos y profundamente humanos. 
          Tomamos tus ideas y las acercamos un paso más a la realidad mediante decisiones 
          conscientes y rigurosas, siempre con el compromiso de entregar un proyecto del que 
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