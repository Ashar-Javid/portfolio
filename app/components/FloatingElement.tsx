"use client"

import { motion } from "framer-motion"
import type React from "react" // Import React

interface FloatingElementProps {
  emoji: string
  delay?: number
}

const FloatingElement: React.FC<FloatingElementProps> = ({ emoji, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [-20, 20],
        opacity: [0, 1, 0],
        transition: {
          y: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          },
          opacity: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          },
          delay,
        },
      }}
      className="text-4xl absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {emoji}
    </motion.div>
  )
}

export default FloatingElement

