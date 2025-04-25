// components/Header.tsx
"use client"; // <--- Mark as a Client Component for useState

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button"; // Import your Button component
import { Menu, X } from "lucide-react"; // Example icons (npm install lucide-react)

const Header2: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    // Add other links from your Figma
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <Image
                src="/logo.svg"
                alt="Your Company Logo"
                width={140}
                height={40}
              />
              {/* <span className="font-bold text-xl ml-2">YourBrand</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/signup" variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right z-40 bg-white shadow-lg"
          id="mobile-menu"
        >
          <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-5 py-4">
              <Button
                href="/signup"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
