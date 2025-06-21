"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star } from "lucide-react"
import Image from "next/image"

export function ToursAndRental() {

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  const tours = [
    {
      title: "3 Days/2 Nights",
      subtitle: "Classic Loop Experience",
      price: "From $120",
      originalPrice: "$150",
      duration: "3 Days",
      groupSize: "8-12 People",
      rating: 4.9,
      reviews: 127,
      features: [
        "Dong Van Geopark UNESCO Site",
        "Traditional Homestay Experience",
        "Professional Local Guide",
        "All Meals Included",
        "Safety Equipment Provided",
      ],
      highlights: ["Most Popular", "Best Value"],
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/img_2200-1.jpg",
      badge: "BESTSELLER",
    },
    {
      title: "4 Days/3 Nights",
      subtitle: "Extended Adventure",
      price: "From $180",
      originalPrice: "$220",
      duration: "4 Days",
      groupSize: "6-10 People",
      rating: 4.8,
      reviews: 89,
      features: [
        "Complete Loop Coverage",
        "Cultural Village Visits",
        "Mountain Pass Adventures",
        "Photography Workshops",
        "Flexible Itinerary",
      ],
      highlights: ["Extended", "Cultural Focus"],
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/img_1930-1.jpg",
      badge: "PREMIUM",
    },
    {
      title: "Custom Tour",
      subtitle: "Tailored Experience",
      price: "On Request",
      originalPrice: null,
      duration: "Flexible",
      groupSize: "Private",
      rating: 5.0,
      reviews: 45,
      features: [
        "Personalized Itinerary",
        "Private Professional Guide",
        "Luxury Accommodations",
        "Custom Activities",
        "24/7 Support",
      ],
      highlights: ["Luxury", "Private"],
      image: "https://infinityhagiangloop.com/wp-content/uploads/2023/08/authenti-copy.jpg",
      badge: "LUXURY",
    },
  ]

  return (
    <>
      {/* Our Loop Tours Cards */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
           className="text-center mb-16" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">OUR LOOP TOURS</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully crafted tour packages designed to showcase the best of Ha Giang Loop
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {tours.map((tour, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="relative bg-gray-900 border-2 p-0 border-gray-700 shadow-xl h-full overflow-hidden">
                  {/* Image Section */}
                  <div className="group relative h-64 overflow-visible cursor-pointer">
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={tour.image || "/placeholder.svg"}
                        alt={`${tour.title} tour`}
                        width={200}
                        height={300}
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-70"></div>
                    </div>

                    {/* Expanded Image Overlay - Only on image hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-40 pointer-events-none">
                      <div className="absolute inset-0 -bottom-96 overflow-hidden rounded-lg">
                        <Image
                          src={tour.image || "/placeholder.svg"}
                          alt={`${tour.title} tour expanded`}
                          width={200}
                          height={300}
                          className="w-full h-full object-cover scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent"></div>
                      </div>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 right-4 text-right px-3 py-2 z-50">
                      <div
                        className="text-2xl font-bold text-white mb-1"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)" }}
                      >
                        {tour.price}
                      </div>
                      {tour.originalPrice && (
                        <div
                          className="text-sm text-gray-300 line-through"
                          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                        >
                          {tour.originalPrice}
                        </div>
                      )}
                    </div>

                    {/* Image Expansion Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                      <div className="bg-black/50 rounded-full p-2">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  {tour.badge && (
                    <div className="absolute top-4 left-4 z-50">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${
                          tour.badge === "BESTSELLER"
                            ? "bg-green-500 text-black"
                            : tour.badge === "PREMIUM"
                              ? "bg-blue-500 text-white"
                              : "bg-purple-500 text-white"
                        }`}
                      >
                        {tour.badge}
                      </span>
                    </div>
                  )}

                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{tour.title}</h3>
                      <p className="text-green-400 font-medium">{tour.subtitle}</p>
                    </div>

                    {/* Tour Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-green-400" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2 text-green-400" />
                        {tour.groupSize}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(tour.rating) ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold ml-2">{tour.rating}</span>
                      <span className="text-gray-400 ml-1">({tour.reviews} reviews)</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {tour.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {tour.features.length > 4 && (
                        <li className="text-green-400 text-sm font-medium">
                          +{tour.features.length - 4} more features
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 transition-all duration-300 hover:scale-105 transform">
                      VIEW DETAILS & BOOK
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12"
             initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}

          >
            <p className="text-gray-400 mb-4">
              All tours include safety equipment, professional guides, and 24/7 support
            </p>
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              Compare All Tours
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Motorbike Rental Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Do you want to Self-Drive the Loop?
            </motion.h2>
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8"
               initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Rent a Motorbike with Us!
            </motion.h3>
            <motion.div
               initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                MORE INFO & PRICING
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
