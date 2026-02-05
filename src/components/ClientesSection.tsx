import { useState } from "react";
import "./ClientesSection.css";

const CLIENT_CODES: Record<string, string> = {
  // 🔹 Carpeta FROC
  "FROC.AA": "https://drive.google.com/drive/folders/1nKnRVdc4ThM4CWlCKX1es5rqZt1YPQel?usp=sharing",

  // 🔹 Carpeta LGBM
  "LGBM.VA": "https://drive.google.com/drive/folders/1_DQhU72Gtqi4_UNaY-NOi52CGVjYRNJz?usp=sharing",

  // 🔹 MISMA carpeta para CM.CL y AL.CL
  "CM.CL": "https://drive.google.com/drive/folders/1KJIvxeXZCGes5121N2yBaVA5vNzmcQ6W?usp=sharing",
  "AL.CL": "https://drive.google.com/drive/folders/1KJIvxeXZCGes5121N2yBaVA5vNzmcQ6W?usp=sharing",
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

    window.open(url, "_blank");
  };

  const handleFactura = () => {
    window.open(
      "https://contabilizate.timbrame.mx/Auto/Form?e=444685f3-4040-4b0c-966a-38eeb5b5186a",
      "_blank"
    );
  };

  return (
    <section className="clientes-section">
      <h1 className="clientes-title">Clientes</h1>

      <div className="clientes-card">
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
      </div>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <button className="clientes-factura-btn" onClick={handleFactura}>
          Solicitar factura
        </button>
      </div>
    </section>
  );
}
