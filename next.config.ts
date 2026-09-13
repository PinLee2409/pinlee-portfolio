import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages resolves /en/ to en/index.html, so emit directory-style routes.
  trailingSlash: true,
  basePath: "/pinlee-portfolio",
  assetPrefix: "/pinlee-portfolio/",
  images: {
    // GitHub Pages serves static files only, so images ship as authored.
    unoptimized: true,
  },
};

export default nextConfig;
