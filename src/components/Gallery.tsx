import { motion } from 'framer-motion';
import { Camera, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '../utils/paths';

const galleryImages = [
  {
    id: 1,
    title: 'Logo Foqus — Verde',
    description: 'Nuestro logo principal en verde neón sobre fondo negro',
    image: getImagePath('foqusverde.jpg'),
  },
  {
    id: 2,
    title: 'Logo Foqus — Blanco',
    description: 'Versión clara de nuestro logo sobre fondo blanco',
    image: getImagePath('foqusblanco.jpg'),
  },
  {
    id: 3,
    title: 'Área de Entrenamiento Principal',
    description: 'Espacio equipado con racks de potencia y equipos de fuerza',
    image: getImagePath('gym1.jpg'),
  },
  {
    id: 4,
    title: 'Zona Funcional',
    description: 'Área con césped artificial para ejercicios específicos de alto rendimiento',
    image: getImagePath('gym2.jpg'),
  },
  {
    id: 5,
    title: 'Área Superior',
    description: 'Planta alta con equipos especializados y vista natural',
    image: getImagePath('gym3.jpg'),
  },
  {
    id: 6,
    title: 'Danger — Nuestra Mascota',
    description: 'Nuestro querido French Bulldog, parte de la familia Foqus',
    image: getImagePath('mascotgym.jpg'),
  },
];

const highlights = [
  {
    icon: Camera,
    title: 'Equipos Modernos',
    desc: 'Tecnología de vanguardia para resultados óptimos',
  },
  {
    icon: MapPin,
    title: 'Ubicación Privilegiada',
    desc: 'Vista natural y ambiente tranquilo — Cra 83c #33-25, Medellín',
  },
  {
    icon: Clock,
    title: 'Horarios Flexibles',
    desc: 'Lun–Vie 6am–10pm · Sáb 7am–8pm · Dom 8am–6pm',
  },
];

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 texture-cracked">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-display text-hulk-purple text-xs tracking-[0.35em] uppercase mb-3 block font-bold">
            Nuestro Espacio
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase leading-tight mb-4">
            INSTALACIONES{' '}
            <span className="text-foqus-green-400 text-glow-green drop-shadow-[0_0_10px_var(--hulk-purple)]">FOQUS</span>
          </h1>
          <div className="divider-green mb-6 bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conoce nuestro espacio de entrenamiento moderno y equipado, diseñado para
            maximizar tu rendimiento y comodidad en cada sesión.
          </p>
        </motion.div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#111111] border border-foqus-green-500/20 rounded-xl p-6 hover:border-hulk-purple/50 transition-colors duration-300 border-smashed group"
            >
              <div className="w-12 h-12 rounded-full bg-hulk-purple/10 border border-hulk-purple/25 flex items-center justify-center shrink-0 group-hover:bg-hulk-purple group-hover:text-white transition-all">
                <h.icon className="w-5 h-5 text-hulk-purple group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white uppercase text-sm tracking-wide mb-1">
                  {h.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-foqus-green-500/15 hover:border-hulk-purple/50 transition-all duration-300 border-smashed"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#111111]">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-hulk-purple/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-white uppercase text-xl tracking-wide mb-1">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-snug">{img.description}</p>
                </div>
              </div>

              {/* Purple corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-full h-1 bg-hulk-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                <div className="absolute top-0 right-0 w-1 h-full bg-hulk-purple scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#0f1a0f] to-[#111111] border border-hulk-purple/20 border-smashed rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-white uppercase mb-4 leading-tight">
              ¿LISTO PARA ENTRENAR EN<br />
              <span className="text-foqus-green-400">FOQUS?</span>
            </h3>
            <div className="divider-green mb-8 bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Ven a conocer nuestras instalaciones y descubre por qué somos la mejor opción
              para tu entrenamiento semipersonalizado.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-hulk-purple hover:bg-hulk-purple-light text-white px-10 py-5 rounded font-display font-bold text-lg tracking-widest shadow-[0_0_20px_rgba(124,58,237,0.4)] inline-flex items-center gap-4 transition-all duration-300 group"
            >
              AGENDAR VISITA
              <ArrowRight size={22} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
