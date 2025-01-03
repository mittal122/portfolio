import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-gray-800 rounded-lg"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-300">Your message has been sent successfully.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          value={formState.message}
          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
          required
          rows={4}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};