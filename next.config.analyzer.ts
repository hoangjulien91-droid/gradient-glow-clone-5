import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import baseConfig from "./next.config";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

// ✅ Performance: Configuration pour analyser le bundle
// Usage: ANALYZE=true npm run build
const config: NextConfig = bundleAnalyzer(baseConfig);

export default config;
