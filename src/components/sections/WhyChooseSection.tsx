"use client";
import React from "react";
import {
  UserCheck,
  Sparkles,
  Monitor,
  FileX,
  MessageSquareText,
  Camera,
} from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Vetted Employees",
      description:
        "Our team undergoes rigorous background checks and driving screenings to ensure trustworthiness and reliability.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Pet Safety",
      description:
        "We clean all of our equipment and shoes with a kennel-grade disinfectant after every cleanup, minimizing the spread of germs and illness.",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Customer Portal",
      description:
        "Enjoy hassle-free service with your own customer portal, which allows you to set up automatic payments, keep track of invoices, and manage your service online.",
    },
    {
      icon: <FileX className="w-12 h-12" />,
      title: "No Contracts",
      description:
        "Enjoy the freedom of our flexible services without being tied down by any contracts, giving you the flexibility to start or stop whenever you need.",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Gate Photos",
      description:
        "You will receive a reassuring snapshot of your closed gate after each service visit, giving you peace of mind as your furry friends venture back into their tidy yard.",
    },
    {
      icon: <MessageSquareText className="w-12 h-12" />,
      title: "Notification Texts",
      description:
        "We'll send you a notification text 60 minutes before we arrive and an email once the job is done, ensuring you're informed at every step of the process.",
    },
  ];

  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-teal-500 text-lg font-medium uppercase">
            THE BEST IN SOUTHERN CALIFORNIA
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Why Choose Poopity Scoop<sup>®</sup>?
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            When you hire Poopity Scoop as your Southern California pooper
            scooper company, you can be confident you made the right decision
            with our 100% satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-xl transition-shadow duration-300 hover:shadow-xl `}
            >
              <div className="mb-4 border-2 border-gray-900 rounded-full p-4 inline-flex text-black">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
