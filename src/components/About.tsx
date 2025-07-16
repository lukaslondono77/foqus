import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, Star } from 'lucide-react';
import { getImagePath } from '../utils/paths';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce la historia detrás de Foqus y descubre por qué somos diferentes 
            en el mundo del fitness.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                En Foqus, creemos que cada persona es única y merece un enfoque personalizado 
                para alcanzar sus objetivos de fitness. Nuestra misión es proporcionar un 
                espacio donde el entrenamiento no sea solo una rutina, sino una experiencia 
                transformadora que se adapte a las necesidades individuales de cada cliente.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                No somos un gimnasio masivo donde te pierdes en la multitud. Somos un 
                espacio íntimo donde cada sesión está diseñada para maximizar tu potencial 
                y garantizar resultados reales y duraderos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-foqus-green-500 to-foqus-green-600 rounded-2xl p-8 text-white text-center">
              <Target className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Enfócate en Ti</h3>
              <p className="text-foqus-green-100">
                Nuestro lema refleja nuestra filosofía: cada persona tiene un proceso único 
                y merece atención personalizada para alcanzar sus objetivos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <Heart className="w-12 h-12 text-foqus-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Pasión</h3>
              <p className="text-slate-600">
                Amamos lo que hacemos y esa pasión se refleja en cada sesión de entrenamiento.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <Users className="w-12 h-12 text-foqus-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Comunidad</h3>
              <p className="text-slate-600">
                Creemos en el poder de entrenar juntos, apoyándonos mutuamente.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <Award className="w-12 h-12 text-foqus-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excelencia</h3>
              <p className="text-slate-600">
                Nos esforzamos por la excelencia en cada aspecto de nuestro servicio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mascot Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-foqus-green-500 to-foqus-green-600 rounded-2xl p-8 md:p-12 mb-16 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Nuestra Mascota
              </h2>
              <p className="text-lg text-foqus-green-100 leading-relaxed mb-6">
                Te presentamos a nuestro querido French Bulldog, la mascota oficial de Foqus. 
                Con su energía contagiosa y su espíritu juguetón, representa perfectamente 
                la alegría y la determinación que caracterizan nuestro gimnasio.
              </p>
              <p className="text-lg text-foqus-green-100 leading-relaxed">
                Siempre presente en nuestras sesiones, nuestra mascota no solo nos acompaña 
                en el entrenamiento, sino que también nos recuerda la importancia de mantener 
                un equilibrio entre la disciplina y la diversión en nuestro camino hacia 
                una vida más saludable.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
              <img 
                src={getImagePath('mascotgym.jpg')}
                alt="French Bulldog Mascot" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Danger</h3>
              <p className="text-foqus-green-100">
                Nuestro compañero fiel que nos inspira a ser mejores cada día
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-foqus-green-500 to-foqus-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Entrenadores Certificados</h3>
              <p className="text-slate-600 leading-relaxed">
                Nuestro equipo de entrenadores cuenta con certificaciones profesionales 
                y años de experiencia en el mundo del fitness. Cada uno está comprometido 
                con tu éxito y bienestar.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-foqus-green-500 to-foqus-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Atención Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Creemos en la importancia de conocer a cada cliente personalmente, 
                entender sus objetivos y diseñar programas que se adapten a sus 
                necesidades específicas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Síguenos en Instagram
            </h3>
            <p className="text-slate-600 mb-6">
              Descubre nuestros entrenamientos, resultados y la comunidad Foqus
            </p>
            <motion.a
              href="https://www.instagram.com/foqus.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">📸</span>
              @foqus.com.co
            </motion.a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para ser parte de la familia Foqus?
            </h3>
            <p className="text-slate-300 mb-6">
              Únete a nosotros y descubre cómo el entrenamiento semipersonalizado 
              puede transformar tu vida.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foqus-green-500 hover:bg-foqus-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Comenzar Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 