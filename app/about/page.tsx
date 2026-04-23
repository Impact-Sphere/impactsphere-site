"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "@/app/components/layout";
import { containerVariants, itemVariants } from "@/app/lib/animations";
import { values } from "../lib/constants";


export default function AboutPage() {
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
              ABOUT US
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

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full lg:w-[627px] h-[470px] rounded-[25px] overflow-hidden"
            >
              <Image
                src="https://picsum.photos/400/300?random=1"
                alt="About Us Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 text-deep-purple font-sans font-semibold text-lg sm:text-xl lg:text-2xl leading-relaxed"
            >
              At ImpactSphere, we empower Human Rights NGOs to move beyond
              limitations and into meaningful action. By providing strategic
              guidance, professional communication, and access to the right
              partnerships, we transform under-resourced initiatives into
              structured, visible, and impactful projects that create real,
              measurable change.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1 text-deep-purple font-sans font-semibold text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-8 lg:mb-12"
          >
            Lorem ipsum vibra solentia marquon estirado velum crista nevoris
            alquantis dravium. Polenta xarvis neblor sit amet quorium estalvia
            luxen toriam belvoro sintax. Gravion deluxa perantis morbelis
            quantor estiva lorumex pantrix velorium sentax. Nuvia korentis
            baltrium estova relux martionis calverum sintor valexium.
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24"
          >
            <motion.div
              variants={itemVariants}
              className="w-full max-w-[382px] h-[287px] rounded-[25px] overflow-hidden  mx-auto relative"
            >
              <Image
                src="https://picsum.photos/400/300?random=1"
                alt="About Us Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-[382px] h-[287px] rounded-[25px] overflow-hidden  mx-auto relative"
            >
              <Image
                src="https://picsum.photos/400/300?random=1"
                alt="About Us Image2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-[382px] h-[287px] rounded-[25px] overflow-hidden  mx-auto relative"
            >
              {" "}
              <Image
                src="https://picsum.photos/400/300?random=1"
                alt="About Us Image3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-4 sm:mb-6"
            >
              OUR VALUES
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-32 h-1.5 bg-accent-purple rounded-full mb-12 sm:mb-16 lg:mb-20"
            />
          </div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="relative text-center pt-10"
              >
                {/* Connector Lines */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-[5.4rem] h-px w-24 bg-accent-purple -translate-x-full" />
                )}
                {index !== 2 && (
                  <div className="hidden md:block absolute right-0 top-[5.4rem] h-px w-24 bg-accent-purple translate-x-full" />
                )}

                {/* Number */}
                <div className="relative mx-auto mb-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-accent-purple bg-background flex items-center justify-center">
                  <span className="font-sans font-bold text-5xl sm:text-6xl text-text-blue">
                    {index+1}
                  </span>
                </div>

                {/* Text */}
                <div className="text-deep-purple font-sans font-semibold text-lg sm:text-xl leading-relaxed">
                  {value.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
