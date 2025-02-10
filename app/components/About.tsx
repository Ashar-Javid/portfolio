"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-emerald-400"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <Image
              src="/10.jpg"
              alt="Muhammad Ashar Javid"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 md:pl-12"
          >
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Muhammad Ashar Javid</h2>
            <p className="mb-4">
              I am an AI Engineer with a strong background in Electrical Engineering, having graduated from NUST. My
              passion for artificial intelligence and innovation has led me to found XploreBot and co-found E-Deviser,
              two ventures at the forefront of AI technology.
            </p>
            <p className="mb-4">
              At XploreBot, we're pushing the boundaries of what's possible with AI, developing cutting-edge solutions
              for real-world problems. E-Deviser, on the other hand, focuses on bridging the gap between traditional
              engineering and modern AI applications.
            </p>
            <p className="mb-4">
              My expertise spans across various domains of AI, including machine learning, deep learning, computer
              vision, and natural language processing. I'm constantly learning and adapting to the rapidly evolving
              field of AI, always eager to tackle new challenges and explore cutting-edge technologies.
            </p>
            <p>
              When I'm not working on AI projects, you can find me mentoring aspiring engineers, participating in tech
              conferences, or contributing to open-source AI projects. I believe in the power of AI to transform
              industries and improve lives, and I'm excited to be part of this revolutionary journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

