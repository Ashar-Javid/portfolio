import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{date}</span>
        <Link href={`/blog/${slug}`} className="text-green-400 hover:underline">
          Read More
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogPost

