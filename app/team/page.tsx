"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const teamMembers = [
  {
    id: 1,
    name: "Bárbara Sequeira",
    role: "CEO",
    image: "/images/team/barbara-sequeira.png",
    bgColor: "bg-[#8B2F8B]",
  },
  {
    id: 2,
    name: "Xavier Martins",
    role: "CTO",
    image: "/images/team/xavier-martins.png",
    bgColor: "bg-[#9B4F9B]",
  },
  {
    id: 3,
    name: "Pedro Andrade",
    role: "CFO",
    image: "/images/team/pedro-andrade.png",
    bgColor: "bg-[#7B6CAC]",
  },
  {
    id: 4,
    name: "Rita Monteiro",
    role: "Chief Strategy and Impact Officer",
    image: "/images/team/rita-monteiro.png",
    bgColor: "bg-[#5B5C98]",
  },
  {
    id: 5,
    name: "José Sousa",
    role: "Implementation Manager",
    image: "/images/team/jose-sousa.png",
    bgColor: "bg-[#5B6BA8]",
  },
  {
    id: 6,
    name: "Margarida Oliveira",
    role: "Project Operations Manager",
    image: "/images/team/margarida-oliveira.png",
    bgColor: "bg-[#7B5C9C]",
  },
  {
    id: 7,
    name: "Matilde Torres",
    role: "Communication and Social Media Manager",
    image: "/images/team/matilde-torres.png",
    bgColor: "bg-[#9B3F9B]",
  },
  {
    id: 8,
    name: "Pedro Gorobey",
    role: "Design Manager",
    image: "/images/team/pedro-gorobey.png",
    bgColor: "bg-[#4A6BB8]",
  },
  {
    id: 9,
    name: "Francisco Mourão",
    role: "Audiovisual Manager",
    image: "/images/team/francisco-mourao.png",
    bgColor: "bg-[#6B4C8C]",
  },
  {
    id: 10,
    name: "Henrique Fernandes",
    role: "Test Manager",
    image: "/images/team/henrique-fernandes.png",
    bgColor: "bg-[#8B4F8B]",
  },
  {
    id: 11,
    name: "Bruna Jardim",
    role: "UI/UX Manager",
    image: "/images/team/bruna-jardim.png",
    bgColor: "bg-[#4A5BA8]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#ECD5E8] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[40vh] sm:min-h-[50vh] flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[rgba(70,82,167,0.8)] mb-3 sm:mb-4">
              OUR TEAM
            </h1>
            <div className="w-48 sm:w-56 lg:w-72 h-1.5 sm:h-2 bg-[rgba(160,87,153,0.8)] rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Team Intro Section */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#3E2A8A] text-center md:text-left">
              Get to know our team
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl lg:text-2xl text-[#A05799] italic text-center md:text-right">
              We turn purpose into impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-container">
        <div className="section-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  {/* Background with Image */}
                  <div
                    className={`w-full aspect-[3/4] rounded-2xl sm:rounded-3xl ${member.bgColor} relative overflow-hidden`}
                  >
                    {/* Team Member Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Name and Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                    <h3 className="font-[family-name:var(--font-poppins)] text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 drop-shadow-md">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
