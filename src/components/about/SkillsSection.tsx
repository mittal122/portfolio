import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Docker', level: 90 },
  { name: 'Kubernetes', level: 85 },
  { name: 'AWS', level: 88 },
  { name: 'Python', level: 82 },
  { name: 'Java', level: 75 },
  { name: 'MySQL', level: 80 },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-indigo-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-indigo-600 h-2.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};