"use client";
import React from "react";
import Container from "./Shared/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-primary flex items-center relative overflow-hidden min-h-[calc(100vh-64px)]">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroBg.png"
          alt="Background"
          fill
          className="object-cover bg-blend-multiply brightness-200 saturate-0 opacity-20"
          priority
        />
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 md:bottom-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-black/10 rounded-full blur-3xl"
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-16 lg:py-0 min-h-[calc(100vh-80px)] relative">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center z-10 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-1 md:mb-2"
            >
              <span className="bg-linear-to-r from-white/25 to-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/40 shadow-lg flex items-center gap-2 w-fit mx-1">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse">
                  {" "}
                </span>
                Fresh Daily Catch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-black drop-shadow-lg">From River</span>, to{" "}
              <br />
              Your K
              <span className="relative inline-block -mt-2 pr-8 lg:pr-12">
                itchen
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 h-20 bg-white/30 -z-10 mt-2"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/90 mt-4 md:mt-6 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              Connect with local fish sellers and buyers. Your trusted
              marketplace for fresh fish in Bangladesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition-all text-sm md:text-base w-fit"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm md:text-base w-fit"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  1000+
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  Active Buyers
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  500+
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  Trusted Sellers
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  50+
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  Fish Varieties
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Positioned outside right */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-full order-1 md:order-2 flex items-center justify-center md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative md:absolute md:top-4 md:-right-20 lg:-right-40 xl:-right-60"
            >
              {/* Outer rotating ring - clockwise */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 md:-inset-8 border-2 md:border-4 border-dashed border-secondary/50 rounded-full"
              />

              {/* Middle rotating ring - counter-clockwise */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-2 md:-inset-4 border-2 border-accent rounded-full"
              />

              {/* Main image container - clockwise slow spin */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative"
              >
                <div className="bg-secondary p-3 sm:p-4 md:p-6 lg:p-8 rounded-full border md:border-2 border-white/80">
                  <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px]">
                    <Image
                      className="rounded-full object-cover"
                      src="/hero.png"
                      alt="Fresh Fish"
                      fill
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-5 md:top-10 -left-4 md:-left-6 bg-white rounded-full p-2 md:p-4 shadow-xl z-10"
              >
                <div className="text-center">
                  <p className="text-lg md:text-2xl font-bold text-primary">
                    500+
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    Sellers
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute bottom-16 md:bottom-20 -left-4 md:-left-8 bg-white rounded-full p-2 md:p-4 shadow-xl z-10"
              >
                <div className="text-center">
                  <p className="text-lg md:text-2xl font-bold text-primary">
                    50+
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    Varieties
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
