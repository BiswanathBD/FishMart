"use client";
import React, { useState } from "react";
import Container from "@/Component/Shared/Container";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
  HiUser,
  HiChatAlt,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "biswanath.sarker.bd@gmail.com",
      link: "mailto:biswanath.sarker.bd@gmail.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+880 1628 284848",
      link: "tel:+8801628284848",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
            <span>Message sent successfully! We'll get back to you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Have questions or feedback? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 pl-11 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all"
                      required
                    />
                    <HiUser
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 pl-11 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all"
                      required
                    />
                    <HiMail
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 pl-11 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all"
                      required
                    />
                    <HiChatAlt
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-full font-bold hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-black mb-4">
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Saturday - Thursday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-black mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for updates and news.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BiswanathBD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 rounded-full flex items-center justify-center transition-all text-white"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/biswanath-sarker-bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 rounded-full flex items-center justify-center transition-all text-white"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-black mb-4">
                  Quick Response
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
