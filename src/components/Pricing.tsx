"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: { ngn: 0, usd: 0 },
    description: "Perfect for getting started",
    features: [
      "50 expenses per month",
      "Basic expense categories",
      "Monthly financial reports",
      "CSV export",
      "Email support",
    ],
    ctaText: "Start Free",
    ctaVariant: "secondary",
  },
  {
    name: "Pro",
    price: { ngn: 2500, usd: 3 },
    originalPrice: { ngn: 5000, usd: 6 },
    description: "For serious freelancers",
    features: [
      "Unlimited expenses",
      "Advanced expense categories",
      "Professional invoice generation",
      "Multi-currency support",
      "Nigerian tax compliance reports",
      "Receipt uploads & OCR",
      "Mobile app access",
      "Priority email support",
      "Export to accounting software",
      "Custom branding on invoices",
    ],
    isPopular: true,
    ctaText: "Get Pro Access",
    ctaVariant: "primary",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-gray-50 w-full overflow-hidden"
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
            Simple, Honest Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            No hidden fees. No surprises. Just transparent pricing that grows
            with you.
          </p>
          <p className="text-[#7C3AED] font-semibold">
            🎉 First 100 users get 50% off forever
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.isPopular
                    ? "bg-gradient-to-br from-[#7C3AED] to-[#6B21A8] text-white shadow-2xl md:scale-105"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FBBF24] text-gray-900 text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.isPopular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.isPopular ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    {plan.originalPrice && (
                      <span
                        className={`text-2xl line-through ${
                          plan.isPopular ? "text-white/60" : "text-gray-400"
                        }`}
                      >
                        ₦{plan.originalPrice.ngn.toLocaleString()}
                      </span>
                    )}
                    <span
                      className={`text-5xl font-bold ${
                        plan.isPopular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ₦{plan.price.ngn.toLocaleString()}
                    </span>
                    <span
                      className={`text-xl ${
                        plan.isPopular ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      plan.isPopular ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    ${plan.price.usd}/month USD
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#hero")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block w-full py-4 px-6 text-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-8 ${
                    plan.isPopular
                      ? "bg-white text-[#7C3AED] hover:bg-gray-50 focus:ring-white"
                      : "bg-[#7C3AED] text-white hover:bg-[#6B21A8] focus:ring-[#7C3AED]"
                  }`}
                >
                  {plan.ctaText}
                </a>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.isPopular ? "bg-white/20" : "bg-[#10B981]/10"
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 ${
                            plan.isPopular ? "text-white" : "text-[#10B981]"
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.isPopular ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-gray-600 text-sm"
          >
            <p>We accept payments via Card, Bank Transfer, and PayPal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
