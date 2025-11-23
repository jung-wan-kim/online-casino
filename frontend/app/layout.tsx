import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Royal Casino - Premium Online Gaming',
  description: 'Experience the thrill of premium casino games including Blackjack, Baccarat, and Poker',
  keywords: ['casino', 'online casino', 'blackjack', 'baccarat', 'poker', 'card games'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-casino-dark text-white antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
