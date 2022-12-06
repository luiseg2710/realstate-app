/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: 'https',
    hostname: 'images.pexels.com',
    port: 'http://localhost:3000/',
    pathname: '../assets/images/condo.jpg'
  }
}

module.exports = nextConfig
