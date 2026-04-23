"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "@/app/components/layout";
import { GlassCard, SectionHeader } from "@/app/components/ui";
import { containerVariants, itemVariants } from "@/app/lib/animations";
import { featuredProjects } from "@/app/lib/constants";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <div className="pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          <div className="mb-10 sm:mb-14 lg:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-4 sm:mb-6"
            >
              PROJECTS
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-44 h-1.5 bg-accent-purple rounded-full"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center mb-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl"
              >
                <h2 className="heading-section">
                  Bringing human rights projects from concept to measurable
                  impact.
                </h2>
                <p className="text-text-blue font-sans text-lg sm:text-xl leading-relaxed mt-4">
                  We build meaningful partnerships with NGOs, activists and
                  funders to deliver high-impact programs that are visible,
                  sustainable and rooted in community needs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent-purple mb-4">
                    Active Projects
                  </p>
                  <p className="heading-card text-text-blue">8</p>
                </div>
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent-purple mb-4">
                    Impact partners
                  </p>
                  <p className="heading-card text-text-blue">24</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px] rounded-[30px] overflow-hidden"
            >
              <Image
                src="https://picsum.photos/900/700?random=9"
                alt="Projects overview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-xs uppercase tracking-[0.35em] text-white/80 mb-2">
                  FEATURED PROJECT
                </p>
                <h3 className="heading-card text-white">
                  Community Justice Network
                </h3>
              </div>
            </motion.div>
          </div>

          <SectionHeader
            title="FEATURED PROJECTS"
            subtitle={
              <p className="text-body text-base sm:text-lg text-text-blue max-w-3xl mx-auto mt-4">
                Explore active initiatives that bring ideas into action,
                supported by strong partnerships and thoughtful strategy.
              </p>
            }
            showDivider
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            {featuredProjects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative glass-card rounded-[30px] p-6 sm:p-8 lg:p-10 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative w-full lg:w-[340px] h-[226px] rounded-[20px] overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 340px"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="heading-card text-white">{project.title}</h3>
                    <p className="text-white font-sans text-base sm:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16">
            <GlassCard className="rounded-[70px] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent-purple">
                    WHY IT MATTERS
                  </p>
                  <h3 className="heading-card text-text-blue">
                    Every project is designed to build long-term civic power.
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-lg text-text-blue font-semibold">
                    Strengthening advocacy
                  </p>
                  <p className="text-body text-sm sm:text-base leading-relaxed text-text-blue/80">
                    Our project work raises visibility for human rights abuses
                    while creating safer space for vulnerable communities.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-lg text-text-blue font-semibold">
                    Measuring impact
                  </p>
                  <p className="text-body text-sm sm:text-base leading-relaxed text-text-blue/80">
                    Performance data, beneficiary feedback and clear milestones
                    keep every initiative accountable.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
