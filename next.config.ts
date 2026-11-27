import type { NextConfig } from "next";

// Antes havia dois arquivos (next.config.js e next.config.ts) e o .js era o que valia.
// As opções dele foram trazidas para cá, sem mudar o comportamento do build.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
