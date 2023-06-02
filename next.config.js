/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'placeimg.com'],
    loader: 'akamai',
    path: '',
  }
};

module.exports = nextConfig;
