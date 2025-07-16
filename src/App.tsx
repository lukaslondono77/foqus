import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Home from './components/Home';
import Plans from './components/Plans';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Install from './components/Install';
import About from './components/About';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

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

  return (
    <Router>
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/images/foqusverde.jpg" 
                alt="FOQUS" 
                className="h-8 w-auto"
              />
            </Link>
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
            <div className="md:hidden">
              <button className="text-white hover:text-green-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/install" element={<Install />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
