"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Cart", href: "/cart" },
  ];

  const categories = [
    { label: "Freshwater Fish", href: "/shop" },
    { label: "Saltwater Fish", href: "/shop" },
    { label: "Shellfish", href: "/shop" },
    { label: "Processed Fish", href: "/shop" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 to-black text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div>
              <Logo />
              <p className="text-gray-400 mt-4 leading-relaxed">
                Your trusted online marketplace for fresh fish in Bangladesh.
                Quality and freshness guaranteed.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/BiswanathBD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/biswanath-sarker-bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={category.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-block"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:biswanath.sarker.bd@gmail.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <HiMail
                      size={20}
                      className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="break-all">
                      biswanath.sarker.bd@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801628284848"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <HiPhone
                      size={20}
                      className="flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span>+880 1628 284848</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <HiLocationMarker
                    size={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} FishMart. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
