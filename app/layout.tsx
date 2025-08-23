import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hazmob FPS: Online Shooter - Play Free FPS Game",
  description:
    "Experience intense tactical combat in Hazmob FPS, the ultimate online multiplayer shooter. Play free in your browser with realistic weapons and strategic gameplay.",
  generator: "v0.app",
  keywords: "hazmobfps, fps game, online shooter, multiplayer, tactical combat, free game",
  authors: [{ name: "Hazmob FPS Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Hazmob FPS: Online Shooter",
    description: "Experience intense tactical combat in the ultimate online multiplayer shooter",
    url: "https://hazmobfps.com",
    siteName: "Hazmob FPS",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hazmobfps.com" />
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
