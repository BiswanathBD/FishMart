"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineMenu,
  HiX,
  HiLogout,
} from "react-icons/hi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = () => {
      const auth = document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("auth="))
        ?.split("=")[1];
      setIsAuthenticated(auth === "true");
    };

    checkAuth();

    // Check auth status periodically
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    // Initial load
    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);

    // Poll for changes (for same-tab updates)
    const interval = setInterval(updateCartCount, 500);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    // Remove auth cookie
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
    // Force reload and redirect to home
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-secondary/95 py-2 sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6 items-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-black hover:text-primary transition-colors font-medium relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search fish..."
                className="w-64 pr-4 pl-10 py-2 bg-white rounded-full outline-none border-2 border-transparent focus:border-primary transition-all"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary">
                <CiSearch size={24} />
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Link
                href="/cart"
                className="relative p-2 hover:bg-white rounded-full transition-all group"
              >
                <HiOutlineShoppingCart
                  size={24}
                  className="text-black group-hover:text-primary transition-colors"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <HiLogout size={20} />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-all font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <HiOutlineUser size={20} />
                  <span>Login</span>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white rounded-lg transition-all"
          >
            {isMenuOpen ? (
              <HiX size={28} className="text-primary" />
            ) : (
              <HiOutlineMenu size={28} className="text-primary" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search fish..."
                    className="w-full pr-4 pl-10 py-2 bg-white rounded-full outline-none border-2 border-transparent focus:border-primary transition-all"
                  />
                  <CiSearch
                    size={24}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary"
                  />
                </div>

                {/* Mobile Links */}
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 px-4 text-black hover:bg-white hover:text-primary rounded-lg transition-all font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Actions */}
                <div className="flex gap-3 pt-2">
                  <Link
                    href="/cart"
                    className="flex-1 bg-white text-primary px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 border-2 border-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <HiOutlineShoppingCart size={20} />
                    <span>Cart ({cartCount})</span>
                  </Link>
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition-all"
                    >
                      <HiLogout size={20} />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="flex-1 bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-accent transition-all"
                    >
                      <HiOutlineUser size={20} />
                      <span>Login</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;
