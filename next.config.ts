import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self';",
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      // Furniture Arabic routes
      {
        source: "/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AE%D8%A8%D8%B1",
        destination: "/شراء-اثاث-مستعمل-الخبر",
      },
      {
        source: "/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85",
        destination: "/شراء-اثاث-مستعمل-الدمام",
      },
      {
        source: "/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D9%82%D8%B7%D9%8A%D9%81",
        destination: "/شراء-اثاث-مستعمل-القطيف",
      },
      // Navbar Arabic link aliases
      {
        source: "/مشتري-مكيفات-مستعملة",
        destination: "/buy-used-ac-qatif",
      },
      {
        source: "/%D9%85%D8%B4%D8%AA%D8%B1%D9%8A-%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84%D8%A9",
        destination: "/buy-used-ac-qatif",
      },
      {
        source: "/شراء-خردة-القطيف",
        destination: "/buy-scrap-qatif",
      },
      {
        source: "/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%AE%D8%B1%D8%AF%D8%A9-%D8%A7%D9%84%D9%82%D8%B7%D9%8A%D9%81",
        destination: "/buy-scrap-qatif",
      },
      {
        source: "/شراء-أجهزة-القطيف",
        destination: "/buy-appliances-qatif",
      },
      {
        source: "/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-%D8%A7%D9%84%D9%82%D8%B7%D9%8A%D9%81",
        destination: "/buy-appliances-qatif",
      },
    ];
  },
};

export default bundleAnalyzer(nextConfig);
