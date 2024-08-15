/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const path = require('path');
module.exports = {
  reactStrictMode: true,
};
module.exports = withImages();
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config
  },
}