import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import AirSynapseBG from "./AirSynapseBG";

export default function HeroSection() {
  const navigate = useNavigate();

  const LINE_GAP_PX = 10;

  const line1 = (
    <>
      <span className="hl">Transforma</span>{" "}
      <span className="thin">tus id·as</span>
    </>
  );

  const line2 = (
    <>
      <span className="thin">en</span>{" "}
      <span className="hl">espacios</span>{" "}
      <span className="thin">que</span>
    </>
  );

  const words = useMemo(
    () => [
      "inspiran",
      "sanan",
      "optimizan",
      "integran",
      "trascienden",
      "emocionan",
      "innovan",
      "solucionan",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [words.length]);

  const line3 = (
    <span className="swap-wrap">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="swap-word"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );

  const subtitle =
    "CO-CREAMOS TUS SUEÑOS A TRAVÉS DE ARQUITECTURA";

  const [hoverReadMore, setHoverReadMore] = useState(false);

  return (
    <motion.section
      className="hero hero-v2"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <AirSynapseBG backgroundHex="#ffffff" inkHex="#000000" vignette={false} />

      <div className="hero-v2-inner">
        <h1 className="hero-v2-title">
          <span
            className="hero-line"
            style={{ display: "block", marginBottom: `${LINE_GAP_PX}px` }}
          >
            {line1}
          </span>

          <span
            className="hero-line"
            style={{ display: "block", marginBottom: `${LINE_GAP_PX}px` }}
          >
            {line2}
          </span>

          <span className="hero-line" style={{ display: "block" }}>
            {line3}
          </span>
        </h1>

        {/* Subtítulo + Leer más (misma fila) */}
        <div className="hero-subrow">
          <p className="hero-v2-sub">{subtitle}</p>

          <span
            role="button"
            tabIndex={0}
            onClick={() => navigate("/about-detail")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                navigate("/about-detail");
            }}
            onMouseEnter={() => setHoverReadMore(true)}
            onMouseLeave={() => setHoverReadMore(false)}
            className="hero-readmore"
            style={{ color: hoverReadMore ? "#ded9da" : "#000000" }}
          >
            ... LEER MÁS
          </span>
        </div>
      </div>
    </motion.section>
  );
}
