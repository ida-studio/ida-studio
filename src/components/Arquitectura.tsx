import "./AboutDetail.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/servicios2.png";

export default function Arquitectura() {
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

      {/* Texto */}
      <div className="about-left">
        <h2 className="about-title">Arquitectura Integral</h2>
        <p className="about-text">
          <strong>Arquitectura con sentido.</strong> Nos apasiona co-crear e integrar tus id·as con armonía para materializarlas en un proyecto coherente y bien hecho.
          <br /><br />

          Creamos con un enfoque conceptual atemporal, capaz de mantenerse vigente mediante espacios que evolucionan. Abogamos por diseño inteligente sobre la tendencia fugaz; valoramos la arquitectura memorable, que pertenece y respeta al sitio.
          <br /><br />

          Especialistas creando atmósferas y arquitectura envolvente que promueve la estimulación sensorial. Sabemos la importancia de los procesos que experimentamos en el cerebro al habitar un espacio y cómo trascienden en como nos sentimos, comportamos y vivimos.
          <br /><br />

          Diseñamos detalles que interactuan, remates visuales, materiales amables y ambientes que catalizan mejoras.
          <br /><br />

          Arquitectura Integral está orientado a los clientes que buscan <em>certidumbre</em>.
          <br /><br />

          Ser responsables de la dirección creativa y el proyecto ejecutivo nos permite optimizar tu inversión en cada decisión y etapa. Así garantizamos que no habrá sorpresas en el presupuesto autorizado.
          <br /><br />

        
          <strong><em>Un proyecto bien dirigido no se vive con ansiedad, se disfruta con confianza.</em></strong>
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio arquitectura" className="about-image" />
      </div>
    </motion.div>
  );
}
