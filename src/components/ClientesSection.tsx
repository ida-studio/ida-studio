import { useState } from "react";

const CLIENT_CODES: Record<string, string> = {
  "FROC.AA": "PEGA_AQUI_TU_LINK_DE_DRIVE",
};

const FACTURA_URL =
  "https://contabilizate.timbrame.mx/Auto/Form?e=444685f3-4040-4b0c-966a-38eeb5b5186a";

export default function ClientesSection() {
  const [code, setCode] = useState("");

  const handleAccess = () => {
    const normalized = code.trim().toUpperCase();
    const url = CLIENT_CODES[normalized];
    if (!url) return alert("Código no válido.");
    window.location.href = url;
  };

  const handleFactura = () => {
    window.open(FACTURA_URL, "_blank"); // abre en nueva pestaña
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: 160,
        paddingInline: 24,
        boxSizing: "border-box",
        background: "#fbfbfb",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TÍTULO SOLO A LA IZQ */}
        <h1
          style={{
            width: "100%",
            alignSelf: "flex-start",
            fontFamily: "Marcellus, serif",
            fontSize: 46,
            color: "#b6aeae",
            margin: "0 0 28px 0",
          }}
        >
          Clientes
        </h1>

        {/* CARD */}
        <div
          style={{
            width: 560,
            maxWidth: "100%",
            background: "#fff",
            borderRadius: 34,
            padding: "64px 56px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: "Marcellus, serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#b6aeae",
              margin: "0 0 34px 0",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Accede fácilmente a los planos,
            <br />
            presentaciones y contenido de tu proyecto
            <br />
            en la web
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #d7d4d4",
              borderRadius: 18,
              padding: "8px 12px",
              marginBottom: 18,
            }}
          >
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ingresa el código."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                padding: "10px 8px",
                fontFamily:
                  "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                color: "#5a5555",
                background: "transparent",
              }}
            />
            <button
              onClick={handleAccess}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
                color: "#b6aeae",
                padding: "6px 10px",
              }}
              aria-label="Entrar"
            >
              →
            </button>
          </div>

          <button
            onClick={handleAccess}
            style={{
              width: 190,
              padding: "12px 14px",
              borderRadius: 28,
              border: "1px solid #b6aeae",
              background: "transparent",
              fontFamily: "Marcellus, serif",
              fontSize: 16,
              color: "#b6aeae",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </div>

        {/* BOTÓN FACTURA CENTRADO ABAJO */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
          <button
            onClick={handleFactura}
            style={{
              width: 220,
              padding: "12px 14px",
              borderRadius: 28,
              border: "1px solid #b6aeae",
              background: "transparent",
              fontFamily: "Marcellus, serif",
              fontSize: 16,
              color: "#b6aeae",
              cursor: "pointer",
            }}
          >
            Solicitar factura
          </button>
        </div>
      </div>
    </section>
  );
}
