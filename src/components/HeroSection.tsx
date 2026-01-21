import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {/* Fondo animado */}
     
   

      {/* Contenido */}
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido a ID·A Studio</h1>

        <p className="hero-text">
          Nos especializamos en transformar ideas en
          soluciones visuales y habitables de alta calidad espacial.
          <br />
          Nuestra misión es co-crear tus sueños a través de arquitectura.
          Diseñando espacios "tailor made" coherentes y sensoriales.
          <br />
        </p>

        <br />

        <button
          className="hero-secondary-btn"
          onClick={() => navigate("/about-detail")}
        >
          Leer más...
        </button>
      </div>
    </motion.section>
  );
}