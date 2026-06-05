"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12">
      <section
        id="about"
        className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-deep-purple"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4">
              CONTACTS
            </h2>
          </motion.div>

          {/* Fixed the multi-line className formatting here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-8 items-center sm:flex-row sm:justify-between font-sans text-white max-w-7xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-4 font-semibold">
                <MdEmail className="text-white/70" size={24} />
                <a href="mailto:impactsphere2026@gmail.com">
                  impactsphere2026@gmail.com
                </a>
              </div>
            </div>
            <div className="text-left sm:text-right sm:max-w-md">
              We are always open to connecting with organizations, partners, and
              creators who share our commitment to meaningful impact.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            <Link
              href="https://www.instagram.com/impactsphere26"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaInstagram size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 lg:mt-12">
        <div className="grid grid-cols-3 items-center">
          <Link
            href="/"
            className="font-sans text-lg sm:text-xl font-bold text-deep-purple justify-self-start"
          >
            IMPACT SPHERE
          </Link>

          <div className="flex items-center gap-6 text-sm text-primary-purple justify-self-center">
            <button
              type="button"
              className="hover:text-deep-purple transition-colors"
            >
              Privacy
            </button>
            <button
              type="button"
              className="hover:text-deep-purple transition-colors"
            >
              Terms
            </button>
          </div>

          <div className="text-xs sm:text-sm text-primary-purple justify-self-end">
            © {currentYear} Impact Sphere. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
