import { motion } from 'framer-motion';
import { Camera, MapPin, Clock } from 'lucide-react';
import { getImagePath } from '../utils/paths';

const galleryImages = [
  {
    id: 1,
    title: 'Logo Foqus - Versión Verde',
    description: 'Nuestro logo principal en verde neón sobre fondo negro',
    image: getImagePath('foqusverde.jpg'),
    category: 'brand'
  },
  {
    id: 2,
    title: 'Logo Foqus - Versión Blanco',
    description: 'Nuestro logo en versión clara sobre fondo blanco',
    image: getImagePath('foqusblanco.jpg'),
    category: 'brand'
  },
  {
    id: 3,
    title: 'Área de Entrenamiento Principal',
    description: 'Espacio equipado con racks de potencia y equipos de fuerza',
    image: getImagePath('gym1.jpg'),
    category: 'equipment'
  },
  {
    id: 4,
    title: 'Zona de Entrenamiento Funcional',
    description: 'Área con césped artificial para ejercicios específicos',
    image: getImagePath('gym2.jpg'),
    category: 'functional'
  },
  {
    id: 5,
    title: 'Área de Entrenamiento Superior',
    description: 'Área elevada con equipos especializados y vista natural',
    image: getImagePath('gym3.jpg'),
    category: 'upper'
  },
  {
    id: 6,
    title: 'Nuestra Mascota',
    description: 'Nuestro querido French Bulldog, parte de la familia Foqus',
    image: getImagePath('mascotgym.jpg'),
    category: 'mascot'
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestras Instalaciones
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conoce nuestro espacio de entrenamiento moderno y equipado, diseñado para 
            maximizar tu rendimiento y comodidad durante cada sesión.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center text-white">
            <Camera className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Equipos Modernos</h3>
            <p className="text-slate-300">Tecnología de vanguardia para resultados óptimos</p>
          </div>
          <div className="text-center text-white">
            <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ubicación Privilegiada</h3>
            <p className="text-slate-300">Vista natural y ambiente tranquilo para entrenar</p>
          </div>
          <div className="text-center text-white">
            <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horarios Flexibles</h3>
            <p className="text-slate-300">Adaptamos nuestros horarios a tu disponibilidad</p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-slate-200 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para entrenar en Foqus?
            </h3>
            <p className="text-slate-300 mb-6">
              Ven a conocer nuestras instalaciones y descubre por qué somos la mejor opción 
              para tu entrenamiento semipersonalizado.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Agendar Visita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 