"use client"
import { motion } from "framer-motion"

const steps = [
  {
    title: "Install the Plugin",
    description: "Easily add our plugin to your OnShape environment with just a few clicks.",
  },
  {
    title: "Configure Your Preferences",
    description: "Set up the plugin to match your workflow and design needs.",
  },
  {
    title: "Start Designing",
    description: "Use the new tools and features to enhance your CAD experience.",
  },
  {
    title: "Collaborate and Share",
    description: "Seamlessly work with team members and share your improved designs.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-pink-100">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

