import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Cada vez que cambia la ruta, sube el scroll al inicio.
// Sin esto, una página nueva puede abrir heredando el scroll
// de la página anterior (ej. si navegas desde el footer).
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
