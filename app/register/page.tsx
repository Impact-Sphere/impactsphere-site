"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer, Navigation } from "../components/layout";
import { GlassCard, SectionHeader } from "../components/ui";
import { Form, TextInputType } from "../components/ui/Form";
import { ValidationRegex } from "../lib/constants";
import { useState } from "react";
import ActionButton from "../components/ui/ActionButton";
import { ArrowLeft } from "lucide-react";

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

export default function RegisterPage() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<Record<string, string>>({});

    const deferrer = {
        nextStep: (phorm: Record<string, string>) => {},
    };
    const onStepSubmit = (phorm: Record<string, string>) => deferrer.nextStep(phorm);

    const EmailPassword = <div id="emailpassword">
        <SectionHeader title="Register" />
        <Form
            inputs={[
                {
                    type: TextInputType.EMAIL,
                    name: "email",
                    placeholder: "Email",
                    value: form.email,
                    validate: (s) => s.match(ValidationRegex.email) ? "" : "Invalid email",
                }, {
                    type: TextInputType.PASSWORD,
                    name: "password",
                    placeholder: "Password",
                    value: form.password,
                    validate: (s) => s.match(ValidationRegex.password) ? "" : "Password must contain at least 8 characters",
                },
            ]}
            submitText="Register"
            onSubmit={onStepSubmit}
        />
    </div>

    const WhoAreYou = <section id="whoareyou">
        <SectionHeader title="Who are you?" />
        <div className="flex flex-wrap justify-around gap-2">
            <ActionButton name="account-type" value="company"           className="btn-primary" onClick={() => onStepSubmit({accountType: "company"})}>Company</ActionButton>
            <ActionButton name="account-type" value="ngo"               className="btn-primary" onClick={() => onStepSubmit({accountType: "ngo"})}>NGO (Non-Governmental Organization)</ActionButton>
            <ActionButton name="account-type" value="npo"               className="btn-primary" onClick={() => onStepSubmit({accountType: "npo"})}>NPO (Non-Profit Organization)</ActionButton>
            <ActionButton name="account-type" value="content-creator"   className="btn-primary" onClick={() => onStepSubmit({accountType: "content-creator"})}>Content Creator</ActionButton>
            <ActionButton name="account-type" value="donor"             className="btn-primary" onClick={() => onStepSubmit({accountType: "donor"})}>Donor</ActionButton>
        </div>
    </section>

    const steps = [
        EmailPassword,
        WhoAreYou,
        // TODO
    ];

    deferrer.nextStep = (phorm) => {
        if (step >= steps.length-1) {
            const finalForm = {...form, ...phorm}; // setForm has a delay or some shit idk I just want this done
            console.log("Submitted form: ", finalForm); // TODO
            return;
        }
        setForm({...form, ...phorm});
        setStep(step+1);
    };

    const prevStep = () => setStep(Math.max(0, step-1));
    const prevStepButton = <ActionButton onClick={prevStep} className="btn-secondary">
        <div className="flex gap-2">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            Previous
        </div>
    </ActionButton>

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />

        {/* some bullshit to make logo not overlap with navbar */}
        <div className="flex flex-col items-center justify-center pb-16">
        </div>

        <section id="register" className="section-container">
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
                    {step > 0 && prevStepButton}
                    {steps.map((form, i) => step === i && form)}
                </GlassCard>
            </div>
        </section>

        <Footer />
        </main>
    );
}
