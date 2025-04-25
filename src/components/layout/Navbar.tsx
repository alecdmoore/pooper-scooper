"use client";
// src/components/Navbar.tsx
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-teal-600">
              Swoop Scoop®
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                Client Login
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                Refer a Friend
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 px-3 py-2"
              >
                Locations
              </a>
              <a
                href="#"
                className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-medium"
              >
                Free Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Client Login
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Refer a Friend
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Locations
            </a>
            <div className="mt-4">
              <a
                href="#"
                className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-medium"
              >
                Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
