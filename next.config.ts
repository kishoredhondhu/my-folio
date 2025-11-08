import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  basePath: '',  
  assetPrefix: '', 
  trailingSlash: true, 
};

export default nextConfig;