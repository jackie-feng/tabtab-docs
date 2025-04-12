const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'standalone',
//   images: {
//     unoptimized: true // mandatory, otherwise won't export
//   },
//   // Optional: Change the output directory `out` -> `dist`
//   distDir: "dist"
// }
module.exports = withNextra()
