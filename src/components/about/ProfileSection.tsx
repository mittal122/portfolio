import React from 'react';
import { motion } from 'framer-motion';

export const ProfileSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Mittal Domadiya"
                className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Mittal Domadiya</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A seasoned DevOps Engineer with expertise in containerization, cloud infrastructure, and automation. 
              Specializing in B2B and B2C marketing strategies, I bridge the gap between technical excellence 
              and business growth through innovative solutions and strategic thinking.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">Experience</h3>
                <p className="text-gray-300">5+ years in DevOps</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">Focus</h3>
                <p className="text-gray-300">Cloud & Automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};