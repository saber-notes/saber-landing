import './globals.css'
import type { Metadata } from 'next'
import { Neucha } from 'next/font/google'

const neucha = Neucha({
  weight: "400",
  preload: true,
  fallback: ["Neucha", "Dekko", "cursive"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Saber',
  description: 'A cross-platform libre handwritten notes app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={neucha.className}>{children}</body>
    </html>
  )
}
