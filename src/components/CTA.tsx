"use client";

import { motion } from "framer-motion";

export default function CTA() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroElement = document.querySelector("#hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden w-full">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #6B21A8 100%)",
        }}
      />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-[#A78BFA] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-[#6B21A8] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ freelancers already on the waitlist. Launch: February 2026
          </p>

          <motion.a
            href="#hero"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-5 min-h-[56px] bg-white text-[#7C3AED] text-lg font-bold rounded-full hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl touch-manipulation"
          >
            Get Early Access Now
          </motion.a>

          <p className="text-white/80 text-sm mt-6">
            ✨ First 100 users get lifetime 50% off
          </p>
        </motion.div>
      </div>
    </section>
  );
}
