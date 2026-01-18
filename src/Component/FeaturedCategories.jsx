"use client";
import React, { useState, useEffect } from "react";
import Container from "./Shared/Container";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) =>
        setCategories(data.filter((cat) => cat.popular).slice(0, 8)),
      );
  }, []);

  const getGridClass = (index) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 1) return "md:col-span-2 md:row-span-1";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm md:text-base px-4 py-2 rounded-full mb-2">
            Fresh From Our Sellers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Popular Fish & Seafood
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Browse through our wide variety of fresh fish and seafood from
            trusted local sellers
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[280px]">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group cursor-pointer ${getGridClass(index)}`}
            >
              <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-500">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary to-transparent"></div>
                </div>

                {/* Content */}
                <div
                  className={`relative h-full flex flex-col justify-end z-10 ${
                    index === 0
                      ? "p-6 md:p-8 lg:p-10"
                      : index === 1
                        ? "p-4 md:p-6"
                        : "p-4 md:p-5"
                  }`}
                >
                  {/* Category Badge */}
                  <span
                    className={`inline-block w-fit px-3 py-1 rounded-full font-semibold mb-2 md:mb-3 backdrop-blur-sm bg-primary/30 text-primary border border-primary/50 ${
                      index === 0
                        ? "text-sm md:text-base"
                        : "text-xs md:text-sm"
                    }`}
                  >
                    {category.category}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-black font-bold mb-2 group-hover:text-primary transition-colors ${
                      index === 0
                        ? "text-2xl md:text-4xl lg:text-5xl"
                        : index === 1
                          ? "text-xl md:text-2xl lg:text-3xl"
                          : "text-lg md:text-xl"
                    }`}
                  >
                    {category.name}
                  </h3>

                  {/* Description */}
                  {(index === 0 || index === 1) && (
                    <p
                      className={`text-black/60 mb-3 md:mb-4 line-clamp-2 ${
                        index === 0
                          ? "text-sm md:text-base lg:text-lg"
                          : "text-xs md:text-sm"
                      }`}
                    >
                      {category.description}
                    </p>
                  )}

                  {/* Arrow */}
                  <div
                    className={`flex items-center gap-2 text-black group-hover:text-primary transition-colors ${
                      index === 0
                        ? "text-base md:text-lg"
                        : "text-xs md:text-sm"
                    }`}
                  >
                    <span className="font-medium">Explore</span>
                    <HiArrowRight
                      className={`transform group-hover:translate-x-2 transition-transform ${
                        index === 0
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-primary text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:bg-accent transition-all inline-flex items-center gap-2 text-sm md:text-base">
            View All Fish
            <HiArrowRight className="text-lg" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
