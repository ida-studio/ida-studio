import { motion } from "framer-motion";

interface EntranceButtonProps {
  onEnter: () => void;
}

export function EntranceButton({ onEnter }: EntranceButtonProps) {
  const lines = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    height: 40 + Math.random() * 80,
    rotate: -20 + Math.random() * 40,
    delay: Math.random() * 4,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.4 }}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 55%)," +
            "radial-gradient(circle at 80% 70%, #fbfbfb 0%, transparent 60%)," +
            "linear-gradient(135deg, #ebe4d8 0%, #ded9da 50%, #f3ece3 100%)",
          backgroundSize: "120% 120%",
        }}
      />

      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.35, 0], y: [-20, 10, -20] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: line.left,
            top: line.top,
            width: "1px",
            height: `${line.height}px`,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
            transform: `rotate(${line.rotate}deg)`,
            pointerEvents: "none",
          }}
        />
      ))}

      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.3rem 3rem",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.6)",
          background: "rgba(255, 255, 255, 0.98)",
          color: "#cfcac0ff",
          fontFamily: "Marcellus, sans-serif",
          fontSize: "1.1rem",
          letterSpacing: "0.06em",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 32px rgba(0,0,0,0.16)",
           textTransform: "none",
         
        }}
      >
        I have an id·a!
      </motion.button>
    </motion.div>
  );
}