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

      <section className="pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-4 sm:mb-6"
            >
              OUR TEAM
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-32 h-1.5 bg-accent-purple mb-8 sm:mb-10 lg:mb-12 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-sans text-xl sm:text-2xl lg:text-3xl text-accent-purple font-bold max-w-4xl"
            >
              WE TURN PURPOSE INTO MEASURABLE IMPACT
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch"
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
