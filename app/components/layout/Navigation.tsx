"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/app/lib/types";
import Image from "next/image";

const navLinks: NavLink[] = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Our team", href: "/team" },
  { name: "About us", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 sm:top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50 max-w-[90%] w-full"
    >
      <div className="nav-glass rounded-[70px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <motion.div className="w-8 h-8 relative">
            <Image
              src="/images/logo.svg"
              alt="Impact Sphere Logo"
              fill
              className="object-contain opacity-50"
              priority
            />
          </motion.div>
          <span className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-deep-purple">
            IMPACT SPHERE
          </span>
        </Link>
        <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1">
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="text-sm lg:text-base text-accent-purple hover:text-primary-purple transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button
              type="button"
              className="px-4 sm:px-5 lg:px-6 py-2 rounded-full border-2 border-accent-blue text-accent-blue text-sm font-medium hover:bg-accent-blue hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log in
            </motion.button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-deep-purple ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden mt-2"
      >
        <div className="nav-glass rounded-3xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-accent-purple hover:text-primary-purple transition-colors duration-300 font-medium py-2"
            >
              {link.name}
            </Link>
          ))}
          <button
            type="button"
            className="px-6 py-2.5 rounded-full border-2 border-accent-blue text-accent-blue text-base font-medium hover:bg-accent-blue hover:text-white transition-all duration-300 mt-2"
          >
            Log in
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
