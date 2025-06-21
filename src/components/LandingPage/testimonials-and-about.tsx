"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function TestimonialsAndAbout() {
  return (
    <>
      {/* Testimonials */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://infinityhagiangloop.com/wp-content/uploads/2023/08/img_2183ppp-edited.jpg')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="bg-black bg-opacity-80 border-white shadow-xl">
              <CardContent className="p-12">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-green-400 fill-current"
                    />
                  ))}
                </motion.div>
                <motion.blockquote
                  className="text-2xl md:text-3xl font-serif italic text-white mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  “I would give this agency 10 stars if I could! Ken and his
                  team provided excellent service to myself and my group
                  throughout a 10 day tour of Sapa, Bac Ha and Ha Giang.
                  Communication, itinerary ideas, transport, food and
                  accommodation – it was all easy, prompt and executed
                  perfectly. Ken is a man with a huge heart and love for his
                  people.
                </motion.blockquote>
                <motion.cite
                  className="text-lg text-green-400 font-semibold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link
                    className="hover:underline border-green-400"
                    target="_blank"
                    href="https://www.tripadvisor.com/Attraction_Review-g1544599-d25113570-Reviews-Infinity_Ha_Giang_Loop-Ha_Giang_Ha_Giang_Province.html"
                  >
                    Nic — 27/04/23
                  </Link>
                </motion.cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Go With Us */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            WHY GO WITH US?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="w-64 h-64 mx-auto relative rounded-full ring-4 ring-white mb-6 shadow-lg overflow-hidden">
                      <Image
                        src="https://infinityhagiangloop.com/wp-content/uploads/2023/08/0bd1ad7b-7321-41f5-a439-626ff0563758.jpeg"
                        alt="Founder portrait"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Founded by Locals
                    </h3>
                    <p className="text-gray-300">Born and raised in Ha Giang</p>
                  </motion.div>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    We are a local, and family owned travel agency based in Ha
                    Giang, North Vietnam. Founded by Ken, a seasoned tour guide
                    with passion for local culture, nature, and villages. Our
                    mission is to deliver unforgettable travel experiences
                    through excellent logistics, customer care, and a deep
                    connection to Vietnam’s heritage. Our offers include
                    trekking adventures, homestays, charity projects, motorcycle
                    rentals, and traditional sightseeing tours. Adventure is at
                    the heart of everything we do. Above all, we prioritize
                    building a respectful connection between tourism and local
                    communities. By supporting ethnic minority families, we help
                    them to improve their livelihoods while giving travelers
                    authentic insights into the village’s life in Ha Giang. Each
                    journey aims to be a meaningful encounter to create lasting
                    memories, and a deeper appreciation for Vietnam.
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
