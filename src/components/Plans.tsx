import { motion } from 'framer-motion';
import { Check, Users, User, UserCheck, Users2, MessageCircle } from 'lucide-react';

const WHATSAPP_PHONE = '573245782195';

const plans = [
  {
    name: 'Plan Individual',
    tag: 'SOLO',
    icon: User,
    description: 'Entrenamiento personalizado para una persona',
    featured: false,
    prices: [
      { classes: 1,  price: 50000  },
      { classes: 8,  price: 320000 },
      { classes: 12, price: 336000 },
      { classes: 20, price: 392000 },
    ],
  },
  {
    name: 'Plan Dúo',
    tag: 'POPULAR',
    icon: UserCheck,
    description: 'Entrenamiento para 2 personas',
    featured: true,
    prices: [
      { classes: 1,  price: 80000  },
      { classes: 8,  price: 512000 },
      { classes: 12, price: 537600 },
      { classes: 20, price: 627200 },
    ],
  },
  {
    name: 'Plan Triple',
    tag: 'TRIO',
    icon: Users,
    description: 'Entrenamiento para 3 personas',
    featured: false,
    prices: [
      { classes: 1,  price: 90000  },
      { classes: 8,  price: 576000 },
      { classes: 12, price: 604800 },
      { classes: 20, price: 705600 },
    ],
  },
  {
    name: 'Plan Grupal',
    tag: 'EQUIPO',
    icon: Users2,
    description: 'Entrenamiento para 4 personas',
    featured: false,
    prices: [
      { classes: 1,  price: 100000 },
      { classes: 8,  price: 640000 },
      { classes: 12, price: 672000 },
      { classes: 20, price: 784000 },
    ],
  },
];

const whys = [
  { title: 'Atención Personalizada', desc: 'Máximo 4 personas por clase para un enfoque individual real.' },
  { title: 'Flexibilidad Total',     desc: 'Elige el plan y cantidad de clases que mejor se adapten a ti.' },
  { title: 'Resultados Garantizados', desc: 'Entrenamiento eficiente diseñado para lograr tus objetivos.' },
];

export default function Plans() {
  const handleReserve = (planName: string) => {
    const message = `Hola, me interesa reservar el ${planName}. ¿Podrían darme más información sobre precios y horarios disponibles?`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-display text-foqus-green-500 text-xs tracking-[0.35em] uppercase mb-3 block">
            Elige Tu Plan
          </span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white uppercase leading-tight mb-4">
            PLANES DE{' '}
            <span className="text-foqus-green-400 text-glow-green">ENTRENAMIENTO</span>
          </h1>
          <div className="divider-green mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Distintos planes según el número de personas y clases por mes.
            Precios en pesos colombianos <span className="text-foqus-green-400 font-semibold">(COP)</span>.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 border-smashed
                ${plan.featured
                  ? 'border-2 border-hulk-purple glow-pulse shadow-[0_0_30px_rgba(124,58,237,0.3)]'
                  : 'border border-foqus-green-500/25 hover:border-hulk-purple/60 hover:glow-green-sm'
                }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 text-center">
                  <span className="font-display font-bold text-xs tracking-widest bg-hulk-purple text-white px-4 py-1 inline-block">
                    ⭐ MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Card header */}
              <div className={`${plan.featured ? 'pt-9' : 'pt-6'} pb-6 px-6 bg-gradient-to-br from-[#0f1f0f] to-[#111111] text-center border-b border-foqus-green-500/20`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border
                  ${plan.featured ? 'bg-hulk-purple/20 border-hulk-purple/40' : 'bg-foqus-green-500/15 border-foqus-green-500/30'}`}>
                  <plan.icon className={`w-7 h-7 ${plan.featured ? 'text-hulk-purple-light' : 'text-foqus-green-400'}`} />
                </div>
                <span className={`font-display text-xs tracking-[0.3em] uppercase block mb-1 font-bold
                  ${plan.featured ? 'text-hulk-purple-light' : 'text-foqus-green-500'}`}>
                  {plan.tag}
                </span>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Prices */}
              <div className="flex-1 bg-[#111111] px-5 py-5 space-y-3">
                {plan.prices.map((p, pi) => (
                  <div
                    key={pi}
                    className={`flex justify-between items-center bg-[#0d0d0d] border rounded-lg px-4 py-3 transition-colors
                      ${plan.featured ? 'border-hulk-purple/30 group-hover:border-hulk-purple/50' : 'border-foqus-green-500/15'}`}
                  >
                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-hulk-purple-light' : 'text-foqus-green-500'}`} />
                      <span className="text-gray-300 text-sm font-semibold">
                        {p.classes} {p.classes === 1 ? 'clase' : 'clases'}
                      </span>
                    </div>
                    <span className={`font-display font-bold text-base
                      ${plan.featured ? 'text-hulk-purple-light' : 'text-foqus-green-400'}`}>
                      ${p.price.toLocaleString('es-CO')}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#111111] px-5 pb-6 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, rotate: plan.featured ? 1 : 0 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleReserve(plan.name)}
                  className={`w-full py-3 px-5 rounded font-display font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-200
                    ${plan.featured
                      ? 'bg-hulk-purple hover:bg-hulk-purple-light text-white shadow-lg'
                      : 'bg-foqus-green-500/15 hover:bg-foqus-green-500 border border-foqus-green-500/50 hover:border-foqus-green-500 text-foqus-green-400 hover:text-black'
                    }`}
                >
                  <MessageCircle size={15} strokeWidth={2.5} />
                  RESERVAR POR WHATSAPP
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Foqus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-br from-[#0f1a0f] to-[#111111] border border-hulk-purple/20 border-smashed rounded-xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase text-center mb-2">
            ¿POR QUÉ ELEGIR{' '}
            <span className="text-hulk-purple">FOQUS?</span>
          </h3>
          <div className="divider-green mb-8 bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
          <div className="grid md:grid-cols-3 gap-6">
            {whys.map((w, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-hulk-purple/10 border border-hulk-purple/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-hulk-purple" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase text-sm tracking-wide mb-1">
                    {w.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
