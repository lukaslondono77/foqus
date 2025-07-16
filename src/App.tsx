import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Download, MessageCircle, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Plans from './components/Plans';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Install from './components/Install';
import About from './components/About';
import { getImagePath } from './utils/paths';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

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
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const handleWhatsAppClick = () => {
    const phone = '573155219206';
    const message = 'Hola, me interesa conocer más sobre Foqus Fitness.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
              <img 
                src={getImagePath('foqusverde.jpg')}
                alt="FOQUS" 
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="hover:text-green-400 transition-colors">Inicio</Link>
              <Link to="/plans" className="hover:text-green-400 transition-colors">Planes</Link>
              <Link to="/gallery" className="hover:text-green-400 transition-colors">Galería</Link>
              <Link to="/contact" className="hover:text-green-400 transition-colors">Contacto</Link>
              <Link to="/about" className="hover:text-green-400 transition-colors">Sobre Nosotros</Link>
              
              {/* Install Button */}
              {isInstallable && (
                <button
                  onClick={handleInstallClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  <Download size={16} />
                  Instalar App
                </button>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-green-400 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-green-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Inicio
              </Link>
              <Link 
                to="/plans" 
                className="block text-white hover:text-green-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Planes
              </Link>
              <Link 
                to="/gallery" 
                className="block text-white hover:text-green-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Galería
              </Link>
              <Link 
                to="/contact" 
                className="block text-white hover:text-green-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
              <Link 
                to="/about" 
                className="block text-white hover:text-green-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </Link>
              
              {/* Mobile Install Button */}
              {isInstallable && (
                <button
                  onClick={() => {
                    handleInstallClick();
                    closeMobileMenu();
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Download size={16} />
                  Instalar App
                </button>
              )}
            </div>
          </motion.div>
        )}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/install" element={<Install />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-200 hover:shadow-xl"
        style={{
          paddingLeft: 'max(1rem, env(safe-area-inset-left))',
          paddingRight: 'max(1rem, env(safe-area-inset-right))',
          bottom: 'max(1.5rem, env(safe-area-inset-bottom))'
        }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </Router>
  );
}

export default App;
