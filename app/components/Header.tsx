"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white bg-opacity-10 backdrop-blur-lg z-10"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-white">
          OnShape Plugin
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-white hover:text-pink-200 transition duration-300">
            Features
          </Link>
          <Link href="#how-it-works" className="text-white hover:text-pink-200 transition duration-300">
            How It Works
          </Link>
          <Link href="#" className="text-white hover:text-pink-200 transition duration-300">
            Pricing
          </Link>
        </div>
        <Link
          href="#cta"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition duration-300"
        >
          Get Started
        </Link>
      </nav>
    </motion.header>
  )
}

