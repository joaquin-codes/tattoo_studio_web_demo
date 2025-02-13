import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Tattoo Artist Portfolio",
  description: "Portfolio, Scheduling and Price Estimation for Tattoo Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistMono.className} antialiased`}>{children}</body>
    </html>
  )
}

