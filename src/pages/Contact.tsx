import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { SocialLinks } from '../components/contact/SocialLinks';

export const Contact = () => {
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16">
          <div className="flex flex-col items-center space-y-12">
            <ContactForm />
            <div className="w-full max-w-md">
              <h3 className="text-xl font-semibold text-white text-center mb-6">
                Or connect with me on social media
              </h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};