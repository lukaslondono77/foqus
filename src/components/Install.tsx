import { motion } from 'framer-motion';
import { Download, Smartphone, Globe, Zap, CheckCircle, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setIsInstalled(true);
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Acceso Rápido',
      description: 'Accede a Foqus directamente desde tu pantalla de inicio'
    },
    {
      icon: Zap,
      title: 'Funciona Offline',
      description: 'Consulta información incluso sin conexión a internet'
    },
    {
      icon: Globe,
      title: 'Experiencia Nativa',
      description: 'Se siente como una aplicación nativa de tu dispositivo'
    },
    {
      icon: CheckCircle,
      title: 'Actualizaciones Automáticas',
      description: 'Siempre tendrás la versión más reciente de la app'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Instala Foqus en tu Teléfono
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Lleva Foqus contigo a todas partes. Instala nuestra aplicación web progresiva 
            y accede a tus planes, información de contacto y más desde tu dispositivo móvil.
          </p>
        </motion.div>

        {/* Main Install Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Install Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {isInstalled ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-foqus-green-500 rounded-2xl p-8 text-white"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  ¡Foqus ya está instalado!
                </h3>
                <p className="text-foqus-green-100">
                  La aplicación ya está disponible en tu dispositivo.
                </p>
              </motion.div>
            ) : isInstallable ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-foqus-green-500 to-foqus-green-600 rounded-2xl p-8 text-white"
              >
                <Download className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  ¡Instala Foqus Ahora!
                </h3>
                <p className="text-foqus-green-100 mb-6">
                  Tu navegador soporta la instalación. Haz clic en el botón para instalar Foqus en tu dispositivo.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstallClick}
                  className="bg-white text-foqus-green-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto"
                >
                  <Download size={20} />
                  Instalar Aplicación
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
              >
                <ArrowDown className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Instala Foqus
                </h3>
                <p className="text-blue-100 mb-6">
                  Usa el botón de instalación de tu navegador para agregar Foqus a tu pantalla de inicio.
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm">
                    Busca el ícono de instalación en la barra de direcciones de tu navegador
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Beneficios de la Aplicación
            </h3>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <feature.icon className="w-8 h-8 text-foqus-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Manual Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Instrucciones Manuales
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-foqus-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Abre Foqus en tu navegador</h4>
                <p className="text-slate-300 text-sm">Ve a foqus.com desde tu dispositivo móvil</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-foqus-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Busca el botón de instalación</h4>
                <p className="text-slate-300 text-sm">
                  En Chrome: toca el ícono de menú → "Instalar aplicación"<br/>
                  En Safari: toca el botón compartir → "Añadir a pantalla de inicio"
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-foqus-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Confirma la instalación</h4>
                <p className="text-slate-300 text-sm">Sigue las instrucciones de tu dispositivo para completar la instalación</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Browser Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Compatibilidad
            </h3>
            <p className="text-slate-300 mb-6">
              La aplicación es compatible con la mayoría de navegadores modernos en dispositivos móviles y de escritorio.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Chrome</h4>
                <p className="text-slate-300">Compatible</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Safari</h4>
                <p className="text-slate-300">Compatible</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Firefox</h4>
                <p className="text-slate-300">Compatible</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Edge</h4>
                <p className="text-slate-300">Compatible</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 