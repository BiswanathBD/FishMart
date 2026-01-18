"use client";
import React, { useState, useEffect } from "react";
import Container from "@/Component/Shared/Container";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  HiArrowLeft,
  HiShoppingCart,
  HiMinus,
  HiPlus,
  HiCheckCircle,
  HiLocationMarker,
  HiClock,
  HiStar,
} from "react-icons/hi";

const ProductDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("nutrition");

  useEffect(() => {
    if (params?.id) {
      fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => {
          const foundProduct = data.find((p) => p.id === parseInt(params.id));
          setProduct(foundProduct);
        });
    }
  }, [params?.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8">
      <Container>
        {/* Back Button */}
        <button
          onClick={() => router.push("/shop")}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 group"
        >
          <HiArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Back to Shop</span>
        </button>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative h-96 lg:h-[550px] bg-white rounded-3xl overflow-hidden group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.popular && (
                <div className="absolute top-6 right-6 bg-linear-to-r from-primary to-accent text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                  <HiStar size={16} />
                  Popular
                </div>
              )}
              {product.availability === "In Stock" && (
                <div className="absolute top-6 left-6 bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <HiCheckCircle size={14} />
                  In Stock
                </div>
              )}
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {product.origin && (
                <div className="bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <HiLocationMarker size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Origin
                    </span>
                  </div>
                  <p className="text-sm font-bold text-black">
                    {product.origin}
                  </p>
                </div>
              )}
              <div className="bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <HiClock size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Freshness
                  </span>
                </div>
                <p className="text-sm font-bold text-black">Daily Fresh</p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <div className="bg-white rounded-3xl p-6 lg:p-8 flex-1 flex flex-col">
              {/* Category Badge */}
              <span className="inline-block bg-linear-to-r from-primary/10 to-accent/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit border border-primary/20">
                {product.category}
              </span>

              {/* Name */}
              <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Price */}
              {product.price && (
                <div className="mb-6 bg-linear-to-r from-primary/5 to-accent/5 p-4 rounded-2xl border border-primary/10">
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      ৳{product.price}
                    </span>
                    <span className="text-gray-500 text-lg">
                      / {product.unit}
                    </span>
                  </div>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Benefits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-200 flex items-center gap-1.5"
                      >
                        <HiCheckCircle size={14} />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-sm font-bold text-gray-700 mb-3 block uppercase tracking-wide">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-linear-to-br from-gray-100 to-gray-200 hover:from-primary hover:to-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <HiMinus size={20} />
                  </button>
                  <span className="text-2xl font-bold text-black w-16 text-center bg-gray-50 py-2 rounded-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-linear-to-br from-gray-100 to-gray-200 hover:from-primary hover:to-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <HiPlus size={20} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-linear-to-r from-primary to-accent text-white py-4 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3 text-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <HiShoppingCart size={24} />
                <span>Add to Cart - ৳{product.price * quantity}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-3xl p-6 lg:p-8">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("nutrition")}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeTab === "nutrition"
                  ? "bg-linear-to-r from-primary to-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Nutrition
            </button>
            <button
              onClick={() => setActiveTab("cooking")}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeTab === "cooking"
                  ? "bg-linear-to-r from-primary to-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Cooking Tips
            </button>
            <button
              onClick={() => setActiveTab("storage")}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeTab === "storage"
                  ? "bg-linear-to-r from-primary to-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Storage
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[120px]">
            {activeTab === "nutrition" && product.nutritionalInfo && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-black mb-4">
                  Nutritional Information
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.nutritionalInfo}
                </p>
              </div>
            )}

            {activeTab === "cooking" && product.cookingTips && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-black mb-4">
                  Cooking Tips & Recommendations
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.cookingTips}
                </p>
              </div>
            )}

            {activeTab === "storage" && product.storageInfo && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-black mb-4">
                  Storage Instructions
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.storageInfo}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
