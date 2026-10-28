/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/fursphere-mbti-offical',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};
