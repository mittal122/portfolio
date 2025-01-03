import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Scene3D } from './components/Scene3D';
import { ScrollIndicator } from './components/ScrollIndicator';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page.toLowerCase());
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
            <Scene3D />
            
            <main className="relative min-h-screen flex items-center justify-center px-4">
              <div className="text-center z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
                >
                  Mittal Domadiya
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                  DevOps Engineer & Marketing Strategist
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                  onClick={() => handleNavigation('about')}
                >
                  Explore My Work
                </motion.button>
              </div>

              <ScrollIndicator />
            </main>
          </div>
        );
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onNavigate={handleNavigation} />
          {renderPage()}
        </>
      )}
    </>
  );
}