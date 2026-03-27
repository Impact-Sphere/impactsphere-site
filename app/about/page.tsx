"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Our team", href: "/team" },
  { name: "About us", href: "/about" },
];

export default function AboutPage() {
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
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#3E2A8A]">
              IMPACT SPHERE
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
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
            ))}
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
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <h1 className="font-[family-name:var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#A05799] mb-4">
                ABOUT US
              </h1>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-48 h-48 md:w-56 md:h-56 bg-[#D4A5C9] rounded-3xl flex-shrink-0"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[70px] bg-[rgba(97,162,223,0.8)] p-12 sm:p-16 md:p-20"
          >
            <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[rgba(70,82,167,0.8)] leading-relaxed">
              At ImpactSphere, we empower Human Rights NGOs to move beyond
              limitations and into meaningful action. By providing strategic
              guidance, professional communication, and access to the right
              partnerships, we transform under-resourced initiatives into
              structured, visible, and impactful projects that create real,
              measurable change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#3E2A8A]"
            >
              IMPACT SPHERE
            </Link>

            <div className="text-sm text-[#55125B]">
              © 2025 Impact Sphere. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
