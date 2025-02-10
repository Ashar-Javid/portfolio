import Image from "next/image"
import Link from "next/link"

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-green-400">Project Showcase: AI-Powered Chatbot</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/chatbot-project.jpg"
              alt="AI-Powered Chatbot"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Project Overview</h2>
            <p className="mb-4">
              The AI-Powered Chatbot is an advanced conversational AI system designed to provide human-like interactions
              for customer support, information retrieval, and task automation.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Key Features:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Natural Language Processing for understanding user intent</li>
              <li>Machine Learning algorithms for continuous improvement</li>
              <li>Multi-language support</li>
              <li>Integration with various platforms (web, mobile, messaging apps)</li>
            </ul>
            <Link href="/" className="text-green-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

