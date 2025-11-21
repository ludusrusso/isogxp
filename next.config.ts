import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a repo (e.g., username.github.io/repo-name)
  // basePath: '/isogxp',
};

export default nextConfig;
