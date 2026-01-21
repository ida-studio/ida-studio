import React from "react";
import ReactDOM from "react-dom/client";

import "./fonts.css";   // Solo define @font-face
import "./index.css";   // ← estilos base y reset deben estar aquí
import "./App.css";     // ← estilos generales de la app

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);