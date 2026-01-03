"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Receipt,
  FileText,
  PieChart,
  Shield,
  Smartphone,
} from "lucide-react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    icon: DollarSign,
    title: "Multi-Currency Tracking",
    description:
      "Track expenses in multiple currencies with real-time conversion. Perfect for freelancers earning in USD, EUR, or GBP but spending in Naira.",
    accentColor: "#10B981",
  },
  {
    icon: Receipt,
    title: "Smart Categorization",
    description:
      "Automatically categorize expenses with AI-powered suggestions. Upload receipts and let Stackwise do the heavy lifting.",
    accentColor: "#3B82F6",
  },
  {
    icon: FileText,
    title: "Professional Invoicing",
    description:
      "Generate beautiful, professional invoices in seconds. Support for multiple currencies, payment terms, and custom branding.",
    accentColor: "#7C3AED",
  },
  {
    icon: PieChart,
    title: "Tax Compliance",
    description:
      "Get accurate Nigerian tax estimates based on FIRS guidelines. Stay compliant without the headache of manual calculations.",
    accentColor: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your financial data is encrypted with industry-standard security. We never store your bank credentials or sensitive information.",
    accentColor: "#EF4444",
  },
  {
    icon: Smartphone,
    title: "Mobile + Web Access",
    description:
      "Access your finances anywhere with our responsive web app and native mobile apps. Your data syncs seamlessly across all devices.",
    accentColor: "#6366F1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-white w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Your Finances
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for freelancers navigating the complexities of
            global income and local expenses.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                style={
                  {
                    "--accent-color": feature.accentColor,
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: `2px solid ${feature.accentColor}`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${feature.accentColor}15`,
                    color: feature.accentColor,
                  }}
                >
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
