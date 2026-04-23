"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "./components/layout";
import { GlassCard, ProjectCard, SectionHeader } from "./components/ui";
import { containerVariants, itemVariants } from "./lib/animations";
import { projects, testimonials } from "./lib/constants";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-self-center gap-8 lg:gap-22">
            <motion.div
              variants={logoVariants}
              className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[352px] lg:h-[352px] relative flex-shrink-0"
            >
              <Image
                src="/images/logo.svg"
                alt="Impact Sphere Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="flex-1 text-center">
              <motion.h1
                variants={heroItemVariants}
                className="heading-hero mb-4 sm:mb-6 "
              >
                IMPACT SPHERE
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="font-sans text-lg sm:text-xl lg:text-2xl text-primary-purple mb-10 sm:mb-14 lg:mb-16"
              >
                TURNING PURPOSE INTO MEASURABLE IMPACT
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-20 justify-center"
              >
                <motion.button
                  type="button"
                  className="group btn-primary flex-1 items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start project
                </motion.button>
                <motion.button
                  type="button"
                  className="group btn-primary flex-1 items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section-container">
        <div className="max-w-[80%] mx-auto w-full">
          <GlassCard className="p-6 sm:p-10 lg:p-12 xl:p-16">
            <SectionHeader title="OUR PROJECTS" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-[80%] mx-auto w-full">
          <SectionHeader title="FEEDBACK" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <h3 className="heading-card text-primary-purple mb-3 sm:mb-4">
                  {testimonial.title}
                </h3>
                <p className="text-body text-sm sm:text-base">
                  {testimonial.text}
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
