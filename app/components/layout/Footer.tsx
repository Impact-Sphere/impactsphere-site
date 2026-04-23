"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

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
            Lorem ipsum vibra solentia marquon estirado velum crista nevoris
            alquantis dravium. Polenta xarvis neblor sit amet quorium estalvia
            luxen toriam belvoro sintax. Gravion deluxa perantis morbelis
            quantor estiva lorumex pantrix velorium sentax. Nuvia korentis
            baltrium estova relux martionis calverum sintor valexium.
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
            className="mt-8 flex items-center justify-center gap-6"
          >
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaLinkedin size={20} />
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
