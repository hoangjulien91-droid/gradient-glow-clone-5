import type { NextConfig } from "next";
import path from "node:path";
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');


const nextConfig: NextConfig = {
  // ✅ Performance: Strict mode pour détecter les problèmes React
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // ✅ Sécurité: Limiter aux domaines spécifiques utilisés
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'wpgtsqjcdosuegpophvv.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // ✅ Performance: AVIF en premier (meilleure compression)
    formats: ['image/avif', 'image/webp'],
    // ✅ Cache: Augmenter le TTL pour les images statiques
    minimumCacheTTL: 31536000, // 1 an pour images immuables
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // ✅ Performance: Tailles d'images optimisées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ✅ Performance: Optimisation des imports de packages
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-label',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-switch',
      '@radix-ui/react-progress',
      '@radix-ui/react-slider',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-slot',
      'react-icons',
      '@heroicons/react',
      'recharts',
    ],
    // ✅ Performance: Partial Prerendering pour améliorer TTFB
    // ppr: 'incremental', // Commentez ou supprimez cette ligne
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // ⚠️ IMPORTANT: Ne jamais ignorer les erreurs en production
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // ✅ Performance: Compression et headers optimisés
  compress: true,
  poweredByHeader: false,
  generateEtags: true, // ✅ Activer pour cache HTTP optimal
  
  // ✅ Sécurité: Headers de sécurité optimaux
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      // ✅ Performance: Cache agressif pour assets statiques
      {
        source: '/icon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  webpack: (config) => {
    // Stub optional peer and unused SDK to avoid bundling errors
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ['@react-email/render']: path.resolve(__dirname, 'src/shims/react-email-render.js'),
      ['resend']: path.resolve(__dirname, 'src/shims/empty.js'),
    };
    
    // ✅ Performance: Optimiser le bundle en ignorant les packages inutilisés côté client
    if (!config.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
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