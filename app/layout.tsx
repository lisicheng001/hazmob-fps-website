import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hazmob FPS - Ultimate FPS Gaming Collection | 5 Free Online Shooters",
  description:
    "Play 5 intense FPS games including Hazmob, Cosmic Strike 2.0, RGB Shooter, Sharpshot Trials & Dead Zone 15165. Free tactical combat games with multiplayer action, realistic weapons and strategic gameplay.",
  generator: "v0.app",
  keywords:
    "hazmobfps, fps games, online shooter, multiplayer, tactical combat, free games, cosmic strike, rgb shooter, sharpshot trials, dead zone, browser games",
  authors: [{ name: "Hazmob FPS Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Hazmob FPS - Ultimate FPS Gaming Collection",
    description:
      "Play 5 intense FPS games with tactical combat, realistic weapons and multiplayer action. Free to play in your browser.",
    url: "https://hazmobfps.com",
    siteName: "Hazmob FPS Gaming Platform",
    type: "website",
    images: [
      {
        url: "https://hazmobfps.com/abstract-geometric-shapes.png",
        width: 1200,
        height: 630,
        alt: "Hazmob FPS Gaming Collection - 5 Free Online Shooters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazmob FPS - Ultimate FPS Gaming Collection",
    description: "Play 5 intense FPS games with tactical combat and multiplayer action. Free to play in your browser.",
    images: ["https://hazmobfps.com/abstract-geometric-shapes.png"],
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
