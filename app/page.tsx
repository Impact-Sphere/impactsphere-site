"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    title: "Empresa financiadora",
    text: "Lorem ipsum vibra solentia marquon estirado velum crista nevoris alquantis dravium. Polenta xarvis neblor sit amet quorium estalvia luxen toriam belvoro sintax.",
  },
  {
    id: 2,
    title: "Empresa financiada",
    text: "Lorem ipsum vibra solentia marquon estirado velum crista nevoris alquantis dravium. Polenta xarvis neblor sit amet quorium estalvia luxen toriam belvoro sintax. Gravion deluxa perantis morbelis quantor estiva lorumex pantrix velorium sentax. Nuvia korentis baltrium estova relux martionis calverum sintor valexium.",
  },
  {
    id: 3,
    title: "Empresa financiadora",
    text: "Gravion deluxa perantis morbelis quantor estiva lorumex pantrix velorium sentax. Nuvia korentis baltrium estova relux martionis calverum sintor valexium.",
  },
];

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Our team", href: "/team" },
  { name: "About us", href: "/about" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECD5E8] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="nav-glass rounded-[70px] px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#3E2A8A]">
              IMPACT SPHERE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) =>
              link.href.startsWith("#") ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-[#A05799] hover:text-[#55125B] transition-colors duration-300 font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="text-lg text-[#A05799] hover:text-[#55125B] transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ),
            )}
          </div>

          <motion.button
            className="px-6 py-2.5 rounded-full border-2 border-[#4652A7] text-[#4652A7] text-base font-medium hover:bg-[#4652A7] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log in
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-80 h-80 mx-auto mb-8 bg-[#D4A5C9] rounded-3xl"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#3E2A8A] mb-6"
          >
            IMPACT SPHERE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl text-[#55125B] mb-16 max-w-2xl mx-auto"
          >
            Turning purpose into measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="group px-10 py-5 rounded-[70px] bg-[#4652A7] text-[#F4DBF0] font-bold text-xl flex items-center gap-3 shadow-lg mx-auto"
              style={{ boxShadow: "0px 4px 4px 0px rgba(142, 49, 137, 0.6)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px 0px rgba(142, 49, 137, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[70px] bg-[rgba(97,162,223,0.5)] p-12 sm:p-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl font-extrabold text-[#55125B] mb-4 opacity-80">
                OUR PROJECTS
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-3xl overflow-hidden h-full">
                    <div className="h-80 w-full bg-[rgba(244,219,240,0.94)] rounded-t-3xl relative">
                      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[rgba(142,49,137,0.3)] rounded-b-3xl flex items-center justify-center">
                        <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl font-extrabold text-[#55125B] mb-4">
              FEEDBACK
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-center">
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#55125B] mb-6">
                    {testimonial.title}
                  </h3>
                  <p className="text-[#708ADE] text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[70px] bg-[rgba(97,162,223,0.5)] p-12 sm:p-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl font-extrabold text-[#4652A7] mb-4">
                CONTACTS
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-[#708ADE] text-xl leading-relaxed max-w-4xl mx-auto"
            >
              Lorem ipsum vibra solentia marquon estirado velum crista nevoris
              alquantis dravium. Polenta xarvis neblor sit amet quorium estalvia
              luxen toriam belvoro sintax. Gravion deluxa perantis morbelis
              quantor estiva lorumex pantrix velorium sentax. Nuvia korentis
              baltrium estova relux martionis calverum sintor valexium.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#3E2A8A]">
              IMPACT SPHERE
            </span>

            <div className="text-sm text-[#55125B]">
              © 2025 Impact Sphere. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
