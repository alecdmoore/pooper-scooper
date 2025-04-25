"use client";
// src/app/page.tsx
// import Navbar from "@/components/layout/Navbar";
import PawPrintBackground from "@/components/PawPrintBackground";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

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
              className={`absolute z-10 mt-3 w-48 bg-white rounded-4xl shadow-lg py-1 px-1 transition-opacity duration-200 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-10 py-4 rounded-4xl text-gray-700 hover:bg-teal-500 hover:text-white transition-all duration-200"
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
    <div className="w-fit  py-4">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-center  rounded-full bg-white shadow-md p-2 md:gap-x-4">
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

  return (
    <div className="relative flex items-center max-w-md">
      {/* Text input field */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your Zip Code"
        className="w-full py-4 px-6 pr-36 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
      />

      {/* Button positioned inside the input */}
      <div
        className="absolute right-2 w-fit h-fit py-2 px-4 rounded-full bg-red-400 text-white text-lg cursor-pointer transition-colors hover:bg-red-500"
        onClick={() => {
          alert("Coming Soon!");
          // You can also add logic to handle the input value here
          console.log("Email entered:", inputValue);
        }}
      >
        Free Quote
      </div>
    </div>
  );
};

// export default Navbar;

export default function Home() {
  return (
    <main>
      <div className="w-full flex justify-center py-3 bg-gray-50 text-black">
        <Link href="/book-now">Claim Your Free Cleaning Today!</Link>
      </div>
      <div className="relative w-[99%] h-[700px] flex flex-col mx-auto  bg-blue-500 rounded-4xl text-black overflow-hidden ">
        <PawPrintBackground />
        {/* <div className="w-full h-full absolute  bg-black"></div> */}
        {/* Top section - will only take up the space it needs */}
        <div className=" h-fit w-full max-w-7xl flex justify-end items-start mx-auto">
          <Link className="mr-[85px] pt-4" href="/login">
            Client Login
          </Link>
        </div>

        <div className=" h-fit w-full max-w-7xl flex justify-around items-start mx-auto ">
          <Image
            src="/images/poopyscoop-retro.webp"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-4xl"
          />
          <Navbar />
          <div className="py-4">
            <div
              className="w-fit h-fit py-4 px-6 rounded-full bg-red-400 text-white text-xl"
              onClick={() => alert("Coming Soon!")}
            >
              Free Quote
            </div>
          </div>
        </div>
        <div className="flex-grow w-full max-w-7xl flex flex-col  justify-center items-start gap-y-2 mx-auto pl-16">
          <div className="flex flex-col gap-y-2">
            <div className="text-3xl  text-white">Southern California's</div>
            <div className="text-7xl font-bold text-white">Pooper Scooper</div>
            <div className="text-7xl font-bold text-white">Service</div>
            <div className="text-2xl font-thin text-white">
              Get your free quote to get started!
            </div>
            {/* <div
              className="w-fit h-fit py-4 px-6 rounded-full bg-red-400 text-white text-xl"
              onClick={() => alert("Coming Soon!")}
            >
              Free Quote
            </div> */}
            <QuoteInput />
            <div className="flex gap-x-2 items-center text-white hover:text-black">
              <YouTubeIcon color={"white"} />
              <div className="text-2xl font-semibold text-current">
                See how it works
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-display md:text-5xl">
                Professional Dog Waste Removal Service
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Keep your yard clean and your time free. We handle the mess so
                you don't have to.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-now"
                  className="bg-secondary-400 hover:bg-secondary-500 text-white font-medium py-3 px-6 rounded-md text-center"
                >
                  Book Our Service
                </Link>
                <Link
                  href="/pricing"
                  className="bg-white hover:bg-gray-50 text-primary-600 font-medium py-3 px-6 rounded-md border border-primary-600 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Replace with your actual image once you have it */}
              <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center text-gray-500">
                Dog Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 font-display sm:text-4xl">
              Why Choose Our Service?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Professional, reliable, and thorough dog waste removal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="bg-primary-500 inline-flex p-3 rounded-md">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Regular Schedule
              </h3>
              <p className="mt-2 text-gray-600">
                Weekly, bi-weekly, or one-time services to fit your needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="bg-primary-500 inline-flex p-3 rounded-md">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Thorough Cleaning
              </h3>
              <p className="mt-2 text-gray-600">
                We scan your entire yard to ensure no waste is left behind.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="bg-primary-500 inline-flex p-3 rounded-md">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Eco-Friendly
              </h3>
              <p className="mt-2 text-gray-600">
                We use eco-friendly disposal methods for all waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
