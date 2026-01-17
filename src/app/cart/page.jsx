"use client";
import React, { useState, useEffect } from "react";
import Container from "@/Component/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineTrash,
  HiMinus,
  HiPlus,
  HiArrowLeft,
  HiShoppingCart,
  HiCheckCircle,
} from "react-icons/hi";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item,
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0,
  );
  const deliveryFee = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <Container>
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
              <span>Order placed successfully! Thank you for shopping.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-4"
          >
            <HiArrowLeft size={20} />
            <span className="font-medium">Continue Shopping</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-12 text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiShoppingCart size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add some fresh fish to get started!
            </p>
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-all"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-black">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                                {item.category}
                              </span>
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          >
                            <HiOutlineTrash
                              size={20}
                              className="text-gray-400 group-hover:text-red-500 transition-colors"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-all"
                          >
                            <HiMinus size={16} />
                          </button>
                          <span className="font-semibold text-black min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-all"
                          >
                            <HiPlus size={16} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          {item.price && (
                            <>
                              <p className="text-sm text-gray-500">
                                ৳{item.price} / {item.unit || "pc"}
                              </p>
                              <p className="text-xl font-bold text-primary">
                                ৳{item.price * item.quantity}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
              >
                <h2 className="text-xl font-bold text-black mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">৳{deliveryFee}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg font-bold text-black">
                    <span>Total</span>
                    <span className="text-primary">৳{total}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all mb-3"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/"
                  className="block text-center text-primary hover:text-accent font-medium transition-colors"
                >
                  Continue Shopping
                </Link>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Have a promo code?
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-all"
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
