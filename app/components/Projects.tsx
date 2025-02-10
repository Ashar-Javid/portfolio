"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"


const projects = [
  {
    title: "XploreBot",
    description: "An AI-powered chatbot platform for customer support and engagement.",
    image: "/XploreBot.png",
    tags: ["AI", "NLP", "React", "Node.js"],
  },
  {
    title: "E-Deviser",
    description: "Educational LMS with AI-Agent Based learning.",
    image: "/fox.jpg",
    tags: ["IoT", "AI", "Energy Optimization"],
  },
  {
    title: "Autonomous Car System",
    description: "Intelligent traffic control system using computer vision and deep learning.",
    image: "/images/ai-traffic-management.jpg",
    tags: ["Computer Vision", "Deep Learning", "Smart Cities"],
  },
  {
    title: "Predictive Maintenance Platform",
    description: "Machine learning-based system for predicting equipment failures in industrial settings.",
    image: "/images/predictive-maintenance.jpg",
    tags: ["Machine Learning", "IoT", "Industry 4.0"],
  },
  {
    title: "NLP-powered Document Analyzer",
    description: "Automated document analysis and information extraction using advanced NLP techniques.",
    image: "/images/nlp-document-analyzer.jpg",
    tags: ["NLP", "Information Extraction", "Python"],
  },
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-emerald-400"
        >
          Projects
        </motion.h1>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-emerald-500 text-white px-2 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${index === currentIndex ? "bg-emerald-500" : "bg-gray-500"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

