/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API,
    CLIENT_BASE_URL: process.env.CLIENT_BASE_URL,
  },
};

export default nextConfig;
