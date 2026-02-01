import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client', 'prisma', '@next-auth/prisma-adapter');
    }
    return config;
  },
};

export default nextConfig;
