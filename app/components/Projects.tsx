"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"


const projects = [
  {
    title: "XploreBot",
    description: "An AI-powered chatbot platform for customer support and engagement.",
    image: "/XploreBot.png",
    tags: ["AI", "NLP", "React", "Node.js"],
    category: 'Artificial Intelligence',
  },
  {
    title: "E-Deviser",
    description: "Educational LMS with AI-Agent Based learning.",
    image: "/fox.jpg",
    tags: ["IoT", "AI", "Energy Optimization"],
    category: 'Artificial Intelligence',
  },
  {
    title: "Autonomous Car System",
    description: "Intelligent traffic control system using computer vision and deep learning.",
    image: "/images/ai-traffic-management.jpg",
    tags: ["Computer Vision", "Deep Learning", "Smart Cities"],
    category: 'Artificial Intelligence',
  },
  {
    title: "Predictive Maintenance Platform",
    description: "Machine learning-based system for predicting equipment failures in industrial settings.",
    image: "/images/predictive-maintenance.jpg",
    tags: ["Machine Learning", "IoT", "Industry 4.0"],
    category: 'Artificial Intelligence',
  },
  {
    title: "NLP-powered Document Analyzer",
    description: "Automated document analysis and information extraction using advanced NLP techniques.",
    image: "/images/nlp-document-analyzer.jpg",
    tags: ["NLP", "Information Extraction", "Python"],
    category: 'Artificial Intelligence',
  },
  {
    title: "Smart Grid System",
    description: "Developed IoT-based energy management solution",
    image: "/grid.jpg",
    tags: ["IoT", "Energy", "Automation"],
    category: "Electrical Engineering"
  },
  {
    title: "Medical AI Assistant",
    description: "Diagnostic support system using deep learning",
    image: "/medical-ai.jpg",
    tags: ["Healthcare", "Neural Networks"],
    category: "Artificial Intelligence"
  }
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredProjects = projects.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

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
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-gray-800 text-white p-3 rounded-lg flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select 
            className="bg-gray-800 text-white p-3 rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {['All', 'Artificial Intelligence', 'Electrical Engineering', 'Hybrid'].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <AnimatePresence mode='wait'>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-sm">{project.category}</span>
                    <button className="hover:text-blue-300 transition-transform hover:scale-110">
                      {/* @ts-ignore: Temporarily ignoring TS error for ArrowUpRightIcon */}
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
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

