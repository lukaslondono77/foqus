import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Download, MessageCircle, Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Plans from './components/Plans';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Install from './components/Install';
import { getImagePath } from './utils/paths';

const navLinks = [
  { to: '/', label: 'INICIO' },
  { to: '/plans', label: 'PLANES' },
  { to: '/gallery', label: 'GALERÍA' },
  { to: '/contact', label: 'CONTACTO' },
  { to: '/about', label: 'NOSOTROS' },
];

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

function NavLink({ to, label, onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-3 py-2 font-display font-semibold text-sm tracking-widest transition-colors duration-200 group
        ${isActive ? 'text-foqus-green-400' : 'text-gray-300 hover:text-foqus-green-400'}`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300
          ${isActive ? 'w-full bg-hulk-purple' : 'w-0 group-hover:w-full bg-foqus-green-400'}`}
      />
    </Link>
  );
}

function AppContent() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handler as any);
    return () => window.removeEventListener('beforeinstallprompt', handler as any);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;
    if (outcome === 'accepted') console.log('Install accepted');
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const handleWhatsAppClick = () => {
    const phone = '573245782195';
    const message = 'Hola, me interesa conocer más sobre Foqus Fitness.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-foqus-green-500/25 shadow-[0_2px_20px_rgba(0,0,0,0.6)]'
            : 'bg-[#0a0a0a] border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2 group shrink-0">
              <img
                src={getImagePath('foqusverde.jpg')}
                alt="FOQUS"
                className="h-9 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink key={link.to} to={link.to} label={link.label} />
              ))}
              {isInstallable && (
                <button
                  onClick={handleInstallClick}
                  className="ml-4 bg-foqus-green-500 hover:bg-foqus-green-400 text-black px-4 py-2 rounded font-display font-bold text-xs tracking-widest flex items-center gap-2 transition-all duration-200"
                >
                  <Download size={13} strokeWidth={2.5} />
                  INSTALAR
                </button>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen((v: boolean) => !v)}
              className="md:hidden text-foqus-green-400 hover:text-foqus-green-300 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-b border-foqus-green-500/20 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    onClick={closeMobileMenu}
                  />
                ))}
                {isInstallable && (
                  <button
                    onClick={() => { handleInstallClick(); closeMobileMenu(); }}
                    className="w-full mt-3 bg-foqus-green-500 hover:bg-foqus-green-400 text-black py-3 px-4 rounded font-display font-bold text-sm tracking-widest flex items-center justify-center gap-2"
                  >
                    <Download size={15} />
                    INSTALAR APP
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* ── PAGES ── */}
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/plans"   element={<Plans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/install" element={<Install />} />
        <Route path="/about"   element={<About />} />
      </Routes>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080808] border-t-2 border-hulk-purple/30 py-10 texture-cracked">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={getImagePath('foqusverde.jpg')}
                alt="FOQUS"
                className="h-7 w-auto opacity-70 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]"
              />
              <span className="font-display text-xs text-gray-400 tracking-[0.2em]">FITNESS & WELLNESS</span>
            </div>

            <div className="flex items-center gap-2 text-foqus-green-500">
              <Dumbbell size={14} className="text-hulk-purple" />
              <span className="font-display text-xs text-gray-500 tracking-[0.18em] uppercase">Unleash Your Potential</span>
              <Dumbbell size={14} className="text-hulk-purple" />
            </div>

            <div className="text-xs text-gray-600 text-center font-medium">
              © 2025 FOQUS FITNESS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="fixed right-6 z-50 w-16 h-16 bg-foqus-green-500 hover:bg-hulk-purple text-black rounded-full flex items-center justify-center glow-pulse transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={30} strokeWidth={2.5} />
      </motion.button>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
