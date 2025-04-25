"use client";
import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import PawPrintBackground from "../PawPrintBackground";

const CaliforniaLocations = () => {
  return (
    <section className="py-16 relative">
      {/* Background with paw prints pattern */}
      <div className="relative inset-0 w-full h-full opacity-10 z-0">
        <PawPrintBackground className="text-blue-300" />{" "}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 text-lg font-medium uppercase">
            POOPITY SCOOP SERVICE AREAS
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Pooper Scooper Locations
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Poopity Scoop proudly services Southern California with locations in
            Temecula and the Coachella Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Location 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <MapPin size={36} className="text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Temecula <span className="font-normal">CA</span>
                </h3>
                <p className="text-gray-600">
                  Dog Waste Removal | Commercial Services
                </p>
              </div>
            </div>

            {/* Location 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <MapPin size={36} className="text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Coachella Valley <span className="font-normal">CA</span>
                </h3>
                <p className="text-gray-600">
                  Dog Waste Removal | Commercial Services
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/locations"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                Discover More
              </a>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto">
            {/* This is a placeholder for the California map image */}
            <div className="w-full h-full bg-teal-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-teal-700 font-medium mb-2">
                  CALIFORNIA MAP PLACEHOLDER
                </p>
                <p className="text-gray-600 text-sm">
                  Replace with actual California map image showing service
                  locations
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  For an actual image, create a California map with location
                  pins and save it as "california-service-map.png" in your
                  public/images folder
                </p>
              </div>
            </div>

            {/* Once you have an actual image, replace the div above with: */}
            {/* 
            <Image
              src="/images/california-service-map.png"
              alt="Map of California service locations"
              fill
              className="object-contain"
            />
            */}

            <div className="absolute bottom-6 right-6 bg-white p-2 rounded-lg shadow-md">
              <div className="flex items-center">
                <span className="text-red-600 mr-1">★</span>
                <span className="text-sm font-medium">Upcoming locations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900">SOUTHERN</h2>
          <h2 className="text-5xl font-bold text-teal-500">CALIFORNIA</h2>
        </div>
      </div>
    </section>
  );
};

export default CaliforniaLocations;
