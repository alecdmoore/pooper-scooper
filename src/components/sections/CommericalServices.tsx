"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const CommericalServices = () => {
  return (
    <section className="w-full bg-blue-500 overflow-hidden rounded-3xl">
      <div className="relative h-full">
        <div className="flex justify-start gap-0">
          {/* Left side - Image */}
          {/* <div className="relative h-80 bg-black md:h-full">
            <Image
              src="/images/residential-service.jpg" 
              alt="Dog with Pooper Scooper service provider next to branded van"
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Right side - Content */}
          <div className="bg-white p-8 m-6 md:p-12 rounded-3xl shadow-lg">
            <div className="max-w-lg">
              <h3 className="text-teal-500 text-lg font-medium mb-2">
                SAY GOODBYE TO PET WASTE
              </h3>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Commercial Dog Waste Removal
              </h2>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-x-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-teal-500 mt-0.5" />
                  <span className="text-gray-700">
                    Free dog waste management plans for HOAs, apartments, and
                    commercial properties.
                  </span>
                </li>

                <li className="flex items-start gap-x-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-teal-500 mt-0.5" />
                  <span className="text-gray-700">
                    Professional installation and maintenance of dog waste
                    stations.
                  </span>
                </li>

                <li className="flex items-start gap-x-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-teal-500 mt-0.5" />
                  <span className="text-gray-700">
                    We pick up dog waste and remove garbage, ensuring a clean
                    property.
                  </span>
                </li>
              </ul>

              <div>
                <a
                  href="/residential-services"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommericalServices;
