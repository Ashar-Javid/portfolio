"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  { name: "Machine Learning", icon: "🤖", description: "Expertise in various ML algorithms and frameworks" },
  { name: "Deep Learning", icon: "🧠", description: "Proficient in neural networks and deep learning architectures" },
  { name: "Computer Vision", icon: "👁️", description: "Experience in image processing and object detection" },
  { name: "Natural Language Processing", icon: "💬", description: "Skilled in text analysis and language models" },
  { name: "Python", icon: "🐍", description: "Advanced proficiency in Python programming" },
  { name: "TensorFlow", icon: "📊", description: "Extensive experience with TensorFlow framework" },
  { name: "PyTorch", icon: "🔥", description: "Proficient in PyTorch for deep learning projects" },
  { name: "Data Analysis", icon: "📈", description: "Strong skills in data manipulation and visualization" },
  { name: "Cloud Computing", icon: "☁️", description: "Experience with AWS and Google Cloud Platform" },
  { name: "Robotics", icon: "🦾", description: "Knowledge of robotic systems and control algorithms" },
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-emerald-400"
        >
          Skills
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-cyan-300">{skill.name}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredSkill ? 1 : 0 }}
          className="mt-8 text-center text-xl text-cyan-300"
        >
          {hoveredSkill && `Exploring ${hoveredSkill}`}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

