"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
          >
            <Image
              src="/profile.jpg"
              alt="AI & IoT Expert"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div 
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bridging AI & Hardware Innovation
            </h2>
            
            <p className="text-lg leading-relaxed">
              As a <span className="text-blue-400">Full-Stack Developer</span> and <span className="text-purple-400">Embedded Systems Engineer</span>, 
              I specialize in creating intelligent systems that combine cutting-edge AI with robust hardware solutions. 
              My 5+ years of experience spans:
            </p>

            <motion.ul 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                'Neural Network Optimization',
                'Edge AI Deployment',
                'IoT Architecture Design',
                'FPGA Acceleration'
              ].map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-blue-500">▹</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

