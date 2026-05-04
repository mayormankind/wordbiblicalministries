import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Bypass private-IP restriction for the local Strapi dev server.
    // In production this is false so remotePatterns applies normally.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.strapi.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wbm-cms.onrender.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "utxvznvakhqaiwjqismx.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
