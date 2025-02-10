import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="text-center"
      >
        {/* Your existing content */}
      </motion.div>
    </motion.section>
  );
} 