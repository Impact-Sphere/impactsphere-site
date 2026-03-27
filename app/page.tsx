"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

      <section className="min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            variants={logoVariants}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-6 sm:mb-8 relative"
          >
            <Image
              src="/images/logo.svg"
              alt="Impact Sphere Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="heading-hero mb-4 sm:mb-6"
          >
            IMPACT SPHERE
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="font-sans text-lg sm:text-xl lg:text-2xl text-primary-purple mb-10 sm:mb-14 lg:mb-16 max-w-xl mx-auto"
          >
            Turning purpose into measurable impact.
          </motion.p>

          <motion.div variants={heroItemVariants}>
            <motion.button
              type="button"
              className="group btn-primary flex items-center gap-2 sm:gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start project
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="section-container">
        <div className="section-content">
          <GlassCard className="p-6 sm:p-10 lg:p-12 xl:p-16">
            <SectionHeader title="OUR PROJECTS" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
        <div className="section-content">
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

      <section id="about" className="section-container">
        <div className="section-content">
          <GlassCard className="p-6 sm:p-10 lg:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                CONTACTS
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-sans text-white text-center max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              Ready to make an impact? Whether you are a funding company looking
              for vetted projects or an organization seeking capital, we are
              here to help. Connect with us to explore how we can support your
              mission.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 sm:mt-10 lg:mt-12 text-center"
            >
              <motion.button
                type="button"
                className="group btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
