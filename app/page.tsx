"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const projects = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
  { id: 6, title: "Project 6" },
];

const testimonials = [
  {
    id: 1,
    title: "Funding Partner",
    text: "Impact Sphere transformed how we discover and evaluate projects. The platform's rigorous vetting process ensures our capital reaches initiatives with genuine potential for change.",
  },
  {
    id: 2,
    title: "Project Leader",
    text: "Thanks to Impact Sphere, we secured funding within weeks instead of months. The connection to aligned investors who truly understand our mission was invaluable.",
  },
  {
    id: 3,
    title: "Corporate Sponsor",
    text: "The transparency and detailed impact metrics provided by Impact Sphere give us confidence in our ESG investments. We've supported 12 projects through the platform.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECD5E8] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="heading-hero mb-4 sm:mb-6"
          >
            IMPACT SPHERE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl lg:text-2xl text-[#55125B] mb-10 sm:mb-14 lg:mb-16 max-w-xl mx-auto"
          >
            Turning purpose into measurable impact.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
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
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="services" className="section-container">
        <div className="section-content">
          <div className="glass-card p-6 sm:p-10 lg:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10 sm:mb-12 lg:mb-16"
            >
              <h2 className="heading-section opacity-80">OUR PROJECTS</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="card-base">
                    <div className="h-64 sm:h-72 lg:h-80 w-full bg-[rgba(244,219,240,0.94)] relative">
                      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-[rgba(142,49,137,0.3)] flex items-center justify-center">
                        <h3 className="heading-card text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="heading-section">FEEDBACK</h2>
          </motion.div>

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
                <h3 className="heading-card text-[#55125B] mb-3 sm:mb-4">
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

      {/* Contacts Section */}
      <section id="about" className="section-container">
        <div className="section-content">
          <div className="glass-card p-6 sm:p-10 lg:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4">
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
              className="font-[family-name:var(--font-poppins)] text-white text-center max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed"
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
