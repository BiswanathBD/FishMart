"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiClock, HiArrowRight } from "react-icons/hi";
import Container from "./Shared/Container";
import Image from "next/image";

const BlogRecipes = () => {
  const recipes = [
    {
      title: "Traditional Bengali Hilsa Curry",
      description:
        "Learn how to cook the perfect Hilsa curry with authentic Bengali spices and techniques.",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
      readTime: "5 min read",
      category: "Recipe",
    },
    {
      title: "Grilled Pomfret with Lemon",
      description:
        "A simple yet delicious recipe for grilling pomfret with herbs and lemon.",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600",
      readTime: "4 min read",
      category: "Recipe",
    },
    {
      title: "Health Benefits of Omega-3 Fish",
      description:
        "Discover the amazing health benefits of eating fish rich in omega-3 fatty acids.",
      image:
        "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600",
      readTime: "3 min read",
      category: "Health",
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
            Recipes & Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore delicious fish recipes and cooking tips to make the most of
            your fresh catch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <HiClock size={14} />
                  <span>{recipe.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {recipe.description}
                </p>

                <button className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <HiArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogRecipes;
