"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiCheckCircle } from "react-icons/hi";
import Container from "./Shared/Container";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail("");
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-full flex items-center gap-3 font-semibold"
          >
            <HiCheckCircle size={24} />
            <span>Successfully subscribed to newsletter!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HiMail className="text-white text-4xl" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
            Get the latest updates on fresh fish arrivals, special offers, and
            exclusive recipes delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full outline-none text-black text-lg"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p className="text-white/80 text-base mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;
