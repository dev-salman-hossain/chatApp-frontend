import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // এর মানে হলো Unsplash-এর যেকোনো পারথের ছবি অ্যালাউড
      },
    ],
  },
};

export default nextConfig;
