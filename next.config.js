/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
