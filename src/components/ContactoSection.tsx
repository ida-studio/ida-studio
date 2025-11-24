import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function ContactoSection() {
  return (
    <section id="contacto" className="min-h-screen flex items-center py-24 px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 style={{ color: '#c4b5a0', textAlign: 'left' }}>Contáctanos</h2>
          <p className="mt-6" style={{ 
            color: '#c4b5a0', 
            maxWidth: '600px', 
            fontSize: '0.95rem', 
            lineHeight: '1.9',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            opacity: 0.7
          }}>
          .</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail size={20} style={{ color: '#c4b5a0', marginTop: '0.25rem', opacity: 0.7 }} />
                <div>
                  <p style={{ color: '#c4b5a0', marginBottom: '0.25rem', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}>
                    hola@ida-studio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} style={{ color: '#c4b5a0', marginTop: '0.25rem', opacity: 0.7 }} />
                <div>
                  <p style={{ color: '#c4b5a0', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}>
                    (998)168-55-51
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t" style={{ borderColor: 'rgba(196, 181, 160, 0.2)' }}>
              <div className="flex gap-6">
                <a 
                  href="#" 
                  className="transition-opacity hover:opacity-60" 
                  style={{ color: '#c4b5a0', opacity: 0.7 }}
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="transition-opacity hover:opacity-60" 
                  style={{ color: '#c4b5a0', opacity: 0.7 }}
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="transition-opacity hover:opacity-60" 
                  style={{ color: '#c4b5a0', opacity: 0.7 }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="nombre" 
                    style={{ color: '#c4b5a0', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-0 py-2 border-0 border-b outline-none transition-all focus:border-opacity-100"
                    style={{ borderColor: 'rgba(196, 181, 160, 0.3)', backgroundColor: 'transparent', color: '#c4b5a0' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="apellido" 
                    style={{ color: '#c4b5a0', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className="w-full px-0 py-2 border-0 border-b outline-none transition-all focus:border-opacity-100"
                    style={{ borderColor: 'rgba(196, 181, 160, 0.3)', backgroundColor: 'transparent', color: '#c4b5a0' }}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  style={{ color: '#c4b5a0', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-2 border-0 border-b outline-none transition-all focus:border-opacity-100"
                  style={{ borderColor: 'rgba(196, 181, 160, 0.3)', backgroundColor: 'transparent', color: '#c4b5a0' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="mensaje" 
                  style={{ color: '#c4b5a0', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', letterSpacing: '0.05em', opacity: 0.7 }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  className="w-full px-0 py-2 border-0 border-b outline-none transition-all focus:border-opacity-100 resize-none"
                  style={{ borderColor: 'rgba(196, 181, 160, 0.3)', backgroundColor: 'transparent', color: '#c4b5a0' }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 border transition-all duration-300"
                style={{
                  borderColor: 'rgba(196, 181, 160, 0.3)',
                  backgroundColor: 'transparent',
                  color: '#c4b5a0',
                  letterSpacing: '0.12em',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                enviar
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}