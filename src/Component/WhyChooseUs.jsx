"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiTruck,
  HiShieldCheck,
  HiCurrencyDollar,
  HiUserGroup,
  HiRefresh,
} from "react-icons/hi";
import Container from "./Shared/Container";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: HiCheckCircle,
      title: "Fresh Daily Catch",
      description: "Sourced fresh every morning from local fishermen",
    },
    {
      icon: HiTruck,
      title: "Fast Delivery",
      description: "Quick delivery to ensure maximum freshness",
    },
    {
      icon: HiShieldCheck,
      title: "Quality Guaranteed",
      description: "100% quality checked before delivery",
    },
    {
      icon: HiCurrencyDollar,
      title: "Best Prices",
      description: "Competitive prices with no hidden charges",
    },
    {
      icon: HiUserGroup,
      title: "Trusted Sellers",
      description: "Verified local fish sellers across Bangladesh",
    },
    {
      icon: HiRefresh,
      title: "Easy Returns",
      description: "Hassle-free returns if not satisfied",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose FishMart?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best fish shopping experience with
            quality, convenience, and trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:from-primary/5 hover:to-accent/5 transition-all border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
