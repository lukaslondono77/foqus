import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Contact() {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (location.state) {
      setSelectedPlan(location.state.selectedPlan || '');
      setMessage(location.state.message || '');
      setFormData(prev => ({
        ...prev,
        plan: location.state.selectedPlan || '',
        message: location.state.message || ''
      }));
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'plan') {
      setSelectedPlan(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing time
    setTimeout(() => {
      // Create WhatsApp message with form data
      const phone = '573155219206'; // WhatsApp number (without +)
      const whatsappMessage = `*Nuevo mensaje desde Foqus Fitness*

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Plan de interés:* ${formData.plan || 'No especificado'}

*Mensaje:*
${formData.message}

---
Enviado desde foqus.com`;

      // Open WhatsApp with the formatted message
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          plan: '',
          message: ''
        });
        setSelectedPlan('');
        setMessage('');
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  const openWhatsApp = () => {
    const phone = '573155219206'; // WhatsApp number (without +)
    const whatsappMessage = selectedPlan 
      ? `Hola, me interesa reservar el ${selectedPlan}. ¿Podrían darme más información?`
      : 'Hola, me interesa conocer más sobre los planes de Foqus.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

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
            Contáctanos
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ¿Listo para comenzar tu transformación? Estamos aquí para ayudarte a alcanzar tus objetivos.
          </p>
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 bg-foqus-green-100 border border-foqus-green-300 rounded-lg p-4 inline-block"
            >
                              <p className="text-foqus-green-800 font-semibold">
                  Plan seleccionado: <span className="text-foqus-green-600">{selectedPlan}</span>
                </p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 relative"
          >
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-foqus-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foqus-green-800 mb-2">¡Mensaje Enviado!</h3>
                                  <p className="text-foqus-green-600">
                  Tu mensaje se ha enviado por WhatsApp. Te contactaremos pronto.
                </p>
                </div>
              </motion.div>
            )}
            
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-slate-700 mb-2">
                  Plan de Interés
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecciona un plan</option>
                  <option value="Plan Individual">Plan Individual</option>
                  <option value="Plan Dúo">Plan Dúo</option>
                  <option value="Plan Triple">Plan Triple</option>
                  <option value="Plan Grupal">Plan Grupal</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tus objetivos y cómo podemos ayudarte..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar por WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-foqus-green-500 to-foqus-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Prefieres WhatsApp Directo?</h3>
                              <p className="text-foqus-green-100 mb-6">
                  Responde más rápido y recibe atención inmediata a través de WhatsApp.
                </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                                  className="bg-white text-foqus-green-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chatear por WhatsApp
              </motion.button>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Teléfono</h4>
                    <p className="text-slate-600">+57 315 521 9206</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Correo Electrónico</h4>
                    <p className="text-slate-600">info@foqus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Dirección</h4>
                    <p className="text-slate-600">
                      Cra 83c #33-25 (Segundo piso)<br />
                      Medellín, Colombia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Horarios</h4>
                    <p className="text-slate-600">
                      Lunes a Viernes: 6:00 AM - 10:00 PM<br />
                      Sábados: 7:00 AM - 8:00 PM<br />
                      Domingos: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Síguenos</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/foqus.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="font-bold text-sm">IG</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="font-bold text-sm">FB</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="font-bold text-sm">TT</span>
                </motion.button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                ¡Síguenos en Instagram para ver nuestros entrenamientos y resultados!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 