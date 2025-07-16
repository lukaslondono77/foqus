import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleViewPlans = () => {
    navigate('/plans');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <img 
                src="/images/foqusverde.jpg" 
                alt="FOQUS Logo" 
                className="h-24 md:h-32 mx-auto mb-6"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-300">
              Entrenamiento Semipersonalizado
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Enfócate en ti. Entrena con propósito, no en masa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewPlans}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto"
            >
              Ver Planes
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">¿Quiénes somos?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-slate-700 mb-8">
                En Foqus, somos un gimnasio semipersonalizado que pone el énfasis en el proceso individual de cada persona. 
                No somos un gimnasio masivo: nuestras clases se limitan a máximo 4 personas por hora, garantizando un enfoque 
                cercano, personalizado y enfocado en resultados reales.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-slate-50"
            >
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Máximo 4 Personas</h3>
              <p className="text-slate-600">Clases íntimas para atención personalizada y resultados garantizados.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-slate-50"
            >
              <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Enfoque Individual</h3>
              <p className="text-slate-600">Cada persona tiene un proceso único. Nos enfocamos en tu transformación personal.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-slate-50"
            >
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Resultados Reales</h3>
              <p className="text-slate-600">Entrenamiento eficiente y efectivo diseñado para lograr tus objetivos.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 