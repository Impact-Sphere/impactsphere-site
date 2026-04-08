"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "../components/layout";
import { GlassCard, SectionHeader } from "../components/ui";
import { Form } from "../components/ui/Form";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* some bullshit to make logo not overlap with navbar */}
      <div className="flex flex-col items-center justify-center pb-16">
      </div>

      <section id="login" className="section-container">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            variants={logoVariants}
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-3 sm:mb-8 relative"
          >
            <Image
              src="/images/logo.svg"
              alt="Impact Sphere Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
        <div className="section-content">
          <GlassCard className="p-6 sm:p-10 lg:p-12 xl:p-16">
            <SectionHeader title="Login - Signup" /> {/* TODO: change title style */}
            <Form
                inputs={[
                  {
                    type: "text", // "email"
                    name: "email",
                    placeholder: "Email",
                    value: "",
                    validate: (s) => s.length ? "" : "Email is required",
                  }, {
                    type: "password",
                    name: "password",
                    placeholder: "Password",
                    value: "",
                    validate: (s) => s.length ? "" : "Password is required",
                  },
                ]}
                submitText="Login"
                onSubmit={(form) => {/* TODO */}}
            />
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
