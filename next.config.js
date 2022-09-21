/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    PRIVATE_KEY: process.env.PRIVATE_KEY
  }
}

module.exports = nextConfig;
