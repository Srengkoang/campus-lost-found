/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // leave empty
        pathname: "/**", // allow all paths
      },
    ],
  },
};

module.exports = nextConfig;


