import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./ContactoSection.css";

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Offices",
  "Renovation",
  "Other",
];

const HOW_OPTIONS = [
  "Instagram",
  "Google",
  "Referral",
  "LinkedIn",
  "Other",
];

export default function ContactoSection() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []).slice(0, 5);
    setFiles(newFiles);
  };

  // Netlify Forms: enviamos con fetch para que sea SPA-friendly
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Agregamos los project types seleccionados
    data.set("project-type", selectedTypes.join(", "));

    // Adjuntamos archivos
    files.forEach((file) => data.append("attachments", file));

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error enviando formulario:", err);
      alert("Hubo un problema al enviar. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="contacto-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* ===== COLUMNA IZQUIERDA ===== */}
      <div className="contacto-left">
        <h1 className="contacto-heading">
          <span className="script">New</span>
          <br />
          <span className="script">Project</span>
          <br />
          Inquiry
        </h1>
        <p className="contacto-subtext">
          Tell us a bit about your project and we'll be in touch.
        </p>
      </div>

      {/* ===== COLUMNA DERECHA ===== */}
      <div className="contacto-right">
        {submitted ? (
          <motion.div
            className="success-msg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: "22px", color: "#3a3535", fontFamily: "Marcellus", marginBottom: "16px" }}>
              Thank you.
            </p>
            <p>
              We've received your inquiry and will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          /*
            IMPORTANTE PARA NETLIFY FORMS:
            El atributo data-netlify="true" y el campo oculto form-name
            son los que activan la detección automática de Netlify.
            El name="contact" debe coincidir con el value del campo oculto.
          */
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Campos ocultos requeridos por Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="project-type" value="" />

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                name="full-name"
                required
                autoComplete="name"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone</label>
              <div className="phone-row">
                <select className="form-select" name="phone-country">
                  <option value="+52">Mexico +52</option>
                  <option value="+1">United States +1</option>
                  <option value="+1-ca">Canada +1</option>
                  <option value="+34">Spain +34</option>
                  <option value="+44">UK +44</option>
                  <option value="+other">Other</option>
                </select>
                <input
                  className="form-input"
                  type="tel"
                  name="phone-number"
                  placeholder="000 000 0000"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">
                Email <span className="hint">(required)</span>
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            {/* Project Type */}
            <div className="form-group">
              <label className="form-label">Project Type</label>
              <div className="type-options">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`type-option${selectedTypes.includes(type) ? " selected" : ""}`}
                    onClick={() => toggleType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Street Address */}
            <div className="form-group">
              <label className="form-label">Project Location</label>
              <input
                className="form-input"
                type="text"
                name="location"
                placeholder="City, State / Neighborhood"
              />
            </div>

            {/* Desired Start Date */}
            <div className="form-group">
              <label className="form-label">Desired Start Date</label>
              <input
                className="form-input"
                type="date"
                name="start-date"
              />
            </div>

            {/* Budget */}
            <div className="form-group">
              <label className="form-label">Estimated Total Budget</label>
              <input
                className="form-input"
                type="text"
                name="budget"
                placeholder="e.g. $500,000 MXN"
              />
            </div>

            {/* Project Description */}
            <div className="form-group">
              <label className="form-label">General Project Description</label>
              <textarea
                className="form-textarea"
                name="description"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Style / Emotion */}
            <div className="form-group">
              <label className="form-label">
                Desired Style, Emotion, or Feeling of the Space
              </label>
              <input
                className="form-input"
                type="text"
                name="style"
                placeholder="e.g. Warm, minimal, connected to nature..."
              />
            </div>

            {/* How did you hear */}
            <div className="form-group">
              <label className="form-label">Where did you hear about us?</label>
              <select className="form-select" name="how-heard">
                <option value="">Select an option</option>
                {HOW_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* File Upload */}
            <div className="form-group">
              <label className="form-label">
                If you have any floor plans, photos, etc, feel free to attach them here{" "}
                <span className="hint">(up to 5 files)</span>
              </label>
              <div
                className="file-upload-area"
                onClick={() => fileInputRef.current?.click()}
              >
                <span className="file-upload-icon">+</span>
                <span className="file-upload-text">Add a File</span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="attachments"
                multiple
                accept="image/*,.pdf,.dwg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {files.length > 0 && (
                <div className="file-list">
                  {files.map((f) => (
                    <div key={f.name}>· {f.name}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
