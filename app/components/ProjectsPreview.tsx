"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "XploreBot",
    image: "/XploreBot.png",
    url:"https://github.com/Ashar-Javid",
  },
  {
    title: "E-Deviser",
    image: "/1.jpg",
    url:"https://github.com/Ashar-Javid",
  },
  {
    title: "AI Traffic Management",
    image: "/images/ai-traffic-management.jpg",
    url:"https://github.com/Ashar-Javid",
  },
]

const ProjectsPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-emerald-400">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-64 h-48 rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            </div>
          </motion.div></a>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-cyan-600 transition-colors"
          >
            Explore All Projects
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectsPreview

