import './globals.css'
import type { Metadata } from 'next'
import { Neucha } from 'next/font/google'

const neucha = Neucha({
  weight: "400",
  preload: true,
  fallback: [
    "Neucha", "Dekko",
    // fallbacks from https://github.com/system-fonts/modern-font-stacks#handwritten
    'Segoe Print', 'Bradley Hand', 'Chilanka', 'TSCu_Comic',
    'casual', 'cursive',
  ],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Saber',
  description: 'The notes app built for handwriting',
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
