"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your OnShape Experience
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Our plugin brings cutting-edge features to OnShape, empowering you to design with unprecedented speed and
            precision.
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 inline-block"
          >
            Start Designing Smarter
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

