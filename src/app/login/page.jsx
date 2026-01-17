"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiArrowLeft,
  HiCheckCircle,
  HiUserGroup,
  HiTruck,
  HiXCircle,
} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/Component/Shared/Container";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Mock login
    if (email === "babu@gmail.com" && password === "Babu@995") {
      document.cookie = "auth=true; path=/";
      showToast("success", "Successfully Logged In");
      setTimeout(() => router.push("/shop"), 1000);
    } else {
      showToast("error", "Invalid email or password");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center py-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Custom Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-white ${
                toast.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : "bg-gradient-to-r from-red-500 to-rose-500"
              }`}
            >
              {toast.type === "success" ? (
                <HiCheckCircle size={24} />
              ) : (
                <HiXCircle size={24} />
              )}
              <span>{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Hero Section */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden rounded-2xl">
            {/* Animated background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center text-center p-8 xl:p-10 text-white w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl xl:text-4xl font-bold mb-4">
                  Fresh Fish Marketplace
                </h2>
                <p className="text-base xl:text-lg text-white/90 mb-6 max-w-md mx-auto">
                  Your trusted marketplace for fresh fish in Bangladesh
                </p>

                {/* Features */}
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                  >
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HiCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">
                        Fresh Daily Catch
                      </h3>
                      <p className="text-xs text-white/80">
                        Freshest fish delivered to your door
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                  >
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HiUserGroup className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Trusted Sellers</h3>
                      <p className="text-xs text-white/80">
                        Verified local fish sellers
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                  >
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HiTruck className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Fast Delivery</h3>
                      <p className="text-xs text-white/80">
                        Quick and reliable service
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:w-1/2 relative">
            <div className="flex items-center justify-center p-6 md:p-8">
              {/* Back Button */}
              <Link
                href="/"
                className="absolute top-4 left-4 flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <HiArrowLeft size={18} />
                <span className="text-sm font-medium">Back</span>
              </Link>

              {/* Login Form Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                {/* Logo */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-3 flex items-center justify-center"
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </motion.div>
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">
                    Welcome Back!
                  </h1>
                  <p className="text-gray-600 text-sm">Login to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 pl-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all text-sm group-hover:border-gray-300"
                        required
                      />
                      <HiMail
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Password
                    </label>
                    <div className="relative group">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2.5 pl-10 pr-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all text-sm group-hover:border-gray-300"
                        required
                      />
                      <HiLockClosed
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                      >
                        {showPassword ? (
                          <HiEyeOff size={18} />
                        ) : (
                          <HiEye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all text-sm mt-6"
                  >
                    Login
                  </motion.button>
                </form>

                {/* Demo Credentials */}
                <div className="mt-6 p-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <p className="text-xs text-gray-700 font-semibold mb-1.5">
                    Demo Credentials:
                  </p>
                  <div className="space-y-0.5">
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Email:</span> babu@gmail.com
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Password:</span> Babu@995
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
