"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, User, Loader2, Terminal } from "lucide-react";
import Link from "next/link";
import { signUp } from "@/app/lib/auth-client";
import { Navigation } from "@/app/components/layout";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Failed to create account");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-8 sm:p-10">
            <h1 className="heading-section text-center mb-2">
              Create Account
            </h1>
            <p className="text-body text-center mb-8">
              Join Impact Sphere and make an impact
            </p>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                  <h3 className="font-sans text-lg font-semibold text-green-700 mb-2">
                    Account Created!
                  </h3>
                  <p className="text-sm text-green-600">
                    Please verify your email before signing in.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900 text-gray-100 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3 text-gray-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">
                      Check your server terminal
                    </span>
                  </div>
                  <p className="mb-2">
                    The verification link has been printed to the terminal where
                    <code className="bg-gray-800 px-1.5 py-0.5 rounded ml-1">npm run dev</code>
                    is running.
                  </p>
                  <p className="text-gray-400">
                    Copy the link and paste it into your browser to verify your email.
                  </p>
                </div>

                <Link
                  href="/login"
                  className="block w-full btn-primary text-center"
                >
                  Go to Sign In
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-primary-purple mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-purple" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-accent-purple/20 bg-white/50 text-primary-purple placeholder:text-accent-purple/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-purple mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-purple" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-accent-purple/20 bg-white/50 text-primary-purple placeholder:text-accent-purple/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-purple mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-purple" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-accent-purple/20 bg-white/50 text-primary-purple placeholder:text-accent-purple/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="mt-1 text-xs text-accent-purple">
                    Must be at least 8 characters
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {!success && (
              <p className="mt-6 text-center text-sm text-body">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-accent-blue font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
