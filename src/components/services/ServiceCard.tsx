import React from 'react';
import { motion } from 'framer-motion';

export const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center justify-center mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-indigo-600 rounded-lg"
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-3">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};