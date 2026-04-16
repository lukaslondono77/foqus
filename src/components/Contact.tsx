import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WHATSAPP_PHONE = '573245782195';

export default function Contact() {
  const location = useLocation() as any; // Type location or cast if needed
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-fill if navigated from Plans page
  useEffect(() => {
    if (location.state) {
      setFormData((prev: any) => ({
        ...prev,
        plan:    location.state.selectedPlan || '',
        message: location.state.message || '',
      }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const whatsappMessage =
`*Nuevo mensaje desde Foqus Fitness*

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Plan de interés:* ${formData.plan || 'No especificado'}

*Mensaje:*
${formData.message}

---
Enviado desde foqus.com`;

      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', plan: '', message: '' });
        setShowSuccess(false);
      }, 3500);
    }, 1400);
  };

  const openWhatsApp = () => {
    const msg = formData.plan
      ? `Hola, me interesa reservar el ${formData.plan}. ¿Podrían darme más información?`
      : 'Hola, me interesa conocer más sobre los planes de Foqus.';
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputClass = `
    w-full bg-[#0d0d0d] border border-foqus-green-500/25 text-white rounded-lg
    px-4 py-3 placeholder-gray-600
    focus:outline-none focus:border-hulk-purple focus:ring-1 focus:ring-hulk-purple/50
    transition-colors duration-200
  `;
  const labelClass = 'block font-display font-semibold text-xs tracking-widest text-gray-400 uppercase mb-2 group-focus-within:text-hulk-purple transition-colors';

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
            Escríbenos
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase leading-tight mb-4">
            CONTÁCT<span className="text-foqus-green-400 text-glow-green drop-shadow-[0_0_10px_var(--hulk-purple)]">ANOS</span>
          </h1>
          <div className="divider-green mb-6 bg-gradient-to-r from-foqus-green-500 to-hulk-purple mx-auto" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Listo para comenzar tu transformación? Estamos aquí para ayudarte.
          </p>
          {formData.plan && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 inline-block bg-hulk-purple/10 border border-hulk-purple/40 rounded-lg px-6 py-3 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              <p className="font-display text-sm text-hulk-purple-light font-bold tracking-widest uppercase">
                Plan seleccionado: {formData.plan}
              </p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-[#111111] border border-foqus-green-500/20 rounded-xl p-8 overflow-hidden border-smashed shadow-[0_0_30px_rgba(74,222,128,0.05)]"
          >
            {/* Success overlay */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#0a1a0a] border border-foqus-green-500/40 rounded-xl flex items-center justify-center z-20"
              >
                <div className="text-center px-8">
                  <CheckCircle className="w-16 h-16 text-foqus-green-400 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">
                    ¡MENSAJE ENVIADO!
                  </h3>
                  <p className="text-gray-400">
                    Tu mensaje fue enviado por WhatsApp.<br />Te contactaremos pronto.
                  </p>
                </div>
              </motion.div>
            )}

            <h2 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-7">
              Envíanos un Mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Nombre Completo</label>
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleChange} required
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input
                    type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} required
                    placeholder="Tu número"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Correo Electrónico</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} required
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Plan de Interés</label>
                <select
                  name="plan" value={formData.plan}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecciona un plan</option>
                  <option value="Plan Individual">Plan Individual</option>
                  <option value="Plan Dúo">Plan Dúo</option>
                  <option value="Plan Triple">Plan Triple</option>
                  <option value="Plan Grupal">Plan Grupal</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Mensaje</label>
                <textarea
                  name="message" rows={4} value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tus objetivos..."
                  className={inputClass}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded font-display font-bold text-sm tracking-widest flex items-center justify-center gap-3 transition-all duration-200
                  ${isSubmitting
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-hulk-purple hover:bg-hulk-purple-light text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    <Send size={18} strokeWidth={2.5} />
                    ENVIAR POR WHATSAPP
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── CONTACT INFO ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct WhatsApp CTA */}
            <div className="bg-gradient-to-br from-hulk-purple to-hulk-purple-dark rounded-xl p-8 shadow-[0_0_30px_rgba(124,58,237,0.3)] relative overflow-hidden border-smashed">
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-white/70 mb-6 text-sm">
                  Respuesta rápida y atención inmediata por WhatsApp.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsApp}
                  className="bg-white text-hulk-purple hover:bg-gray-100 px-7 py-3 rounded font-display font-bold text-sm tracking-widest flex items-center gap-2 transition-colors duration-200 shadow-lg"
                >
                  <MessageCircle size={18} strokeWidth={2.5} />
                  CHATEAR AHORA
                </motion.button>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-[#111111] border border-foqus-green-500/20 rounded-xl p-8 space-y-6 border-smashed">
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                Configura tu Transformación
              </h3>

              {[
                { icon: Phone,  label: 'Teléfono',   value: '+57 324 578 2195', color: 'text-foqus-green-400' },
                { icon: Mail,   label: 'Email',       value: 'info@foqus.com', color: 'text-hulk-purple-light' },
                { icon: MapPin, label: 'Dirección',   value: 'Cra 83c #33-25 (Segundo piso)\nMedellín, Colombia', color: 'text-foqus-green-400' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-5 group">
                  <div className={`w-11 h-11 rounded-full bg-gray-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-current transition-colors ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-0.5">{label}</div>
                    <p className="text-gray-300 text-sm whitespace-pre-line font-medium leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foqus-green-500/10 border border-foqus-green-500/25 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-foqus-green-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-xs text-gray-500 tracking-widest uppercase mb-0.5">Horarios</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Lunes a Viernes: 6:00 AM – 10:00 PM<br />
                    Sábados: 7:00 AM – 8:00 PM<br />
                    Domingos: 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social card */}
            <div className="bg-[#111111] border border-foqus-green-500/20 rounded-xl p-8">
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-4">
                Síguenos
              </h3>
              <motion.a
                href="https://www.instagram.com/foqus.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded font-display font-bold text-sm tracking-widest transition-all duration-200 shadow-lg"
              >
                <Instagram size={18} />
                @foqus.com.co
              </motion.a>
              <p className="text-gray-600 text-xs mt-3 tracking-wide">
                Entrenamientos, resultados y comunidad Foqus en Instagram.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
