"use client"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your OnShape Workflow?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-pink-100 mb-10"
        >
          Join the community of designers who have revolutionized their creative process.
        </motion.p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300 inline-block"
        >
          Start Your Free Trial
        </motion.a>
      </div>
    </section>
  )
}

