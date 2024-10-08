/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['lunarre-bucket.s3.amazonaws.com'],
  },
  experimental: {
    images: {
      unoptimized: false,
    },
  },
}
