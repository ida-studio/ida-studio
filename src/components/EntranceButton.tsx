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
        width: "100%",        //  ✅ antes 100vw (causaba zoom)
        height: "100dvh",     //  ✅ antes 100vh
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        background: "#e8e3dc",
        touchAction: "none",  //  ✅ evita deslizamientos raros
      }}
    >

      {/* ======================================= */}
      {/*           OLEAJE MINIMAL SUAVE          */}
      {/* ======================================= */}

      {/* Capa 1 — oleaje grande */}
      <motion.div
        animate={{
          x: ["0%", "12%", "0%"],
          y: ["0%", "-6%", "0%"],
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
            "radial-gradient(circle at 60% 80%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 55%)",
          filter: "blur(30px)",
          opacity: 0.9,
        }}
      />

      {/* Capa 2 — oleaje más notorio */}
      <motion.div
        animate={{
          x: ["0%", "-18%", "0%"],
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
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 60%)",
          filter: "blur(20px)",
          opacity: 1,
        }}
      />

      {/* Capa 3 — profundidad */}
      <motion.div
        animate={{
          x: ["0%", "8%", "0%"],
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
            "linear-gradient(135deg, #f1ebe4, #e6ded8, #f4ece5)",
          opacity: 0.4,
        }}
      />

      {/* BOTÓN */}
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
          border: "1px solid rgba(255,255,255,0.6)",
          background: "rgba(255, 255, 255, 0.92)",
          color: "#cfcac0ff",
          fontFamily: "Marcellus, sans-serif",
          fontSize: "1.1rem",
          letterSpacing: "0.06em",
          backdropFilter: "blur(16px)",
          boxShadow: "0 10px 32px rgba(0,0,0,0.16)",
        }}
      >
        I have an id·a!
      </motion.button>

    </motion.div>
  );
}
