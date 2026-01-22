import { motion } from "framer-motion";

export function AcercaSection() {
  return (
    <section
      id="acerca"
      className="min-h-screen flex items-center py-24 px-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-12" style={{ color: "#c4b5a0", textAlign: "left" }}>
            Acerca de
          </h2>

          <div className="max-w-4xl space-y-6">
            <p
              style={{
                color: "#c4b5a0",
                fontSize: ".9rem",
                lineHeight: "1.9",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                opacity: 0.8,
              }}
            >
              Nuestra oficina se especializa en transformar ideas en soluciones
              visuales, técnicas y habitables de alta calidad espacial.
            </p>

            <p
              style={{
                color: "#c4b5a0",
                fontSize: ".9rem",
                lineHeight: "1.9",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                opacity: 0.8,
              }}
            >
          A través de un taller arquitectónico colaborativo, reunimos perspectivas para 
          abordar proyectos integrándolos armoniosamente en su entorno y en su tiempo.<br/>
          Cada proyecto dialoga con su contexto y genera vínculos.<br/>
          Abogamos por un enfoque atemporal, capaz de mantenerse vigente mediante un diseño que evoluciona; 
          preferimos la sobriedad inteligente sobre la tendencia fugaz; valoramos la arquitectura que pertenece al 
          sitio, no la que compite con él.<br/>

          Reconocemos que la complejidad actual demanda mucho más que talento individual: 
          requiere pensamiento científico, diseño circular y la capacidad de integrar 
          múltiples disciplinas. <br/>
          Por ello, trabajamos en conjunto con expertos en cada área para responder 
          a los desafíos contemporáneos, guiados por los principios de sostenibilidad y en 
          alineación a los Objetivos de Desarrollo Sostenible de la ONU.<br/>

          Cuestionamos, experimentamos y expandimos los límites del diseño para ofrecer a nuestros clientes claridad, 
          herramientas y visión en cada etapa del proceso.<br/>

          Como tu compañero de pensamiento, damos forma a tus ideas mediante experiencias 
          espaciales que combinan tecnología, creatividad y propósito.<br/><br/>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-12 mt-20 pt-12 border-t"
          style={{ borderColor: "rgba(228, 228, 228, 0.3)" }}
        >
          <div className="text-center">
            <h3 style={{ color: "#9a9a9a", marginBottom: "0.5rem" }}>10+</h3>
            <p
              style={{
                color: "#c4c4c4",
                fontSize: "0.875rem",
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              Años de Experiencia
            </p>
          </div>

          <div className="text-center">
            <h3 style={{ color: "#9a9a9a", marginBottom: "0.5rem" }}>30+</h3>
            <p
              style={{
                color: "#c4c4c4",
                fontSize: "0.875rem",
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              Proyectos Completados
            </p>
          </div>

          <div className="text-center">
            <h3 style={{ color: "#9a9a9a", marginBottom: "0.5rem" }}>20+</h3>
            <p
              style={{
                color: "#c4c4c4",
                fontSize: "0.875rem",
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              Clientes Satisfechos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
