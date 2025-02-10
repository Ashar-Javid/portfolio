"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaRobot, FaBrain, FaCode, FaChartLine, FaRocket } from "react-icons/fa"
import SkillsPreview from "./SkillsPreview"
import ProjectsPreview from "./ProjectsPreview"
import AboutPreview from "./AboutPreview"
import AIVisualizer from "./AIVisualizer"
import BlogPage from "../blog/page"

const colorClasses = [
  "from-emerald-400 to-cyan-500",
  "from-purple-400 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-blue-400 to-indigo-500",
]

const Home = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorClasses.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden relative bg-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${colorClasses[colorIndex]} text-transparent bg-clip-text`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Muhammad Ashar Javid
          </motion.h1>
          <p className="text-2xl md:text-3xl mb-8 text-cyan-200">AI Engineer | Innovator | Tech Enthusiast</p>
          <motion.div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-600 transition-colors"
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-600 transition-colors"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
        >
          <Image
            src="/10.jpg"
            alt="Muhammad Ashar Javid"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-2xl"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[FaRobot, FaBrain, FaCode, FaChartLine, FaRocket].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
                animate={controls}
                style={{
                  top: `${50 - 45 * Math.cos((index * 2 * Math.PI) / 5)}%`,
                  left: `${50 + 45 * Math.sin((index * 2 * Math.PI) / 5)}%`,
                }}
              >
                <Icon className="text-2xl text-emerald-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="w-full max-w-4xl">
          <SkillsPreview />
          <ProjectsPreview />
          <AboutPreview />
        </div>
        <BlogPage/>
        <AIVisualizer />
        
      </div>
    </section>
  )
}
export default Home

