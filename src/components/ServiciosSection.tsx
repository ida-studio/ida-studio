import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const servicios = [
  {
    title: 'Arquitectura',
    description: 'Creamos espacios únicos que reflejan tu visión y necesidades, con atención meticulosa a cada detalle.',
    details: 'Nuestro enfoque arquitectónico integra análisis profundo del contexto, necesidades del cliente y visión contemporánea del diseño. Desde conceptualización hasta entrega, cada proyecto es tratado con dedicación única.',
    image: 'https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2Mzc0MTU3OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Diseño Integral',
    description: 'Transformamos espacios interiores en ambientes funcionales y estéticamente excepcionales.',
    details: 'El diseño integral va más allá de lo estético. Consideramos cada elemento del espacio para crear experiencias coherentes que mejoran la calidad de vida de quienes lo habitan.',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1pbmltYWx8ZW58MXx8fHwxNzYzODM3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Construcción',
    description: 'Supervisión y gestión integral de proyectos constructivos con los más altos estándares de calidad.',
    details: 'Gestionamos cada fase constructiva con precisión, asegurando que la visión del proyecto se materialice fielmente mientras mantenemos control de tiempos, costos y calidad.',
    image: 'https://images.unsplash.com/photo-1672072830247-85ac23671e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYzNzkxNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento experto en todas las fases de tu proyecto arquitectónico y de diseño.',
    details: 'Ofrecemos consultoría especializada para optimizar proyectos existentes, resolver desafíos técnicos y proporcionar visión estratégica en decisiones de diseño y construcción.',
    image: 'https://images.unsplash.com/photo-1759751587616-bfe656d3dc2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdWx0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzgzNzM2OHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const serviciosDigitales = [
  {
    title: 'Kit de herramientas Digitales',
    description: 'Herramientas tecnológicas avanzadas para visualización y gestión de proyectos.',
    details: 'Implementamos las últimas tecnologías en modelado 3D, realidad virtual y gestión digital de proyectos para ofrecer a nuestros clientes una experiencia inmersiva y eficiente.',
    image: null
  },
  {
    title: 'Planeación',
    description: 'Estrategia y planificación integral desde la conceptualización.',
    details: 'Desarrollamos planes maestros detallados que consideran todos los aspectos del proyecto: funcionalidad, estética, presupuesto, cronograma y sostenibilidad.',
    image: null
  },
  {
    title: 'Desarrollo',
    description: 'Ejecución y seguimiento de cada fase del proyecto.',
    details: 'Acompañamiento continuo durante todo el proceso de desarrollo, asegurando que cada decisión esté alineada con la visión original y los objetivos del proyecto.',
    image: null
  },
  {
    title: 'Espacio Comercial',
    description: 'Diseño especializado para espacios de negocio y retail.',
    details: 'Creamos espacios comerciales que maximizan la experiencia del cliente, optimizan flujos de circulación y reflejan la identidad de marca de manera efectiva.',
    image: null
  }
];

export function ServiciosSection() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (servicio: any) => {
    setSelectedService(servicio);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="servicios" className="min-h-screen py-24 px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 style={{ color: '#c4b5a0', textAlign: 'left' }}>Nuestros Servicios</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(servicio)}
              >
                <div 
                  className="w-full h-80 mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: '#e8e8e8' }}
                >
                  <ImageWithFallback
                    src={servicio.image}
                    alt={servicio.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 
                  className="mb-3 transition-colors duration-300 group-hover:opacity-100" 
                  style={{ color: '#c4b5a0', opacity: 0.9 }}
                >
                  {servicio.title}
                </h4>
                <p style={{ 
                  color: '#c4b5a0', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.8',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  opacity: 0.7
                }}>
                  {servicio.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Segunda sección de servicios */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 pt-12 border-t" style={{ borderColor: 'rgba(196, 181, 160, 0.2)' }}>
            {serviciosDigitales.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l pl-6 transition-all duration-300 cursor-pointer hover:border-opacity-100"
                style={{ borderColor: 'rgba(196, 181, 160, 0.3)' }}
                onClick={() => handleServiceClick(servicio)}
              >
                <h4 
                  className="mb-3 transition-colors duration-300 hover:opacity-100" 
                  style={{ color: '#c4b5a0', opacity: 0.9 }}
                >
                  {servicio.title}
                </h4>
                <p style={{ 
                  color: '#c4b5a0', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.8',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  opacity: 0.7
                }}>
                  {servicio.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
