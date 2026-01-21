import { useState } from "react";
import "./ClientesSection.css";

const CLIENT_CODES: Record<string, string> = {
  // EJEMPLOS — CAMBIA ESTOS POR LOS REALES
  "ROMA-001": "https://drive.google.com/XXXX",
  "CARO-552": "https://drive.google.com/YYYY",
  "LX-901": "https://drive.google.com/ZZZZ",
};

export default function ClientesSection() {
  const [code, setCode] = useState("");

  const handleAccess = () => {
    const normalized = code.trim().toUpperCase();
    const url = CLIENT_CODES[normalized];

    if (!url) {
      alert("Código no válido. Revisa con tu arquitecta.");
      return;
    }

    window.location.href = url;
  };

  const handleFactura = () => {
    window.open("https://tu-formulario-de-facturacion.com", "_blank");
  };

  return (
    <section className="clientes-section">
      <h2 className="clientes-title">Clientes</h2>

      <div className="clientes-card">
        {/* Usa aquí el icono que ya tenías, si quieres */}
        {/* <img src={...} alt="IDA Studio" className="clientes-icon" /> */}

        <p className="clientes-text">
          ACCEDE FÁCILMENTE A LOS PLANOS,
          <br />
          PRESENTACIONES Y CONTENIDO DE TU PROYECTO
          <br />
          EN LA WEB
        </p>

        <div className="clientes-input-wrapper">
          <input
            type="text"
            placeholder="Ingresa el código."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="clientes-input"
          />

          <button onClick={handleAccess} className="clientes-arrow">
            →
          </button>
        </div>

        <button className="clientes-btn" onClick={handleAccess}>
          Entrar
        </button>

        <button className="clientes-factura-btn" onClick={handleFactura}>
          Solicitar factura
        </button>
      </div>
    </section>
  );
}
