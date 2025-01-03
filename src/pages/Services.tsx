import React from 'react';
import { motion } from 'framer-motion';
import { Container, Cloud, Server, GitBranch, Database, LineChart } from 'lucide-react';
import { ServiceCard } from '../components/services/ServiceCard';

const services = [
  {
    title: 'Cloud Infrastructure',
    description: 'Design and implementation of scalable cloud solutions using AWS, focusing on high availability and cost optimization.',
    icon: Cloud
  },
  {
    title: 'Container Orchestration',
    description: 'Expert Kubernetes and Docker implementation for efficient container management and microservices architecture.',
    icon: Container
  },
  {
    title: 'DevOps Automation',
    description: 'End-to-end CI/CD pipeline setup and automation of deployment processes for faster delivery.',
    icon: GitBranch
  },
  {
    title: 'Database Management',
    description: 'Efficient MySQL database administration, optimization, and maintenance for optimal performance.',
    icon: Database
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'Comprehensive monitoring and alerting solutions to ensure system reliability and performance.',
    icon: LineChart
  },
  {
    title: 'Server Management',
    description: 'Linux server administration, security hardening, and performance optimization.',
    icon: Server
  }
];

export const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            My Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive DevOps solutions to streamline your development workflow and optimize infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};