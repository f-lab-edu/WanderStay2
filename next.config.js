/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {
        ".svg": ["@svgr/webpack"],
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai.esmplus.com",
        pathname: '/kndr57/online/**',
      },
    ],
  },
};

module.exports = nextConfig;
  