import "./PiedePagina.css";

export default function PiedePagina() {
  return (
    // ✅ CORRECCIÓN: era position:fixed (tapaba contenido)
    // Ahora es un footer normal al final del flujo de la página
    <footer className="footer-fixed">

      <div className="footer-left">
        CO-CREAMOS TUS SUEÑOS A TRAVÉS DE ARQUITECTURA
      </div>

      <div className="footer-center">
        © 2025 IDA Studio. Todos los derechos Reservados.
      </div>

      <div className="footer-right">
        Aviso de privacidad
      </div>

    </footer>
  );
}