"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    title: "Best AI Project Award",
    description: "Received the Best AI Project Award at the National Tech Conference 2023.",
  },
  {
    title: "Published Research Paper",
    description: "Published a research paper on advanced machine learning techniques in a top-tier journal.",
  },
  {
    title: "Hackathon Winner",
    description: "Won first place in the AI track at the Global Hackathon 2022.",
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

