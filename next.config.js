/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://mackoLee.github.io/todo-calendar'
      : '',

  output: 'export',
}

module.exports = nextConfig
