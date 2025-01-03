import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/mittal-domadiya'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/mittal-domadiya'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@mittaldomadiya.com'
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          <link.icon className="w-6 h-6 text-indigo-400" />
        </motion.a>
      ))}
    </div>
  );
};