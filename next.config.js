require('dotenv').config({ path: `.env.${process.env.APP_ENV}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX || '',

  output: process.env.APP_ENV === 'github'?'export':'standalone',
}

module.exports = nextConfig
