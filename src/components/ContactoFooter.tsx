import "./ContactoFooter.css";

export default function ContactoFooter() {
  return (
    <footer id="contacto-footer" className="footer-contacto">
      <h2 className="footer-title">Contacto</h2>

      <div className="footer-item">
        <span className="footer-icon">✉</span>
        <a href="mailto:hola@ida-studio.com" className="footer-email">
          hola@ida-studio.com
        </a>
      </div>
    </footer>
  );
}
