"use client"

import { motion } from "framer-motion"
import { Header } from "./header"


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col w-full overflow-hidden">
      {/* Header & Navigation - Scrolls normally */}
      <Header />

      {/* Hero Content - Scrolls normally */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto w-full">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-white leading-tight drop-shadow-lg break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            EXPERIENCE THE
            <motion.span
              className="block text-green-400 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              LEGENDARY LOOP
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Navigate Vietnam most spectacular mountain roads through terraced landscapes and authentic hill tribe
            villages
          </motion.p>
          <motion.div
            className="w-56 h-1 bg-green-400 mx-auto shadow-lg"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "14rem", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: "-100px" }}
          />
        </div>
      </div>
    </section>
  )
}
