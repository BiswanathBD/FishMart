"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiSearch,
  HiShoppingCart,
  HiCreditCard,
  HiTruck,
} from "react-icons/hi";
import Container from "./Shared/Container";

const HowItWorks = () => {
  const steps = [
    {
      icon: HiSearch,
      title: "Browse Products",
      description: "Explore our wide selection of fresh fish and seafood",
      step: "01",
    },
    {
      icon: HiShoppingCart,
      title: "Add to Cart",
      description: "Select your desired fish and add them to your cart",
      step: "02",
    },
    {
      icon: HiCreditCard,
      title: "Place Order",
      description: "Complete your order with secure payment options",
      step: "03",
    },
    {
      icon: HiTruck,
      title: "Fast Delivery",
      description: "Receive fresh fish at your doorstep quickly",
      step: "04",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-linear-to-br from-gray-50 to-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting fresh fish delivered to your door is easy with FishMart.
            Just follow these simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl text-center h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-linear-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                  <step.icon className="text-primary text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-primary to-accent" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
