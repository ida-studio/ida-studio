import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import quienesSomosImage from 'figma:asset/a9e52600318ea6692a46a566fa45dd8b9dd78ba4.png';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-6xl bg-white z-50 shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#fafafa' }}
          >
            <div className="relative h-full">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 z-10 transition-opacity hover:opacity-60"
                style={{ color: '#c4b5a0' }}
              >
                <X size={28} />
              </button>

              <div className="grid md:grid-cols-2 h-full overflow-y-auto">
                {/* Left - Text */}
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h2 className="mb-8" style={{ color: '#c4b5a0', fontSize: '3rem' }}>
                    Quiénes somos
                  </h2>

                  <div className="space-y-6" style={{ 
                    color: '#c4b5a0', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.9',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    opacity: 0.8
                  }}>
                    <p>
                      Agenda tu consulta con nuestros expertos en diseño y da el primer paso hacia un proyecto innovador y exitoso. Nuestro equipo está listo para brindarte soluciones personalizadas y llevar tus ideas al siguiente nivel.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative h-full min-h-[400px] md:min-h-0">
                  <img 
                    src={quienesSomosImage}
                    alt="Quiénes somos"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
