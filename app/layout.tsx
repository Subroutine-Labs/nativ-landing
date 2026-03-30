import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'nativ.social',
  description: 'talk to travelers around you',
  openGraph: {
    title: 'nativ.social',
    description: 'talk to travelers around you',
    url: 'https://nativ.social',
    siteName: 'Nativ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nativ.social',
    description: 'talk to travelers around you',
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
