import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // existing pages use <img> tags with local asset imports; unoptimized keeps parity
    unoptimized: true,
  },
}

export default nextConfig
