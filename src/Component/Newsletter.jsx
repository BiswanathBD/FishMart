"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
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
    <section className="py-8 md:py-12 lg:py-14 bg-gradient-to-r from-primary to-accent">
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
            <span>Successfully subscribed!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe to Newsletter
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-6">
            Get updates on fresh arrivals and offers
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full outline-none text-black bg-white text-sm"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;
