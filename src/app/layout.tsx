import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | animeflix',
    default: 'animeflix',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
