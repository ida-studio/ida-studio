import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios2.png";

export default function Proyecto2() {
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
        <h2 className="about-title">Arquitectura de Valor.</h2>

        <p className="about-text">
          <strong>Proyectos construibles al costo ideal de tus necesidades.</strong> Quienes construimos sabemos el impacto en los costos de obra de un diseño mal resuelto o sin un análisis integral. <br /><br />

En Quintana Roo, el 70% de las obras proyectadas están detenidas por falta de liquidez y encarecimiento de materiales.
Al panorama general se suma un financiamiento cada vez más restringido en México y para muchos proyectos el resultado son obras que se frenan, 
se posponen, se recortan arbitrariamente y demasiado tarde. 
Esas decisiones siempre tienen consecuencias en el tiempo, la calidad o en la rentabilidad de la construcción. <br /><br />

La arquitectura de valor es la alternativa: Condensamos y revisamos el proyecto cohesivamente y realizamos un reporte desde un punto de vista asertivo y congruente, 
te proponemos qué ajustar y qué implementar. <br /><br /> 
Éste informe te permite un lectura integral que te facilita mejorar tus procesos y corregir de raíz el problema.
Gracias a esta información, tu obra se desarrolla a partir de decisiones fundamentadas, aplicación de medidas para maximizar recursos y sistemas, manteniendo funcionalidad, calidad y esencia. <br />

El tiempo es tu mejor aliado: Un sobrecosto del 5% detectado en el mes 2 puede corregirse, pero el mismo detectado en el mes 6 ya comprometió la rentabilidad.<br /><br /> 

Pensando no solo en que sea más fácil de ejecutar, sino también de mantener, siempre de la mano de la tecnología y la construcción responsable. 
Nuestro enfoque no es solo el presupuesto: es que entregues un proyecto que protege a tu cliente sin comprometer su calidad ni su diseño.<br /><br />

<strong><em>Rescatamos tu proyecto antes de que se detenga.</em></strong>

        </p>
      </div>

      <div className="about-right">
        <img src={IMG} alt="proyecto2" className="about-image" />
      </div>
    </motion.div>
  );
}
