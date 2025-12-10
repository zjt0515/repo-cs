import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

import './styles/index.css'

export const metadata: Metadata = {
  title: 'nextapp',
  description: 'tutorial-cms',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
