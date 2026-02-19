import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nativ — Travel like you know someone there',
  description:
    'Real travel knowledge from locals and travelers who\'ve just been. Not content optimised for clicks.',
  openGraph: {
    title: 'Nativ — Travel like you know someone there',
    description:
      'Real travel knowledge from locals and travelers who\'ve just been.',
    url: 'https://nativ.social',
    siteName: 'Nativ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nativ — Travel like you know someone there',
    description:
      'Real travel knowledge from locals and travelers who\'ve just been.',
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
