/** @type {import('next').NextConfig} */

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ['@repo/ui', '@repo/ui2'],
}
