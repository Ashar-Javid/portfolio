"use client"

import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1,
        }}
        className="w-16 h-16 bg-emerald-400"
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white text-2xl font-bold ml-4"
      >
        Loading...
      </motion.h2>
    </div>
  )
}

export default LoadingScreen

