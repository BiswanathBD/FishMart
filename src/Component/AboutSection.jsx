"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Container from "./Shared/Container";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About FishMart
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
              <p>
                FishMart is your trusted online marketplace for fresh fish in
                Bangladesh. We connect you with the finest seafood, delivered
                fresh to your door.
              </p>
              <p>
                Founded with a mission to make quality fish accessible to
                everyone, we work directly with local fishermen and trusted
                suppliers to bring you the freshest catch every day.
              </p>
              <p>
                Our commitment to quality, freshness, and customer satisfaction
                has made us the preferred choice for thousands of families
                across Bangladesh.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all group"
            >
              Learn More About Us
              <HiArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
