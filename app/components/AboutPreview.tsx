"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const AboutPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-emerald-400">About Me</h2>
      <p className="text-lg text-center text-gray-300 mb-4">
        AI Engineer and innovator with a passion for creating intelligent solutions. Founder of XploreBot and co-founder
        of E-Deviser, pushing the boundaries of AI technology.
      </p>
      <div className="text-center">
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition-colors"
          >
            Learn More About Me
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutPreview

