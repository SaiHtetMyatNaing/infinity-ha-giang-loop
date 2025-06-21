  "use client"

  import Image from "next/image"
  import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent } from "@radix-ui/react-dialog"
import { Button } from "../ui/button"
import { DialogTitle } from "../ui/dialog"

  export function CommunityAndTeam() {
   const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const communityImages: string[] = [
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_0283-2.jpeg?w=2048",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_0311-2.jpeg?w=2048",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_5572-1.jpeg?w=2046",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_7670-2.jpeg?w=2048",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_7676-2.jpeg?w=2048",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_7705-2.jpeg?w=1536",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_7924-1.jpeg?w=2048",
    "https://infinityhagiangloop.com/wp-content/uploads/2023/10/img_8893-2.jpeg?w=1536",
  ]

  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handlePrevImage = (): void => {
    setSelectedImageIndex((prev: number) => 
      prev === 0 ? communityImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = (): void => {
    setSelectedImageIndex((prev: number) => 
      prev === communityImages.length - 1 ? 0 : prev + 1
    )
  }

  const handleTeamNavigation = (): void => {
    // Replace with your actual navigation logic
    alert('Navigate to team page') // Temporary for demo
  }



    return (
      <>
        {/* Community Projects Spotlight */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-4 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              7% OF OUR PROFITS FUEL
            </motion.h2>
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-green-400"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              LOCAL PROJECTS
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              initial="initial"
              whileInView="whileInView"
              variants={{
                initial: {},
                whileInView: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 },
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {communityImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer overflow-hidden group rounded-xl shadow-md border border-green-400"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Community project ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Click to view
                  </div>
                </div>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

         {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 transform cursor-pointer -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[90vh] max-w-6xl bg-black border-green-400 border-4 p-0 z-50 overflow-hidden rounded-lg">
         {/* Animated Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-  sm:top-4  sm:right-4 z-20 p-2 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all duration-200 hover:scale-110"
            >
              <X size={18} className="sm:w-5 sm:h-5 cursor-pointer" />
            </button>
            
            {/* Previous button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 z-20 p-2 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Image container */}
            <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6">
              <Image
                src={communityImages[selectedImageIndex]}
                alt={`Community project ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-cover rounded-lg shadow-2xl"
                fill
              />
            </div>
            
            {/* Next button */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 z-20 p-2 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              {selectedImageIndex + 1} / {communityImages.length}
            </div>
          </div>
          <DialogTitle className="hidden"></DialogTitle>
        </DialogContent>
      </Dialog>

        {/* Meet Our Team */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              className="text-4xl font-bold mb-12 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              MEET OUR TEAM
            </motion.div>
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Image
                src="https://infinityhagiangloop.com/wp-content/uploads/2023/08/anh.jpeg"
                alt="Our team of local guides"
                width={400}
                height={600}
                className="w-full h-96 object-cover rounded-lg shadow-lg border border-white transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-60"></div>
            </motion.div>
            <motion.p
              className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Our team consists of experienced local guides who know every corner of Ha Giang and are dedicated to providing
              safe and memorable adventures for our guests.
            </motion.p>

             {/* Navigation Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-14 -mb-12"
          >
            <Button
              onClick={handleTeamNavigation}
              className="bg-green-400 hover:bg-green-500 text-black font-bold max-w-md py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-green-400 hover:border-green-300"
            >
              Learn More 
            </Button>
          </motion.div>
          </div>
        </section>
      </>
    )
  }
