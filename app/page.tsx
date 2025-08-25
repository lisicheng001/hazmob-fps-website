import type { Metadata } from "next"
import HazmobFPSPageClient from "./HazmobFPSPageClient"

export const metadata: Metadata = {
  title: "Hazmob FPS - Ultimate FPS Gaming Collection | 5 Free Online Shooters",
  description:
    "Play 5 intense FPS games including Hazmob, Cosmic Strike 2.0, RGB Shooter, Sharpshot Trials & Dead Zone 15165. Free tactical combat games with multiplayer action.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hazmobfps.com",
  },
  other: {
    "google-site-verification": "index,follow",
  },
}

export default function HazmobFPSPage() {
  return <HazmobFPSPageClient />
}
