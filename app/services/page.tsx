"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "@/app/components/layout";
import { services } from "../lib/constants";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="relative pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          {/* Title Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-4 sm:mb-6"
            >
              OUR SERVICES
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-32 h-1.5 bg-accent-purple mb-8 sm:mb-10 lg:mb-12 rounded-full"
            />
          </div>

          {/* Background Image Section */}
          <div className="relative">
            <div className="relative rounded-[10px] overflow-hidden h-[500px] sm:h-[600px] lg:h-[750px]">
              {/* Background Image */}
              <Image
                src="/images/team/team.JPG"
                alt="ImpactSphere team"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>

            {/* Overlay Cards Container - extends below image */}
            <div className="absolute top-[70%] left-0 right-0 flex justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="relative flex-1 rounded-[20px] bg-[#b8cfea] px-8 flex flex-col h-[320px] sm:h-[360px] lg:h-[400px] shadow-lg"
              >
                <div className="absolute top-[-16px] left-4 right-4 bg-[#83aeda] rounded-full py-2 px-4 mx-auto w-[80%]">
                  <h3 className="font-sans font-bold text-white text-xl sm:text-2xl text-center">
                    {services[0].title}
                  </h3>
                </div>
                <p className="text-white font-sans text-lg sm:text-xl leading-relaxed flex-1 flex items-center justify-center text-center">
                  {services[0].description}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex-1 rounded-[20px] bg-[#b8cfea] p-6 sm:p-8 flex flex-col h-[320px] sm:h-[360px] lg:h-[400px] shadow-lg"
              >
                <div className="absolute top-[-16px] left-4 right-4 bg-[#83aeda] rounded-full py-2 px-4 mx-auto w-[80%]">
                  <h3 className="font-sans font-bold text-white text-xl sm:text-2xl text-center">
                    {services[1].title}
                  </h3>
                </div>
                <p className="text-white font-sans text-lg sm:text-xl leading-relaxed flex-1 flex items-center justify-center text-center">
                  {services[1].description}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex-1 rounded-[20px] bg-[#b8cfea] p-6 sm:p-8 flex flex-col h-[320px] sm:h-[360px] lg:h-[400px] shadow-lg"
              >
                <div className="absolute top-[-16px] left-4 right-4 bg-[#83aeda] rounded-full py-2 px-4 mx-auto w-[80%]">
                  <h3 className="font-sans font-bold text-white text-xl sm:text-2xl text-center">
                    {services[2].title}
                  </h3>
                </div>
                <p className="text-white font-sans text-lg sm:text-xl leading-relaxed flex-1 flex items-center justify-center text-center">
                  {services[2].description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom spacing for cards overflow */}
          <div className="h-48 sm:h-56 lg:h-64" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
