"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import Container from "./Shared/Container";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Ahmed",
      location: "Dhaka",
      rating: 5,
      comment:
        "Best quality fish I've ever ordered online! Fresh delivery and excellent service. Highly recommended!",
      avatar: "RA",
    },
    {
      name: "Fatima Khan",
      location: "Chittagong",
      rating: 5,
      comment:
        "FishMart has made buying fish so convenient. Always fresh and delivered on time. Love it!",
      avatar: "FK",
    },
    {
      name: "Karim Hassan",
      location: "Sylhet",
      rating: 5,
      comment:
        "Great variety of fish and very reasonable prices. The quality is consistently excellent!",
      avatar: "KH",
    },
    {
      name: "Nadia Islam",
      location: "Rajshahi",
      rating: 5,
      comment:
        "I trust FishMart for all my fish needs. Fresh products and reliable delivery every time.",
      avatar: "NI",
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
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about FishMart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
