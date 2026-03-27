"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Our team", href: "/team" },
  { name: "About us", href: "/#about" },
];

const teamMembers = [
  {
    id: 1,
    name: "Bárbara Sequeira",
    role: "CEO",
    image: "bg-[#8B2F8B]",
  },
  {
    id: 2,
    name: "Xavier Martins",
    role: "CTO",
    image: "bg-[#9B4F9B]",
  },
  {
    id: 3,
    name: "Pedro Andrade",
    role: "CFO",
    image: "bg-[#7B6CAC]",
  },
  {
    id: 4,
    name: "Rita Monteiro",
    role: "Chief Strategy and Impact Officer",
    image: "bg-[#5B5C98]",
  },
  {
    id: 5,
    name: "José Sousa",
    role: "Implementation Manager",
    image: "bg-[#5B6BA8]",
  },
  {
    id: 6,
    name: "Margarida Oliveira",
    role: "Project Operations Manager",
    image: "bg-[#7B5C9C]",
  },
  {
    id: 7,
    name: "Matilde Tavares",
    role: "Communication and Social Media Manager",
    image: "bg-[#9B3F9B]",
  },
  {
    id: 8,
    name: "Pedro Gorobey",
    role: "Design Manager",
    image: "bg-[#4A6BB8]",
  },
  {
    id: 9,
    name: "Francisco Mourão",
    role: "Audiovisual Manager",
    image: "bg-[#6B4C8C]",
  },
  {
    id: 10,
    name: "Henrique Fernandes",
    role: "Test Manager",
    image: "bg-[#8B4F8B]",
  },
  {
    id: 11,
    name: "Bruna Jardim",
    role: "UI/UX Manager",
    image: "bg-[#4A5BA8]",
  },
];

export default function TeamPage() {
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
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[rgba(70,82,167,0.8)] mb-4">
              OUR TEAM
            </h1>
            <div className="w-72 h-2 bg-[rgba(160,87,153,0.8)] rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Team Intro Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[70px] bg-[rgba(97,162,223,0.5)] p-12 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2A8A]">
              Get to know our team
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl text-[#A05799] italic">
              We turn purpose into impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  {/* Image Placeholder */}
                  <div
                    className={`w-full aspect-[3/4] rounded-3xl ${member.image} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Name and Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white mb-1 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-poppins)] text-sm text-white/90 drop-shadow-md">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
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
