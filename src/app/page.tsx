// src/app/page.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// Assuming PawPrintBackground is correctly imported from its location
import PawPrintBackground from "@/components/PawPrintBackground";
import CustomerPromise from "@/components/sections/CustomerPromise";
import ResidentialServices from "@/components/sections/ResidentialServices";
import CommericalServices from "@/components/sections/CommericalServices";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CaliforniaLocations from "@/components/sections/CaliforniaLocations";

// --- Component Definitions (YouTubeIcon, NavItem, Navbar, QuoteInput) remain the same ---

interface YouTubeIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const YouTubeIcon: React.FC<YouTubeIconProps> = ({
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-youtube ${className}`}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
};

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  dropdown?: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
}

// NavItem component with both hover and click dropdown functionality
const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  dropdown,
  dropdownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (dropdown) {
      setIsOpen(!isOpen);
    }
  };

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navItemRef.current &&
        !navItemRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navItemRef]);

  return (
    <div
      className="relative group"
      ref={navItemRef}
      onMouseEnter={() => dropdown && setIsOpen(true)}
      onMouseLeave={() => dropdown && setIsOpen(false)}
    >
      {href ? (
        <a
          href={href}
          className="flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-teal-500 hover:text-white"
        >
          {children}
        </a>
      ) : (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-teal-500 hover:text-white"
          >
            <span className="mr-1">{children}</span>
            {dropdown && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          {dropdown && dropdownItems && dropdownItems.length > 0 && (
            <div
              className={`absolute z-10 mt-3 w-48 bg-white rounded-xl shadow-lg py-1 px-1 transition-opacity duration-200 ${
                // Adjusted rounding
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-teal-500 hover:text-white transition-all duration-200" // Adjusted padding/rounding
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const serviceItems = [
    { label: "Residential", href: "#residential" },
    { label: "Commercial", href: "#commercial" },
  ];

  const locationItems = [
    { label: "Inland Empire", href: "#inland-empire" },
    { label: "Coachella Valley", href: "#coachella-valley" },
  ];

  return (
    <div className="w-fit py-4">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-center rounded-full bg-white shadow-md p-2 md:gap-x-4">
          <NavItem dropdown dropdownItems={serviceItems}>
            Services
          </NavItem>
          <NavItem href="#">Refer a Friend</NavItem>
          <NavItem href="#">FAQ</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem dropdown dropdownItems={locationItems}>
            Locations
          </NavItem>
        </nav>
      </div>
    </div>
  );
};

const QuoteInput = () => {
  const [inputValue, setInputValue] = useState("");

  // Simple message box state
  const [showMessage, setShowMessage] = useState(false);

  const handleQuoteClick = () => {
    // Instead of alert, show a message box
    setShowMessage(true);
    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
    console.log("Zip code entered:", inputValue);
  };

  return (
    <div className="relative flex items-center max-w-md">
      {/* Text input field */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your Zip Code"
        className="w-full py-4 px-6 pr-36 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-black" // Ensure text is visible
      />

      {/* Button positioned inside the input */}
      <button // Use button for better accessibility
        type="button"
        className="absolute right-2 py-2 px-4 rounded-full bg-red-400 text-white text-lg cursor-pointer transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        onClick={handleQuoteClick}
      >
        Free Quote
      </button>

      {/* Simple Message Box */}
      {showMessage && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
          Coming Soon!
        </div>
      )}
    </div>
  );
};

// --- Main Home Component ---
export default function Home() {
  // Simple message box state for the top "Free Quote" button
  const [showTopQuoteMessage, setShowTopQuoteMessage] = useState(false);

  const handleTopQuoteClick = () => {
    setShowTopQuoteMessage(true);
    setTimeout(() => setShowTopQuoteMessage(false), 3000);
  };

  return (
    <main className="bg-gray-100">
      {" "}
      {/* Added a light background to main */}
      {/* Top Banner */}
      <div className="w-full flex justify-center pt-4 text-black font-semibold">
        {" "}
        {/* Styled banner */}
        <Link href="/book-now" className=" hover:underline">
          Claim Your Free Cleaning Today!
        </Link>
      </div>
      {/* Hero Section */}
      <div className="relative w-[99%] min-h-[80vh] flex flex-col mx-auto my-4 bg-blue-500 rounded-3xl text-black overflow-hidden shadow-lg">
        {" "}
        {/* Adjusted rounding, added shadow */}
        {/* Background Paw Prints - Placed first, z-0 */}
        <PawPrintBackground className="text-blue-300" />{" "}
        {/* Optional: Pass color via text color */}
        {/* Foreground Content Container - Placed second, relative z-10 */}
        <div className="relative z-10 flex flex-col flex-grow w-full h-full">
          {/* Top Right Login Link */}
          <div className="w-full max-w-7xl flex justify-end items-start c">
            {/* <Link
              className="pt-4 font-medium hover:text-gray-200"
              href="/login"
            >
              Client Login
            </Link> */}
          </div>

          {/* Logo, Navbar, Top Quote Button */}
          <div className="w-full max-w-7xl flex flex-wrap justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex-shrink-0">
              {" "}
              {/* Logo container */}
              <Image
                src="/images/poopyscoop-retro.webp" // Ensure this path is correct
                alt="PoopyScoop Retro Logo"
                width={180} // Adjusted size
                height={180} // Adjusted size
                className="rounded-2xl" // Adjusted rounding
                priority // Prioritize loading logo
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/180x180/cccccc/ffffff?text=Logo")
                } // Placeholder fallback
              />
            </div>
            <div className="flex-grow flex justify-center">
              {" "}
              {/* Navbar container */}
              <Navbar />
            </div>
            <div className="relative flex-shrink-0 py-4">
              {" "}
              {/* Top Quote Button container */}
              <button // Use button for better accessibility
                type="button"
                className="py-3 px-6 rounded-full bg-red-400 text-white text-lg font-semibold cursor-pointer transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                onClick={handleTopQuoteClick}
              >
                Free Quote
              </button>
              {/* Simple Message Box for Top Quote Button */}
              {showTopQuoteMessage && (
                <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
                  Coming Soon!
                </div>
              )}
            </div>
          </div>

          {/* Main Hero Text and Input */}
          <div className="flex-grow w-full max-w-7xl flex flex-col justify-center items-start gap-y-3 mx-auto px-4 sm:px-6 lg:px-16 pb-16">
            {" "}
            {/* Adjusted padding */}
            <div className="flex flex-col gap-y-2">
              <div className="text-2xl md:text-3xl text-white">
                Southern California's
              </div>
              <div className="text-5xl md:text-7xl font-bold text-white">
                Pooper Scooper
              </div>
              <div className="text-5xl md:text-7xl font-bold text-white">
                Service
              </div>
              <div className="text-xl md:text-2xl font-light text-white mt-2">
                Get your free quote to get started!
              </div>
              <div className="mt-4">
                {" "}
                {/* Added margin top */}
                <QuoteInput />
              </div>
              <Link
                href="#"
                className="mt-4 flex gap-x-2 items-center text-white hover:text-gray-200 group"
              >
                {" "}
                {/* Added margin top and Link */}
                <YouTubeIcon
                  color={"white"}
                  size={28}
                  className="group-hover:scale-110 transition-transform"
                />
                <div className="text-xl font-semibold text-current">
                  See how it works
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section Below (Professional Service) */}
      {/* Features Section */}
      <div className="flex flex-col gap-10 p-16 mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <CustomerPromise /> {/* Adjusted padding */}
        <ResidentialServices />
        <CommericalServices />
        <WhyChooseSection />
        <CaliforniaLocations />
      </div>
      {/* Add Footer Section Here */}
    </main>
  );
}
