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
          Arquitectura con sentido: A través de un taller arquitectónico colaborativo, reunimos perspectivas para abordar proyectos integrándolos armoniosamente en todas sus fases.
          <br /><br />

          Abogamos por un enfoque conceptual atemporal, capaz de mantenerse vigente mediante un diseño que evoluciona. Preferimos la sobriedad inteligente sobre la tendencia fugaz; valoramos la arquitectura memorable, que pertenece y respeta al sitio.
          <br /><br />

          Nos especializamos en la creación de atmósferas personalizadas que promueven la estimulación sensorial. Los procesos que vivimos en el cerebro al habitar un espacio trascienden por completo cómo nos sentimos, nos comportamos y las decisiones que tomamos.
          <br /><br />

          Por eso diseñamos espacios que estimulan: detalles que comunican, remates visuales, materiales amables y ambientes que catalizan una mejor forma de interactuar.
          <br /><br />

          El servicio de Arquitectura Integral está orientado a los clientes que buscan <em>certidumbre</em>.
          <br /><br />

          Al ser responsables de la dirección creativa y el diseño ejecutivo del proyecto, coordinamos digitalmente todas sus etapas. Diseñamos, además, con herramientas que nos permiten medir y optimizar tu inversión en cada etapa del proceso y en cada decisión. Así garantizamos que no habrá sorpresas en el presupuesto autorizado.
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
