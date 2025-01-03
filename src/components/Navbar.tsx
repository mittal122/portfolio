import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Code2 className="h-8 w-8 text-indigo-500" />
            </motion.div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => onNavigate(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-200 hover:text-indigo-400 px-3 py-2 text-sm font-medium relative group"
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};