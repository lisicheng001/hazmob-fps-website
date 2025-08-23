"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function GamePage() {
  const params = useParams()
  const gameId = Number.parseInt(params.id as string)

  const games = [
    {
      id: 1,
      title: "Hazmob",
      description: "Intense tactical FPS combat with realistic weapons and strategic gameplay",
      iframe: "https://html5.gamemonetize.co/rc0aptuuleju6xnlpeds38lisqpz1hzu/",
      longDescription:
        "Experience the ultimate tactical FPS combat in Hazmob. Master realistic weapons, coordinate with your team, and dominate the battlefield with strategic gameplay. Features advanced ballistics, destructible environments, and intense multiplayer action.",
    },
    {
      id: 2,
      title: "Cosmic Strike 2.0",
      description: "Futuristic space combat with advanced weapons and alien enemies",
      iframe: "https://html5.gamemonetize.co/fukc1o594u4o3turx87lvd2tqk1shhmm/",
      longDescription:
        "Battle across the galaxy in Cosmic Strike 2.0. Fight alien invaders with futuristic weapons, explore space stations, and save humanity from extinction. Features sci-fi environments, energy weapons, and epic boss battles.",
    },
    {
      id: 3,
      title: "RGB Shooter",
      description: "Colorful arcade-style shooter with vibrant graphics and fast action",
      iframe: "https://html5.gamemonetize.co/p0ata23ta267p4z5rp8ejs84o7gxklri/",
      longDescription:
        "Dive into the colorful world of RGB Shooter. Experience fast-paced arcade action with vibrant graphics, power-ups, and endless waves of enemies. Perfect for quick gaming sessions with addictive gameplay.",
    },
    {
      id: 4,
      title: "Sharpshot Trials",
      description: "Precision shooting challenges with advanced targeting and skill-based gameplay",
      iframe: "https://html5.gamemonetize.co/406nooocmwif8bd3pm20vqdmn4b8wobj/",
      longDescription:
        "Test your marksmanship in Sharpshot Trials. Complete precision shooting challenges, master different weapons, and prove your skills in various scenarios. Features realistic ballistics and challenging targets.",
    },
    {
      id: 5,
      title: "Dead Zone 15165",
      description: "Survival horror FPS in a post-apocalyptic wasteland with zombie combat",
      iframe: "https://html5.gamemonetize.co/awku83ardtmr5fs8p5miwb29n518zh4k/",
      longDescription:
        "Survive the zombie apocalypse in Dead Zone 15165. Navigate through a post-apocalyptic wasteland, scavenge for resources, and fight hordes of undead. Features atmospheric horror elements and intense survival gameplay.",
    },
  ]

  const game = games.find((g) => g.id === gameId)

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Game Not Found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
              ← Back to Games
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              HAZMOB FPS
            </span>
          </h1>
        </div>
      </div>

      {/* Game Section */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{game.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{game.description}</p>
          </div>

          {/* Game iframe */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 mb-8">
            <iframe
              src={game.iframe}
              title={game.title}
              loading="eager"
              allowFullScreen
              allow="fullscreen; autoplay; gamepad"
              className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] border-0"
            />
          </div>

          {/* Game Info */}
          <Card className="bg-slate-800/50 border-slate-700 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">About {game.title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">{game.longDescription}</p>
            </CardContent>
          </Card>

          {/* Controls */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Game Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Movement</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">W A S D</span> - Move
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">Mouse</span> - Look around
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">Shift</span> - Run
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">Space</span> - Jump
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Combat</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">Left Click</span> - Shoot
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">Right Click</span> - Aim
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">R</span> - Reload
                    </li>
                    <li>
                      <span className="font-mono bg-slate-700 px-2 py-1 rounded">1-9</span> - Switch weapons
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
