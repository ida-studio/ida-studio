import "./AboutDetail.css";
import { motion } from "framer-motion";
import IMG from "../assets/servicios2.png";

export default function Arquitectura() {
  return (
    <motion.div
      className="about-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Texto */}
      <div className="about-left">
        <h2 className="about-title">Arquitectura</h2>
        <p className="about-text">
          Diseño espacial enfocado en mejorar la experiencia humana. 
Creemos en desarrollar espacios con propósito, responsables y que reflejen profundamente quiénes somos.
Nos especializamos en la creación de atmósferas que promueven la estimulación cognitiva.

Los procesos que experimentamos en el cerebro al habitar un espacio trascienden por completo cómo nos sentimos, nos comportamos y las decisiones que tomamos; Por lo que el ser humano, además de espacios cómodos y agradables, necesita espacios que nos estimulen sensorialmente: detalles inesperados, remates visuales, diseños amables con la naturaleza y que catalicen mejoras en como interactuamos en la sociedad y con el entorno.

El servicio de Arquitectura está disponible, ya que en muchos casos, los clientes solicitan a nuestra firma que actúe únicamente como arquitecto de diseño en sus proyectos, liderando la dirección creativa y el diseño arquitectónico. 

Gracias a nuestra sólida formación técnica, nuestro equipo elabora regularmente planos técnicos detallados para arquitectura, acabados, detalles y otros elementos que dan vida al carácter de un proyecto.

Posteriormente y de manera colaboramos con el equipo seleccionado por el cliente para integrar nuestro diseño arquitectónico al complemento de las ingenierías, diseño estructural y finalmente con el constructor responsable del proyecto para gestionar la supervisión y asegurarnos de que la ida del cliente se concrete.
        </p>
      </div>

      {/* Imagen */}
      <div className="about-right">
        <img src={IMG} alt="servicio arquitectura" className="about-image" />
      </div>
    </motion.div>
  );
}
