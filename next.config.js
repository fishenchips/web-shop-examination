/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* need to fix correct data below */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
