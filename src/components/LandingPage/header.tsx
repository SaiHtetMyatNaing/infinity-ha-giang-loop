"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="relative z-50 px-4 sm:px-6 py-6 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: false, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Link href="/">
            <div className="block w-12 h-12 sm:w-20 sm:h-20 rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
              <Image
                src="https://infinityhagiangloop.com/wp-content/uploads/2023/10/infinityhagianglooplogo.png"
                alt="Infinity Ha Giang Loop Logo"
                width={80}
                height={80}
                className="object-contain bg-white"
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {[
            ["/trips", "Trips & Tours"],
            ["/bus", "Bus Links"],
            ["/rentals", "Rentals"],
            ["/drivers", "Meet the Drivers"],
            ["/community", "Community"],
          ].map(([href, label]) => (
            <Link key={href} href={href}>
              <div className="text-green-400 hover:text-green-300 transition-all duration-300 font-medium hover:scale-105 whitespace-nowrap">
                {label}
              </div>
            </Link>
          ))}
        </motion.nav>

        {/* Mobile/Tablet Navigation */}
        <div className="flex items-center space-x-4">
          <motion.div
            className="hidden sm:flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-transparent transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-transparent transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-green-400 hover:text-green-300 hover:bg-transparent transition-all duration-300 hover:scale-110">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-black bg-opacity-95 backdrop-blur-sm border-green-500">
              <nav className="flex flex-col space-y-4 mt-6">
                {[
                  ["/trips", "Trips & Tours"],
                  ["/bus", "Bus Links"],
                  ["/rentals", "Rentals"],
                  ["/drivers", "Meet the Drivers"],
                  ["/community", "Community"],
                ].map(([href, label]) => (
                  <Link key={href} href={href}>
                    <div className="text-green-400 hover:text-green-300 transition-all duration-300 font-medium py-2">
                      {label}
                    </div>
                  </Link>
                ))}
                <Separator className="bg-green-500" />
                <div className="flex space-x-4 pt-4">
                  <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-transparent transition-all duration-300">
                    <Instagram className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-transparent transition-all duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
