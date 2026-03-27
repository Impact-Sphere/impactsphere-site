"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "@/app/components/layout";
import { GlassCard, SectionHeader } from "@/app/components/ui";
import { containerVariants, itemVariants } from "@/app/lib/animations";
import { values } from "@/app/lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#ECD5E8] overflow-x-hidden">
      <Navigation />

      <section className="min-h-[40vh] sm:min-h-[50vh] flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#A05799] mb-3 sm:mb-4">
                ABOUT US
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative flex-shrink-0"
            >
              <Image
                src="/images/logo.svg"
                alt="Impact Sphere Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="section-content">
          <GlassCard>
            <p className="font-[family-name:var(--font-poppins)] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[rgba(70,82,167,0.8)] leading-relaxed">
              At ImpactSphere, we empower Human Rights NGOs to move beyond
              limitations and into meaningful action. By providing strategic
              guidance, professional communication, and access to the right
              partnerships, we transform under-resourced initiatives into
              structured, visible, and impactful projects that create real,
              measurable change.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="section-container">
        <div className="section-content">
          <SectionHeader title="OUR VALUES" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <h3 className="heading-card text-[#55125B] mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
