"use client";
import React, { useState, useEffect } from "react";
import Container from "@/Component/Shared/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiShoppingCart, HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

const ShopPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  const handleQuickAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

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
              Shop Fresh Fish
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Browse our wide selection of fresh fish and seafood, sourced daily
              from trusted local suppliers.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Products Section */}
      <div className="py-16 md:py-24">
        <Container>
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.popular && (
                    <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category Badge */}
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Size */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">
                      Size:{" "}
                      <span className="font-medium capitalize">
                        {product.size}
                      </span>
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => router.push(`/shop/${product.id}`)}
                      className="flex-1 bg-white border border-primary text-primary py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleQuickAddToCart(product)}
                      className="flex-1 bg-linear-to-r from-primary to-accent text-white py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <HiShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiShoppingCart size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ShopPage;
