import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, // Add this line
    contentDispositionType: "attachment", // Add this line too - often needed with dangerouslyAllowSVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Recommended CSP for SVGs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // Allow any path on this hostname
      },
      // Add other hostnames you might use here
    ],
    // If you were using the older 'domains' property:
    // domains: ['placehold.co'],
  },
};

export default nextConfig;
