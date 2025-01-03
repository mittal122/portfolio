import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Code2 className="h-16 w-16 text-indigo-500" />
      </motion.div>
    </motion.div>
  );
};