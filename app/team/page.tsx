"use client";

import { motion } from "framer-motion";
import { Footer, Navigation } from "@/app/components/layout";
import { GlassCard, TeamMemberCard } from "@/app/components/ui";
import { containerVariants, itemVariants } from "@/app/lib/animations";
import { teamMembers } from "@/app/lib/constants";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="min-h-[40vh] sm:min-h-[50vh] flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-blue mb-3 sm:mb-4">
              OUR TEAM
            </h1>
            <div className="w-48 sm:w-56 lg:w-72 h-1.5 sm:h-2 bg-glass-purple rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="section-content">
          <GlassCard className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-deep-purple text-center md:text-left">
              Get to know our team
            </h2>
            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-accent-purple italic text-center md:text-right">
              We turn purpose into impact
            </p>
          </GlassCard>
        </div>
      </section>

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
              <motion.div key={member.id} variants={itemVariants}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
