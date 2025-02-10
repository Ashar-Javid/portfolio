"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const skills = [
  { name: "Machine Learning", icon: "🤖" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "Natural Language Processing", icon: "💬" },
  { name: "Python", icon: "🐍" },
]

const SkillsPreview = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-emerald-400">Skills Snapshot</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <span className="text-4xl mr-2">{skill.icon}</span>
            <span className="text-lg font-semibold text-cyan-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredSkill ? 1 : 0 }}
        className="mt-4 text-center text-xl text-cyan-300"
      >
        {hoveredSkill && `Exploring ${hoveredSkill}`}
      </motion.div>
      <div className="text-center mt-4">
        <Link href="/skills">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors"
          >
            View All Skills
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default SkillsPreview

