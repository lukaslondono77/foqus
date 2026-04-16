import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, Star, Instagram, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '../utils/paths';

const values = [
  {
    icon: Heart,
    title: 'Pasión',
    desc: 'Amamos lo que hacemos y esa pasión se refleja en cada sesión de entrenamiento.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    desc: 'Creemos en el poder de entrenar juntos y apoyarnos mutuamente en cada meta.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    desc: 'Nos esforzamos por la excelencia en cada aspecto de nuestro servicio.',
  },
];

const team = [
  {
    icon: Users,
    title: 'Entrenadores Certificados',
    desc: 'Nuestro equipo cuenta con certificaciones profesionales y años de experiencia en fitness. Cada uno comprometido con tu éxito y bienestar.',
  },
  {
    icon: Star,
    title: 'Atención Personalizada',
    desc: 'Creemos en conocer a cada cliente personalmente, entender sus objetivos y diseñar programas que se adapten a sus necesidades específicas.',
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 texture-cracked">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-display text-hulk-purple text-xs tracking-[0.35em] uppercase mb-3 block font-bold">
            Nuestra Historia
          </span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white uppercase leading-tight mb-4">
            SOBRE <span className="text-foqus-green-400 text-glow-green">FOQUS</span>
          </h1>
          <div className="divider-green mb-6 bg-gradient-to-r from-foqus-green-500 to-hulk-purple" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conoce la historia detrás de Foqus y descubre por qué somos diferentes
            en el mundo del fitness.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-hulk-purple/20 rounded-2xl p-8 md:p-12 mb-16 shadow-[0_0_30px_rgba(124,58,237,0.1)] overflow-hidden border-smashed"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display text-hulk-purple text-xs tracking-[0.3em] uppercase block mb-3 font-bold">
                Nuestra Misión
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase mb-8 leading-tight">
                MÁS QUE UN GYM,<br />
                <span className="text-foqus-green-400">UN PROPÓSITO</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  En Foqus, creemos que cada persona es única y merece un enfoque personalizado
                  para alcanzar sus objetivos de fitness. Nuestra misión es proporcionar un
                  espacio donde el entrenamiento no sea solo una rutina, sino una experiencia
                  transformadora que se adapte a las necesidades individuales de cada cliente.
                </p>
                <p>
                  No somos un gimnasio masivo donde te pierdes en la multitud. Somos un
                  espacio íntimo donde cada sesión está diseñada para maximizar tu potencial
                  y garantizar resultados reales y duraderos.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-hulk-purple to-hulk-purple-dark rounded-xl p-10 text-center shadow-[0_0_40px_rgba(124,58,237,0.4)] rotate-2">
              <Target className="w-20 h-20 text-white mx-auto mb-6 drop-shadow-lg" />
              <h3 className="font-display font-bold text-3xl text-white uppercase mb-4">
                Enfócate en Ti
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                Nuestro lema refleja nuestra filosofía: cada persona tiene un proceso único
                y merece atención personalizada para alcanzar sus objetivos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase mb-4">
              NUESTROS <span className="text-foqus-green-400">VALORES</span>
            </h2>
            <div className="divider-green bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                viewport={{ once: true }}
                className="card-hulk border-smashed p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-hulk-purple/10 border border-hulk-purple/25 flex items-center justify-center mx-auto mb-6 group-hover:bg-hulk-purple/20 group-hover:border-hulk-purple/50 transition-all duration-300">
                  <v.icon className="w-8 h-8 text-hulk-purple" />
                </div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0f1a0f] via-[#111111] to-[#0a0a0a] border border-foqus-green-500/25 rounded-xl p-8 md:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display text-foqus-green-500 text-xs tracking-[0.3em] uppercase block mb-3">
                Familia Foqus
              </span>
              <h2 className="font-display font-bold text-3xl text-white uppercase mb-6">
                NUESTRA <span className="text-foqus-green-400">MASCOTA</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Te presentamos a <span className="text-foqus-green-400 font-bold">Danger</span>,
                  nuestro querido French Bulldog y la mascota oficial de Foqus.
                  Con su energía contagiosa y espíritu juguetón, representa perfectamente
                  la alegría y determinación que caracterizan nuestro gimnasio.
                </p>
                <p>
                  Siempre presente en nuestras sesiones, Danger no solo nos acompaña
                  en el entrenamiento, sino que nos recuerda la importancia de mantener
                  un equilibrio entre disciplina y diversión en nuestro camino hacia
                  una vida más saludable.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={getImagePath('mascotgym.jpg')}
                  alt="Danger — Mascota Foqus"
                  className="w-44 h-44 object-cover rounded-full border-4 border-foqus-green-500 glow-green"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-foqus-green-500 text-black px-4 py-1 rounded-full font-display font-bold text-xs tracking-widest">
                  DANGER
                </div>
              </div>
              <p className="text-gray-500 text-sm text-center mt-4 max-w-xs">
                Nuestro compañero fiel que nos inspira a ser mejores cada día.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-foqus-green-500/20 rounded-xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white uppercase mb-2">
              NUESTRO <span className="text-foqus-green-400">EQUIPO</span>
            </h2>
            <div className="divider-green" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {team.map((t, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-foqus-green-600 to-foqus-green-700 flex items-center justify-center shrink-0">
                  <t.icon className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                    {t.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-[#111111] border border-foqus-green-500/20 rounded-xl p-8 max-w-lg mx-auto">
            <h3 className="font-display font-bold text-xl text-white uppercase mb-2">
              SÍGUENOS EN INSTAGRAM
            </h3>
            <div className="divider-green mb-6" />
            <motion.a
              href="https://www.instagram.com/foqus.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-7 py-3 rounded font-display font-bold text-sm tracking-widest transition-all duration-200 shadow-lg"
            >
              <Instagram size={18} />
              @foqus.com.co
            </motion.a>
            <p className="text-gray-600 text-xs mt-4 tracking-wide">
              Entrenamientos, resultados y comunidad Foqus.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#0f1a0f] to-[#111111] border border-hulk-purple/20 border-smashed rounded-2xl p-12 overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.15)] mt-12">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-white uppercase mb-4">
              ¿LISTO PARA SER PARTE DE<br />
              <span className="text-foqus-green-400">FOQUS?</span>
            </h3>
            <div className="divider-green mb-8 bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Únete y descubre cómo el entrenamiento semipersonalizado puede transformar tu vida.
            </p>
            <motion.button
              whileHover={{ scale: 1.06, rotate: 1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate('/plans')}
              className="bg-hulk-purple hover:bg-hulk-purple-light text-white px-12 py-5 rounded font-display font-bold text-xl tracking-widest shadow-[0_0_20px_rgba(124,58,237,0.4)] inline-flex items-center gap-4 transition-all duration-300 group"
            >
              COMENZAR AHORA
              <ArrowRight size={24} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
