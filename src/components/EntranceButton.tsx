import { motion } from "framer-motion";

interface EntranceButtonProps {
  onEnter: () => void;
}

export function EntranceButton({ onEnter }: EntranceButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        background: "#fbfbfb",
        touchAction: "none",
      }}
    >

      {/* ======================================= */}
      {/*        OLEAJE — CAPAS VISIBLES          */}
      {/* ======================================= */}

      {/* Capa 1 — mancha cálida grande esquina inferior derecha */}
      <motion.div
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "-8%", "0%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 85%, rgba(255,248,240,0.95) 0%, rgba(255,248,240,0) 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Capa 2 — mancha fría esquina superior izquierda */}
      <motion.div
        animate={{
          x: ["0%", "-14%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 25% 20%, rgba(210,202,196,0.7) 0%, rgba(210,202,196,0) 55%)",
          filter: "blur(35px)",
        }}
      />

      {/* Capa 3 — mancha suave centro */}
      <motion.div
        animate={{
          x: ["0%", "6%", "-4%", "0%"],
          y: ["0%", "-5%", "4%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(245,238,230,0.6) 0%, rgba(245,238,230,0) 50%)",
          filter: "blur(50px)",
        }}
      />

      {/* Capa 4 — sombra esquina superior derecha para profundidad */}
      <motion.div
        animate={{
          x: ["0%", "-8%", "0%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 85% 10%, rgba(190,180,172,0.45) 0%, rgba(190,180,172,0) 50%)",
          filter: "blur(30px)",
        }}
      />

      {/* ======================================= */}
      {/*                BOTÓN                    */}
      {/* ======================================= */}
      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.25 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "relative",
          zIndex: 3,
          padding: "1.3rem 3rem",
          borderRadius: "40px",
          border: "1px solid rgba(180,170,160,0.5)",
          background: "rgba(255, 255, 255, 0.75)",
          color: "#a09488",
          fontFamily: "Marcellus, sans-serif",
          fontSize: "1.1rem",
          letterSpacing: "0.06em",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
          cursor: "pointer",
        }}
      >
        I have an id·a!
      </motion.button>

    </motion.div>
  );
}
