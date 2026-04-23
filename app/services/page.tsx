"use client";

import { motion } from "framer-motion";
import { Footer, Navigation } from "@/app/components/layout";
import { GlassCard } from "@/app/components/ui";
import { containerVariants, itemVariants } from "@/app/lib/animations";
import { services } from "../lib/constants";


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Main Content */}
      <div className="pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          {/* Title Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-4 sm:mb-6"
            >
              SERVICES
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-48 h-1.5 bg-accent-purple rounded-full"
            />
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-10 lg:space-y-12"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <GlassCard className="p-8 sm:p-12 lg:p-16 rounded-[70px] nav-glass">
                  <div className="">
                    <h2 className="heading-section mb-6 sm:mb-8 lg:mb-10 !text-white">
                      {service.title}
                    </h2>
                    <ul className=" max-w-4xl space-y-3 sm:space-y-4 pl-6">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 sm:gap-4"
                        >
                          <span className="text-white text-xl sm:text-2xl mt-1">
                            •
                          </span>
                          <span className="text-white font-sans text-lg sm:text-xl lg:text-2xl leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
