import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="min-h-[50vh] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          DevOps Engineer & Marketing Strategist
        </motion.p>
      </motion.div>
    </section>
  );
};