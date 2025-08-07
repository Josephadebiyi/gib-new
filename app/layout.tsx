import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Institute of Tech and Business (GITB) | Practical Online Tech & Business Courses',
  description: 'GITB offers hands-on tech and business training with globally recognized certifications. Study online, join bootcamps, and get real-world skills employers want. Courses in Cybersecurity, UI/UX, Cloud, KYC, IAM & more.',
  generator: 'WEBWONDERS.TECH',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
