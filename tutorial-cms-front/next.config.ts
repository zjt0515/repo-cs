import type { NextConfig } from 'next'

import createMDX from '@next/mdx'

const externals: string[] = ['next-mdx-remote-client']
if (process.env.TURBOPACK) {
  externals.push('rehype-prism-plus')
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // serverExternalPackages: ['next-mdx-remote', 'rehype-prism-plus'],
  serverExternalPackages: externals,
  productionBrowserSourceMaps: false,
}

const withMDX = createMDX()

export default withMDX(nextConfig)
