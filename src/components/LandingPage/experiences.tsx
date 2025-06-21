"use client"

import { motion } from "framer-motion"
import { Car, Waves, Mountain, Camera } from "lucide-react"
import Image from "next/image"

export function Experiences() {
  const experienceIcons = [
    { icon: Car, label: "Self-Drive" },
    { icon: Waves, label: "Wild Swimming" },
    { icon: Mountain, label: "Treks" },
    { icon: Camera, label: "Photography" },
  ]

  const experienceGallery = [
    {
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/2.jpg",
      title: "SELF DRIVE LOOP",
      alt: "Winding mountain road through Ha Giang Loop",
    },
    {
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/img_1852.jpg",
      title: "WILD SWIMMING",
      alt: "Person swimming in natural waterfall pool",
    },
    {
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/1-1.jpg",
      title: "TREKS",
      alt: "Golden terraced rice fields in mountains",
    },
    {
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/3.jpg",
      title: "OUTDOOR ACTIVITY",
      alt: "Tourist boats on river with limestone cliffs",
    },
  ]

  return (
    <>
      {/* Experiences Icons Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            EXPERIENCES
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="initial"
            whileInView="whileInView"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {experienceIcons.map((experience, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-all duration-300 group-hover:scale-110">
                  <experience.icon className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white">{experience.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Infinity Ha Giang Experiences */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            INFINITY HA GIANG EXPERIENCES
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            initial="initial"
            whileInView="whileInView"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {experienceGallery.map((experience, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
              >
                <div className="relative w-full h-96 overflow-hidden rounded-tl-[200px] shadow-lg group-hover:overflow-visible">
                  <Image
                    src={experience.image}
                    alt={experience.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4 leading-tight">
                      {experience.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
