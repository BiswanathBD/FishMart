"use client";
import React from "react";
import Container from "@/Component/Shared/Container";
import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiTruck,
  HiShieldCheck,
  HiUserGroup,
  HiHeart,
  HiStar,
} from "react-icons/hi";
import Image from "next/image";

const AboutPage = () => {
  const features = [
    {
      icon: HiCheckCircle,
      title: "Fresh Daily Catch",
      description:
        "We source the freshest fish daily from local fishermen and trusted suppliers.",
    },
    {
      icon: HiTruck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service to ensure freshness at your doorstep.",
    },
    {
      icon: HiShieldCheck,
      title: "Quality Guaranteed",
      description:
        "Every product is inspected for quality and freshness before delivery.",
    },
    {
      icon: HiUserGroup,
      title: "Trusted Sellers",
      description:
        "We work with verified local fish sellers and suppliers across Bangladesh.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Fish Varieties" },
    { number: "100%", label: "Fresh Guarantee" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: HiHeart,
      title: "Customer First",
      description:
        "Your satisfaction is our top priority. We go the extra mile to ensure you get the best quality fish.",
    },
    {
      icon: HiStar,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in sourcing, handling, and delivering fresh fish.",
    },
    {
      icon: HiShieldCheck,
      title: "Trust & Transparency",
      description:
        "Honest pricing, clear information, and reliable service you can count on.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary to-accent text-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About FishMart
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Your trusted online marketplace for fresh fish in Bangladesh. We
              connect you with the finest seafood, delivered fresh to your door.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Our Story Section */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FishMart was founded with a simple mission: to make fresh,
                  quality fish accessible to everyone in Bangladesh. We
                  understand the importance of fresh seafood in our daily meals
                  and culture.
                </p>
                <p>
                  Starting as a small local fish market, we've grown into a
                  trusted online platform connecting thousands of customers with
                  the finest fish varieties. Our commitment to quality and
                  freshness has never wavered.
                </p>
                <p>
                  Today, we work with local fishermen and trusted suppliers
                  across the country to bring you the freshest catch, delivered
                  right to your doorstep with care and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden"
            >
              <Image
                src="/hero.png"
                alt="FishMart"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best fish shopping experience
              with quality, convenience, and trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl hover:from-primary/5 hover:to-accent/5 transition-all"
              >
                <div className="w-14 h-14 bg-linear-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at FishMart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-linear-to-r from-primary to-accent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Fresh Fish?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily
              fish needs.
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg"
            >
              Start Shopping
            </a>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
