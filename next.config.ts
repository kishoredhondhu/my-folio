import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev", // Allows loading skill icons
      },
    ],
    dangerouslyAllowSVG: true, // Allows SVG images
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // Empty for root domain (kishored.me)
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "", // Empty for root domain
  trailingSlash: true, // Helps with static export routing

  reactStrictMode: true,
};

export default nextConfig;
