import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Background3D from "./components/Background3D"
import ChatbotButton from "./components/ChatbotButton"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammad Ashar Javid - AI Engineer Portfolio",
  description: "Portfolio website of Muhammad Ashar Javid, AI Engineer and Innovator",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        <Background3D />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotButton />
      </body>
    </html>
  )
}

