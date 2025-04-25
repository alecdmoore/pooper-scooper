// components/sections/HeroSection.tsx
import React from "react";
import Image from "next/image";
import Button from "../Button"; // Import your Button

const HeroSection: React.FC = () => {
  return (
    <section className="bg-light py-16 md:py-24">
      {" "}
      {/* Adjust background and padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">
            {/* Replace with your H1 */}
            Your Compelling Headline Goes Here
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {/* Replace with your sub-headline */}
            Describe the main benefit or value proposition clearly and
            concisely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="/get-started" variant="primary" size="lg">
              Primary Action
            </Button>
            <Button href="/learn-more" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          {/* Replace with your actual hero image */}
          <Image
            src="/images/hero-image.png" // Put your image in public/images/
            alt="Hero image describing the service"
            width={500} // Adjust based on image aspect ratio
            height={450} // Adjust based on image aspect ratio
            priority // Add priority for LCP (Largest Contentful Paint) element
            className="rounded-lg shadow-xl" // Optional styling
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
