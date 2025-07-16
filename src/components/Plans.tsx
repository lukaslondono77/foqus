import { motion } from 'framer-motion';
import { Check, Users, User, UserCheck, Users2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Plan Individual',
    icon: User,
    description: 'Entrenamiento personalizado para una persona',
    prices: [
      { classes: 1, price: 50000 },
      { classes: 8, price: 320000 },
      { classes: 12, price: 336000 },
      { classes: 20, price: 392000 }
    ]
  },
  {
    name: 'Plan Dúo',
    icon: UserCheck,
    description: 'Entrenamiento para 2 personas',
    prices: [
      { classes: 1, price: 80000 },
      { classes: 8, price: 512000 },
      { classes: 12, price: 537600 },
      { classes: 20, price: 627200 }
    ]
  },
  {
    name: 'Plan Triple',
    icon: Users,
    description: 'Entrenamiento para 3 personas',
    prices: [
      { classes: 1, price: 90000 },
      { classes: 8, price: 576000 },
      { classes: 12, price: 604800 },
      { classes: 20, price: 705600 }
    ]
  },
  {
    name: 'Plan Grupal',
    icon: Users2,
    description: 'Entrenamiento para 4 personas',
    prices: [
      { classes: 1, price: 100000 },
      { classes: 8, price: 640000 },
      { classes: 12, price: 672000 },
      { classes: 20, price: 784000 }
    ]
  }
];

export default function Plans() {
  const navigate = useNavigate();

  const handleReservePlan = (planName: string) => {
    // Option 1: Navigate to contact page
    navigate('/contact', { 
      state: { 
        selectedPlan: planName,
        message: `Me interesa reservar el ${planName}. ¿Podrían darme más información?`
      }
    });
    
    // Option 2: Open WhatsApp (uncomment if you prefer this)
    // const phone = '+573142073792'; // User's number for testing
    // const message = `Hola, me interesa reservar el ${planName}. ¿Podrían darme más información?`;
    // window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Planes de Entrenamiento
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofrecemos distintos planes según el número de personas y la cantidad de clases por mes. 
            Todos nuestros precios están expresados en pesos colombianos (COP).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center">
                <plan.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-green-100">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {plan.prices.map((price, priceIndex) => (
                    <div key={priceIndex} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-slate-700">
                          {price.classes} {price.classes === 1 ? 'clase' : 'clases'}
                        </span>
                      </div>
                      <span className="font-bold text-lg text-slate-900">
                        ${price.price.toLocaleString('es-CO')}
                      </span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReservePlan(plan.name)}
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Reservar Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Por qué elegir Foqus?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Atención Personalizada</h4>
                  <p className="text-slate-600 text-sm">Máximo 4 personas por clase para un enfoque individual.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Flexibilidad</h4>
                  <p className="text-slate-600 text-sm">Elige el plan que mejor se adapte a tus necesidades.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Resultados Garantizados</h4>
                  <p className="text-slate-600 text-sm">Entrenamiento eficiente diseñado para lograr tus objetivos.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 