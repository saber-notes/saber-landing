import './globals.css'
import type { Metadata } from 'next'
import { Neucha, Dekko } from 'next/font/google'

const dekko = Dekko({
  weight: "400",
  subsets: ["devanagari", "latin", "latin-ext"],
})
const neucha = Neucha({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  fallback: ["Dekko", "cursive"],
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
