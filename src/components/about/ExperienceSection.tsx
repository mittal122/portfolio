import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023',
    title: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    description: 'Leading cloud infrastructure and automation initiatives.'
  },
  {
    year: '2021',
    title: 'DevOps Engineer',
    company: 'Digital Innovations Ltd.',
    description: 'Implemented CI/CD pipelines and container orchestration.'
  },
  {
    year: '2019',
    title: 'Systems Engineer',
    company: 'Cloud Services Co.',
    description: 'Managed AWS infrastructure and deployment automation.'
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Professional Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-indigo-600 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-indigo-600 rounded-full" />
              <div className="bg-gray-800 p-6 rounded-lg ml-4">
                <span className="text-indigo-400 font-semibold">{exp.year}</span>
                <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                <p className="text-gray-400 mt-1">{exp.company}</p>
                <p className="text-gray-300 mt-4">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};