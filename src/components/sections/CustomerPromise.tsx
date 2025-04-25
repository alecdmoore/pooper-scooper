"use client";
import React from "react";
import { CheckCircle, PawPrint, Shovel } from "lucide-react";

const CustomerPromise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 text-xl font-medium uppercase mb-2">
            OUR CUSTOMER PROMISE
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto">
            Poopity Scoop<sup>®</sup> Customer Promise
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Promise 1 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-6">
              <CheckCircle
                size={64}
                className="text-gray-900"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Reliable, Hassle-Free Service
            </h3>
            <p className="text-gray-700 text-center">
              Our reliable, hassle-free dog waste removal service ensures
              timely, efficient visits, leaving your yard pristine. Enjoy more
              time with your dog—let us handle the mess!
            </p>
          </div>

          {/* Promise 2 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-gray-900 rounded-full flex items-center justify-center">
                  <PawPrint size={32} className="text-gray-900" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center">
                  <span className="text-gray-900 text-2xl">★</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-700 text-center">
              At Poopity Scoop<sup>®</sup>, we guarantee your satisfaction with
              our pooper scooper service. If you're not happy, we'll make it
              right—your happiness is our priority.
            </p>
          </div>

          {/* Promise 3 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="relative w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
                <Shovel size={32} className="text-gray-900" />
                <span className="absolute -top-2 -right-2 text-2xl">✨</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Health and Safety Commitment
            </h3>
            <p className="text-gray-700 text-center">
              Poopity Scoop<sup>®</sup> prioritizes health and safety by using
              sanitary practices and eco-friendly disposal methods, ensuring a
              clean, safe environment for pets and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPromise;
