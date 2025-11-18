import createNextIntlPlugin from 'next-intl/plugin'

// Initialize next-intl plugin
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

// Export combined config
export default withNextIntl(nextConfig)
