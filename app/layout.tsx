import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'nativ.social',
  description: 'knowledge should compound, not evaporate.',
  openGraph: {
    title: 'nativ.social',
    description: 'knowledge should compound, not evaporate.',
    url: 'https://nativ.social',
    siteName: 'Nativ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nativ.social',
    description: 'knowledge should compound, not evaporate.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
