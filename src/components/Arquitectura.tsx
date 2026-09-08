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
        <h2 className="about-title">Arquitectura</h2>
        <p className="about-text">
          Lo que trasciende no es la función, es la emoción que genera.
          Diseño espacial enfocado en mejorar la experiencia humana con el entorno. <br></br>
Nos especializamos en la creación de atmósferas que promueven la estimulación cognitiva.<br></br>

Los procesos que experimentamos en el cerebro al habitar un espacio trascienden por completo cómo nos sentimos, nos comportamos y las decisiones que tomamos; necesitamos espacios que nos estimulen sensorialmente: detalles inesperados, remates visuales, diseños amables con la naturaleza y que catalicen mejoras en como interactuamos en la sociedad y con el entorno.<br></br>

El servicio de Arquitectura Integral, está orientado a los clientes que buscan CERTIDUMBRE. Al llevar la dirección creativa y el diseño ejecutivo del proyecto, construimos y coordinamos digitalmente todas las etapas de ésta manera se garantiza que no habra ni extras en el presupuesto autorizado, además de contar con herramientas que nos permiten ir midiendo y optimizando tu inversión durante el proceso de diseño.<br></br>

        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio arquitectura" className="about-image" />
      </div>
    </motion.div>
  );
}
