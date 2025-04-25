// PawPrintBackground.jsx
"use client";
import React from "react";
import { PawPrint } from "lucide-react";

const PawPrintBackground = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden z-0 opacity-20 ${className}`}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="paw-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <PawPrint size={50} color={"white"} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paw-pattern)" />
      </svg>
    </div>
  );
};

export default PawPrintBackground;
