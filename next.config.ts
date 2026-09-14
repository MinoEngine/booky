import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/booky" : "";

process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: isProd ? "/booky/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;