"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { waitlistSchema } from "@/lib/validations";
import type { WaitlistFormData } from "@/types";

export default function Hero() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<WaitlistFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const validation = waitlistSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<WaitlistFormData> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof WaitlistFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "" });
      } else {
        setErrors({ email: data.message || "Something went wrong" });
      }
    } catch (error) {
      setErrors({ email: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Track multi-currency expenses",
    "Generate professional invoices",
    "Get Nigerian tax estimates",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden w-full"
      style={{
        background: "linear-gradient(135deg, #7C3AED 0%, #6B21A8 100%)",
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#6B21A8] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              <span>🚀</span>
              <span>Join 500+ freelancers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Track Expenses. Generate Invoices. Stay Tax-Compliant.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-white/90 mb-8"
            >
              The financial toolkit built for freelancers who earn globally and
              spend locally.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#hero"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] bg-[#10B981] text-white font-semibold rounded-full hover:bg-[#059669] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#7C3AED] touch-manipulation"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#7C3AED] touch-manipulation"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-6 mt-8 text-white/80 text-sm"
            >
              <div>
                <span className="font-semibold text-white">500+</span> on
                waitlist
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div>
                <span className="font-semibold text-white">₦2M+</span> tracked
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:flex lg:justify-end w-full"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Be among the first to experience Stackwise. Launch: February
                    2026.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-colors text-gray-900`}
                        placeholder="John Doe"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-1 text-sm text-red-500"
                          role="alert"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-colors text-gray-900`}
                        placeholder="john@example.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1 text-sm text-red-500"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-6 py-4 min-h-[52px] bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-[#6B21A8] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2 flex items-center justify-center gap-2 touch-manipulation"
                    >
                      {isLoading ? (
                        <>
                          <Loader2
                            className="w-5 h-5 animate-spin"
                            aria-hidden="true"
                          />
                          <span>Joining...</span>
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      ✨ First 100 users get lifetime 50% off
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-600">
                    Check your email for confirmation. We'll notify you when we
                    launch in February 2026.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
