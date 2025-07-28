import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // Cho phép tất cả các đường dẫn dưới /t/p/
      },
    ],
  },
};

export default nextConfig;
