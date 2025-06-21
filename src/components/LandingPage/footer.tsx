"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="border-t border-green-500 bg-gray-900 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <MapPin className="w-8 h-8 text-green-400 mr-3" />
              <div className="text-white">
                <h3 className="font-bold text-lg">Ha Giang Province</h3>
                <p className="text-gray-300">Northern Vietnam</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-col space-y-2">
              <Link
                href="tel:+84969278862"
                className="flex items-center justify-center text-white hover:text-green-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +84 96 927 88 62
              </Link>
              <Link
                href="mailto:infinityhagianginfo@gmail.com"
                className="flex items-center justify-center text-white hover:text-green-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                infinityhagianginfo@gmail.com
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end space-x-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="https://instagram.com/yourpage">
              <i>
                <Instagram className="w-8 h-8 text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110" />
              </i>
            </Link>
            <Link href="https://m.me/yourpage">
              <i>
                <MessageCircle className="w-8 h-8 text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110" />
              </i>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-gray-400">© 2024 Infinity Ha Giang Loop. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
