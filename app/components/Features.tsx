"use client"
import { Zap, Layers, Compass } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-pink-400" />,
    title: "Automated Workflows",
    description: "Streamline your design process with intelligent automation tools.",
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-400" />,
    title: "Advanced Assemblies",
    description: "Create complex assemblies with ease using our intuitive interface.",
  },
  {
    icon: <Compass className="h-10 w-10 text-indigo-400" />,
    title: "Precision Tools",
    description: "Achieve unparalleled accuracy with our advanced measurement tools.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white bg-opacity-10 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Powerful Features for Innovative Designs
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-pink-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

