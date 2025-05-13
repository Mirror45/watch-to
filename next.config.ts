import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '16.design.htmlacademy.pro',
      },
    ],
  },
};

export default nextConfig;
