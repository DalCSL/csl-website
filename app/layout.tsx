import { Metadata } from 'next'
import '../styles/index.css'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'DAL CSL',
  description: 'The ONLY society that teaches you to crack coding interviews and get your dream job at top tech companies.',
  metadataBase: new URL('https://dalcsl.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#4F46E5',
  viewport: 'width=device-width, initial-scale=1',
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