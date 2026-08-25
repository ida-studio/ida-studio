import "./AvisoPrivacidad.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AvisoPrivacidad() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="aviso-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <button
        className="aviso-back-btn"
        onClick={() => navigate("/")}
        aria-label="Regresar al inicio"
      >
        ←
      </button>

      <div className="aviso-content">
        <h1 className="aviso-title">Aviso de Privacidad</h1>
        <p className="aviso-updated">Última actualización: agosto 2026</p>

        <p className="aviso-text">
          En <strong>ID·A Studio</strong> tu privacidad es importante para
          nosotros. Este es un aviso de privacidad simplificado que resume
          cómo tratamos tus datos personales cuando nos contactas a través de
          este sitio.
        </p>

        <h2 className="aviso-subtitle">¿Qué datos recabamos?</h2>
        <p className="aviso-text">
          Cuando llenas nuestro formulario de contacto, podemos recabar tu
          nombre, teléfono, correo electrónico, datos generales de tu
          proyecto (ubicación, presupuesto estimado, descripción) y cualquier
          archivo que decidas adjuntar (planos, fotografías, etc.).
        </p>

        <h2 className="aviso-subtitle">¿Para qué usamos tus datos?</h2>
        <p className="aviso-text">
          Utilizamos tu información únicamente para dar seguimiento a tu
          solicitud, contactarte sobre tu proyecto, y ofrecerte cotizaciones o
          propuestas relacionadas con nuestros servicios de arquitectura,
          diseño y consultoría.
        </p>

        <h2 className="aviso-subtitle">¿Compartimos tu información?</h2>
        <p className="aviso-text">
          No vendemos ni compartimos tus datos personales con terceros para
          fines distintos a los aquí descritos, salvo que exista una
          obligación legal que nos requiera hacerlo.
        </p>

        <h2 className="aviso-subtitle">Tus derechos (ARCO)</h2>
        <p className="aviso-text">
          Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al uso de
          tus datos personales (derechos ARCO) en cualquier momento,
          escribiéndonos a{" "}
          <a href="mailto:hola@ida-studio.com" className="aviso-link">
            hola@ida-studio.com
          </a>
          .
        </p>

        <h2 className="aviso-subtitle">Cambios a este aviso</h2>
        <p className="aviso-text">
          Este aviso puede actualizarse periódicamente. Cualquier cambio será
          publicado en esta misma página.
        </p>

        <div className="aviso-full-request">
          <p className="aviso-text">
            Este es un aviso simplificado. Si deseas consultar nuestro aviso
            de privacidad integral, con el detalle completo del responsable
            del tratamiento de tus datos, solicítalo sin costo escribiéndonos
            directamente.
          </p>
          <a
            href="mailto:hola@ida-studio.com?subject=Solicitud%20de%20Aviso%20de%20Privacidad%20Integral"
            className="aviso-request-btn"
          >
            Solicitar aviso de privacidad integral
          </a>
        </div>
      </div>
    </motion.div>
  );
}