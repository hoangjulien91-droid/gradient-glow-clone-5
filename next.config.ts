import type { NextConfig } from "next";
import path from "node:path";
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Stub optional peer and unused SDK to avoid bundling errors
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ['@react-email/render']: path.resolve(__dirname, 'src/shims/react-email-render.js'),
      ['resend']: path.resolve(__dirname, 'src/shims/empty.js'),
    };
    return config;
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1760986357426