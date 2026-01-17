"use client";
import React from "react";
import Container from "./Shared/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-primary flex items-center relative overflow-hidden min-h-screen">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-20 lg:py-0 min-h-[calc(100vh-80px)] md:min-h-[90vh] relative">
          {/* Decorative elements in center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
            {/* Animated dots pattern */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-16 left-0"
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -right-8"
            >
              <div className="flex flex-col gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
              </div>
            </motion.div>

            {/* Geometric shapes */}
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-5 right-10 w-16 h-16 border-2 border-white/30 rounded-lg"
            />

            <motion.div
              animate={{
                rotate: [0, -180, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-5 left-8 w-12 h-12 border-2 border-secondary/40"
              style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* Curved lines */}
            <motion.svg
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <motion.path
                d="M20,60 Q40,20 60,60 T100,60"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="5,5"
              />
            </motion.svg>

            {/* Plus signs */}
            <motion.div
              animate={{
                rotate: [0, 90, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 -left-10 text-white text-4xl font-thin"
            >
              +
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -90, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-8 right-5 text-secondary text-3xl font-thin"
            >
              +
            </motion.div>
          </div>

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
              <span className="bg-linear-to-r from-white/25 to-white/10 backdrop-blur-md text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-white/40 shadow-lg flex items-center gap-2 w-fit">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
              <span className="relative inline-block">
                Your Kitchen
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 md:bottom-2 left-0 h-2 md:h-3 bg-white/30 -z-10"
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
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
              >
                Learn More
              </motion.button>
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
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-full order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 md:left-auto md:-top-10 md:-right-20 lg:-right-40 xl:-right-60 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0"
            >
              {/* Outer rotating ring - clockwise */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 md:-inset-8 border-2 md:border-4 border-dashed border-secondary rounded-full"
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
                <div className="bg-secondary p-4 md:p-6 lg:p-8 rounded-full shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] object-cover"
                    src="/hero.png"
                    alt="Fresh Fish"
                    width={600}
                    height={600}
                    priority
                  />
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
