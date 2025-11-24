import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, Instagram } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Tienda" },
    { id: "acerca", label: "Acerca de" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: isScrolled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.6)",
          borderBottom: "1px solid rgba(220,220,220,0.3)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LEFT */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  color: "#c4b5a0",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  opacity: 0.8,
                }}
                className="hover:opacity-100 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CENTER */}
          <div>
            <h1
              style={{
                fontFamily: "Marcellus-Regular",
                color: "#c4b5a0",
                fontSize: "1.5rem",
                letterSpacing: "0.1em",
              }}
            >
              ID·A STUDIO
            </h1>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex gap-3">
            <Mail size={20} style={{ color: "#c4b5a0" }} />
            <Instagram size={20} style={{ color: "#c4b5a0" }} />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: "#c4b5a0" }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>
    </>
  );
}