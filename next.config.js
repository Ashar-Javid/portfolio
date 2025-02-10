/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add your image domains here
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily disable TypeScript errors
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/**/@swc/core-linux-x64-gnu', 'node_modules/**/@swc/core-linux-x64-musl']
    }
  }
};

module.exports = nextConfig; 