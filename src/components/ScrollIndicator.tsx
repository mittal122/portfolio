import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <ChevronDown className="h-8 w-8 text-white" />
    </motion.div>
  );
};