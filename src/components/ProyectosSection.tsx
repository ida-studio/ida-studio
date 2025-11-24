import { motion } from 'motion/react';

const proyectos = [
  {
    title: 'Kit de Herramientas Digitales ',
    category: 'Soluciones integrales para potenciar tus proyectos de diseño con tecnología avanzada. Garantizamos precisión y eficiencia en cada etapa del proceso creativo.',
    year: '2024'
  },
  {
    title: 'Planeación',
    category: 'Diseñamos un plan de trabajo personalizado a los requisitos del proyectista y optimizamos el costo operativo del proyecto al eliminar los «tiempos muertos» de un taller convencional.',
    year: '2024'
  },
  {
    title: 'Desarrollo',
    category: 'Trabajamos con total apego a los parámetros de diseño del proyectista; aportamos nuestra infraestructura y experiencia para solucionar y dibujar los sistemas constructivos del proyecto.',
    year: '2023'
  },
  {
    title: 'Espacio Comercial',
    category: 'Retail',
    year: '2023'
  }
];

export function ProyectosSection() {
  return (
    <section id="proyectos" className="min-h-screen py-24 px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 style={{ color: '#c4b5a0', textAlign: 'left' }}>Tienda</h2>
        </motion.div>

        <div className="space-y-6">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group py-6 border-b transition-all duration-300 hover:border-opacity-100"
              style={{ borderColor: 'rgba(196, 181, 160, 0.2)' }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h3 style={{ color: '#c4b5a0', marginBottom: '0.5rem' }}>{proyecto.title}</h3>
                  <p style={{ 
                    color: '#c4b5a0', 
                    fontSize: '0.875rem', 
                    letterSpacing: '0.05em',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    lineHeight: '1.7',
                    opacity: 0.7
                  }}>
                    {proyecto.category}
                  </p>
                </div>
                <div style={{ 
                  color: '#c4b5a0', 
                  fontSize: '0.875rem', 
                  letterSpacing: '0.1em',
                  opacity: 0.5
                }}>
                  {proyecto.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}