/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, async rewrites() {
    return [{
      source: '/api/:path*', destination: `https://api.hufsdevelopers.org/calguksu/:path*`,
    }];
  },
};

module.exports = nextConfig;
