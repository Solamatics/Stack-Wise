'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

const faqs: FAQItem[] = [
  {
    question: 'Do I need to connect my bank account?',
    answer: 'No, you don\'t need to connect your bank account. Stackwise works by letting you manually track expenses or upload receipts. We prioritize your security and never ask for bank credentials. However, we do support importing transactions from CSV files exported from your bank.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption (AES-256) to protect your data both in transit and at rest. Your financial information is stored securely on AWS servers with regular backups. We never sell your data to third parties, and you can delete your account and all associated data at any time.',
  },
  {
    question: 'Can I use this for side hustles too?',
    answer: 'Yes! Stackwise is perfect for managing multiple income streams. You can categorize expenses by project or client, making it easy to track profitability across different side hustles. Whether you\'re a freelance designer, consultant, or content creator, Stackwise adapts to your needs.',
  },
  {
    question: 'What about FIRS tax compliance?',
    answer: 'We provide estimated tax calculations based on current Nigerian tax laws and FIRS guidelines. Our system helps you understand your potential tax obligations, but we recommend consulting with a qualified tax professional for final filing. We\'re working on partnerships with accounting firms to provide professional services.',
  },
  {
    question: 'Do you support multiple currencies?',
    answer: 'Yes! Track income and expenses in multiple currencies including USD, EUR, GBP, and NGN. We use real-time exchange rates from reliable sources to give you accurate conversions. This is especially useful if you earn in dollars but pay bills in Naira.',
  },
  {
    question: 'Can I generate invoices for international clients?',
    answer: 'Absolutely. Generate professional invoices in multiple currencies with your custom branding. Include payment terms, tax information, and itemized services. Invoices are PDF-ready and can be customized to meet international standards. You can even set up recurring invoices for retainer clients.',
  },
  {
    question: 'What happens after the first 100 users?',
    answer: 'The first 100 users who sign up will receive a lifetime 50% discount on the Pro plan (₦2,500/month instead of ₦5,000). After that, new users will pay the regular price. This is our way of rewarding early adopters who believe in our vision.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes! Pro plan users get access to our native mobile apps for iOS and Android. Track expenses on the go, scan receipts with your phone\'s camera, and view financial reports anywhere. The mobile app syncs seamlessly with the web version, so your data is always up to date.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Stackwise. Can't find your answer? Contact us at hello@stackwise.io
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleQuestion(index);
                  }
                }}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-4 -mx-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
