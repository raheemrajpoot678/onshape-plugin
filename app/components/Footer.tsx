"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              OnShape Plugin
            </h3>
            <p className="text-gray-400">Empowering designers worldwide</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            <a href="#" className="hover:text-pink-400 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-400 transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pink-400 transition duration-300">
              Contact
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-gray-400"
        >
          © {new Date().getFullYear()} OnShape Plugin. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

