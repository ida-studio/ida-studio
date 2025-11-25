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
      transition={{ duration: 3, ease: "easeOut" }} // ← FADE-IN LENTO
    >
      <h1 className="hero-title">Bienvenido a ID·A Studio</h1>

      <p className="hero-text">
        Nuestra oficina se especializa transformando ideas en 
        soluciones visuales, técnicas y habitables de alta calidad espacial.
        <br />
        La misión principal del taller es generar soluciones a través de propuestas
        constructivas coherentes y sensoriales.
        <br />
      </p>

      <br />

      <button 
        className="hero-secondary-btn" 
        onClick={() => navigate("/about-detail")}
      >
        Leer más...
      </button>
    </motion.section>
  );
}