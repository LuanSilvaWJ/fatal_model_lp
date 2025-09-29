import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removido output: 'export' para usar SSG padrão da Vercel
  images: { unoptimized: true },
  trailingSlash: false
};

export default nextConfig;
