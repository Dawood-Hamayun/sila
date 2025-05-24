import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during `next build`
  },
};

export default nextConfig;