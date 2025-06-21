"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { HeroSection } from "@/components/LandingPage/hero-section"
import { Experiences } from "@/components/LandingPage/experiences"
import { Footer } from "@/components/LandingPage/footer"
import { TestimonialsAndAbout } from "@/components/LandingPage/testimonials-and-about"
import { Button } from "@/components/ui/button"
import { ToursAndRental } from "@/components/LandingPage/tours-and-rental"
import { CommunityAndTeam } from "@/components/LandingPage/community-and-team"


function App() {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0) 
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Prevent layout shift on initial load
    setIsLoaded(true)

    let ticking = false
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - lastScrollY) < 2) return

      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(currentScrollY)
          setShowBackToTop(currentScrollY > 500)
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`text-white min-h-screen overflow-x-hidden relative ${isLoaded ? "initial-load" : ""}`}>
      {/* Fixed Background Image - Never moves */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://infinityhagiangloop.com/wp-content/uploads/2023/09/infinity-pucture-2-3.jpg')`,
          zIndex: -2,
        }}
      />

      {/* Secondary Fixed Neon Layer */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), 
                     radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
                     radial-gradient(circle at 40% 40%, rgba(57, 255, 20, 0.05) 0%, transparent 50%)`,
          zIndex: -1,
        }}
      />

      {/* Scrolling Content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Content Sections with Black Background */}
        <div className="bg-black w-full">
          {/* Transition overlay for smooth visual separation */}
          <div className="bg-gradient-to-b from-black/60 via-black/90 to-black w-full">
            <ToursAndRental/>
            <CommunityAndTeam />
            <Experiences />
            <TestimonialsAndAbout />
            <Footer />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-green-500 hover:bg-green-400 text-black shadow-lg transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  )
}

export default App
