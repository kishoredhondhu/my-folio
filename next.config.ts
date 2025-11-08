import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",  // Allows loading skill icons
      },
    ],
    dangerouslyAllowSVG: true,  // Allows SVG images
  },
  basePath: '',  // Empty for root domain (kishored.me)
  assetPrefix: '',  // Empty for root domain
  trailingSlash: true,  // Helps with static export routing
};

export default nextConfig;