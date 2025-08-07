import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Handle framer-motion export * issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': require.resolve('framer-motion'),
    };
    
    return config;
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
