import React from "react"
import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-be-vietnam',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Bảo Tàng Số Đờn Ca Tài Tử Nam Bộ',
  description:
    'Không gian số giúp khám phá nhạc cụ, bài bản và giá trị của nghệ thuật Đờn ca tài tử Nam Bộ, với sự hỗ trợ của trợ lý trí tuệ nhân tạo.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body
        className={`${beVietnamPro.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
