/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in development
  productionBrowserSourceMaps: false,
  
  // Optimize for production
  swcMinify: true,
  
  // Reduce memory usage
  experimental: {
    // Disable memory-intensive features in dev
    optimizeCss: false,
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization - disable if not using Next Image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;