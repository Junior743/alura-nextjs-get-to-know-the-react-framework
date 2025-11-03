import type { Metadata } from 'next'

import './globals.css'

import { Aside } from '@/components/Aside'

export const metadata: Metadata = {
  title: 'NextJS',
  description: 'conheça o framework React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
