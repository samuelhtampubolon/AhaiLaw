import type { NextConfig } from "next";

const isStandalone = process.env.STANDALONE === 'true';
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = !isStandalone && (process.env.GITHUB_PAGES === 'true' || isProd);
const basePath = isGithubPages ? '/AhaiLaw' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
