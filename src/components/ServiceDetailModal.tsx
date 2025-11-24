import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    details: string;
    image?: string | null;
  } | null;
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  if (!service) return null;

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
                    {service.title}
                  </h2>

                  <div className="space-y-6" style={{ 
                    color: '#c4b5a0', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.9',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    opacity: 0.8
                  }}>
                    <p style={{ fontSize: '1.05rem', opacity: 0.9 }}>
                      {service.description}
                    </p>

                    <p>
                      {service.details}
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative h-full min-h-[400px] md:min-h-0">
                  {service.image ? (
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: '#e8e8e8' }}
                    >
                      <p style={{ color: '#c4b5a0', fontSize: '0.875rem', opacity: 0.5 }}>
                        Imagen del servicio
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
