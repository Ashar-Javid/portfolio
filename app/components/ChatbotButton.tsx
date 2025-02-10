"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRobot, FaTimes } from "react-icons/fa"

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-emerald-500 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="p-4 h-full flex flex-col">
              <div className="flex-grow overflow-auto mb-4">
                {/* Chat messages would go here */}
                <p className="text-gray-700">Hello! How can I assist you today?</p>
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-r-md">Send</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotButton

