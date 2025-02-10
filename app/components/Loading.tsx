'use client';

import { motion } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900/80 backdrop-blur-xl flex items-center justify-center z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "linear"
        }}
        className="text-blue-500"
      >
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-4 text-gray-300 text-lg"
      >
        Loading Innovation...
      </motion.p>
    </motion.div>
  );
} 