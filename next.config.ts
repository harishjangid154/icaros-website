import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.icaros.com',
      },
      {
        protocol: 'https',
        hostname: 'shop.icaros.com',
      },
      {
        protocol: 'https',
        hostname: 'live.icarace.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
    unoptimized: true,
  },
  "output": "export"
};

export default nextConfig;
