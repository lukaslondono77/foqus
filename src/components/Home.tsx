import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '../utils/paths';

const features = [
  {
    icon: Users,
    title: 'Máximo 4 Personas',
    desc: 'Clases íntimas donde cada atleta recibe atención real. Sin multitudes, sin excusas.',
    delay: 0.1,
  },
  {
    icon: Target,
    title: 'Enfoque Individual',
    desc: 'Cada persona tiene un proceso único. Nos enfocamos exclusivamente en tu transformación.',
    delay: 0.2,
  },
  {
    icon: Zap,
    title: 'Resultados Reales',
    desc: 'Entrenamiento diseñado con propósito para aplstar tus metas y superar tus límites.',
    delay: 0.3,
  },
];

const stats = [
  { value: '4',    label: 'Personas Máx.' },
  { value: '100%', label: 'Personalizado'  },
  { value: '∞',    label: 'Resultados'     },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] texture-cracked">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background gym image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/gym1.jpg')" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        {/* Green/Purple vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-foqus-green-900/30 via-transparent to-hulk-purple/10" />

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-16">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-8"
          >
            <img
              src={getImagePath('foqusverde.jpg')}
              alt="FOQUS Logo"
              className="h-20 md:h-28 mx-auto drop-shadow-[0_0_30px_rgba(74,222,128,0.7)]"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.85] mb-6"
          >
            DESATA TU<br />
            <span className="text-foqus-green-400 text-glow-green drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              POTENCIAL
            </span>
          </motion.h1>

          {/* Sub-tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-display text-hulk-purple text-xl md:text-3xl tracking-[0.3em] uppercase mb-8 font-bold"
          >
            Entrenamiento Semipersonalizado
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Enfócate en ti. Entrena con propósito, no en masa.
            Máximo <strong className="text-white">4 personas</strong> por sesión para resultados garantizados.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate('/plans')}
              className="bg-foqus-green-500 hover:bg-foqus-green-400 text-black px-9 py-4 rounded font-display font-bold text-lg tracking-wider flex items-center justify-center gap-3 glow-green transition-all duration-300"
            >
              VER PLANES
              <ArrowRight size={22} strokeWidth={2.5} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate('/contact')}
              className="border-2 border-foqus-green-500 text-foqus-green-400 hover:bg-foqus-green-500/10 px-9 py-4 rounded font-display font-bold text-lg tracking-wider flex items-center justify-center gap-3 transition-all duration-300"
            >
              CONTÁCTANOS
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 1.6, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foqus-green-500 opacity-70"
        >
          <ChevronDown size={30} />
        </motion.div>
      </section>

      {/* ══ STATS STRIP ═══════════════════════════════════ */}
      <section className="bg-hulk-purple py-7 shadow-[0_0_30px_rgba(124,58,237,0.4)] relative z-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="font-display text-3xl md:text-5xl font-bold text-white leading-none drop-shadow-md">
                  {s.value}
                </div>
                <div className="font-display text-xs md:text-sm text-white/70 tracking-widest uppercase mt-1 font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT / FEATURES ══════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-display text-hulk-purple text-xs tracking-[0.35em] uppercase mb-3 block font-bold">
              ¿Quiénes Somos?
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase leading-tight mb-4">
              NO SOMOS UN GYM<br />
              <span className="text-foqus-green-400">SOMOS TU EQUIPO</span>
            </h2>
            <div className="divider-green mb-8 bg-gradient-to-r from-foqus-green-500 to-hulk-purple" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              En Foqus somos un gimnasio semipersonalizado que pone el énfasis en el proceso
              individual de cada persona. Nuestras clases se limitan a máximo{' '}
              <span className="text-foqus-green-400 font-bold">4 personas por hora</span>,
              garantizando un enfoque cercano, personalizado y enfocado en resultados reales.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: f.delay }}
                viewport={{ once: true }}
                className="card-hulk border-smashed p-8 text-center group cursor-default overflow-hidden"
              >
                <div className="w-16 h-16 rounded-full bg-hulk-purple/10 border border-hulk-purple/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-hulk-purple/20 group-hover:border-hulk-purple/50 transition-all duration-300">
                  <f.icon className="w-8 h-8 text-hulk-purple" />
                </div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3 group-hover:text-foqus-green-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECOND GYM IMAGE CTA ══════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gym2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-foqus-green-900/40 via-transparent to-hulk-purple/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-hulk-purple text-xs tracking-[0.35em] uppercase mb-3 block font-bold">
              Únete Ahora
            </span>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white uppercase leading-tight mb-8">
              ¿LISTO PARA <br />
              <span className="text-foqus-green-400 text-glow-green drop-shadow-[0_0_10px_var(--hulk-purple)]">COMENZAR?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Descubre el poder del entrenamiento semipersonalizado. Tu transformación empieza hoy.
            </p>
            <motion.button
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate('/plans')}
              className="bg-hulk-purple hover:bg-hulk-purple-light text-white px-12 py-5 rounded font-display font-bold text-xl tracking-wider shadow-[0_0_25px_rgba(124,58,237,0.5)] inline-flex items-center gap-4 group transition-all duration-300"
            >
              VER PLANES
              <ArrowRight size={24} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
