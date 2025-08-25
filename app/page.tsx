"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function HazmobFPSPage() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "TacticalGamer",
      text: "Amazing FPS collection! The tactical gameplay in Hazmob is incredible.",
      timestamp: "2 hours ago",
      rating: 5,
    },
    {
      id: 2,
      author: "SpaceWarrior",
      text: "Cosmic Strike 2.0 has the best space combat mechanics I've ever played!",
      timestamp: "5 hours ago",
      rating: 5,
    },
    {
      id: 3,
      author: "SharpShooter",
      text: "RGB Shooter is so addictive! Perfect for quick gaming sessions.",
      timestamp: "1 day ago",
      rating: 4,
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [newAuthor, setNewAuthor] = useState("")

  const games = [
    {
      id: 1,
      title: "Hazmob",
      description: "Intense tactical FPS combat with realistic weapons and strategic gameplay",
      iframe: "https://html5.gamemonetize.co/rc0aptuuleju6xnlpeds38lisqpz1hzu/",
      directUrl: "https://html5.gamemonetize.co/rc0aptuuleju6xnlpeds38lisqpz1hzu/",
      isPlayable: true,
    },
    {
      id: 2,
      title: "Cosmic Strike 2.0",
      description: "Futuristic space combat with advanced weapons and alien enemies",
      iframe: "https://html5.gamemonetize.co/fukc1o594u4o3turx87lvd2tqk1shhmm/",
      directUrl: "https://html5.gamemonetize.co/fukc1o594u4o3turx87lvd2tqk1shhmm/",
      isPlayable: true,
    },
    {
      id: 3,
      title: "RGB Shooter",
      description: "Colorful arcade-style shooter with vibrant graphics and fast action",
      iframe: "https://html5.gamemonetize.co/p0ata23ta267p4z5rp8ejs84o7gxklri/",
      directUrl: "https://html5.gamemonetize.co/p0ata23ta267p4z5rp8ejs84o7gxklri/",
      isPlayable: true,
    },
    {
      id: 4,
      title: "Sharpshot Trials",
      description: "Precision shooting challenges with advanced targeting and skill-based gameplay",
      iframe: "https://html5.gamemonetize.co/406nooocmwif8bd3pm20vqdmn4b8wobj/",
      directUrl: "https://html5.gamemonetize.co/406nooocmwif8bd3pm20vqdmn4b8wobj/",
      isPlayable: true,
    },
    {
      id: 5,
      title: "Dead Zone 15165",
      description: "Survival horror FPS in a post-apocalyptic wasteland with zombie combat",
      iframe: "https://html5.gamemonetize.co/awku83ardtmr5fs8p5miwb29n518zh4k/",
      directUrl: "https://html5.gamemonetize.co/awku83ardtmr5fs8p5miwb29n518zh4k/",
      isPlayable: true,
    },
  ]

  const handleAddComment = () => {
    if (newComment.trim() && newAuthor.trim()) {
      const comment = {
        id: comments.length + 1,
        author: newAuthor,
        text: newComment,
        timestamp: "Just now",
        rating: 5,
      }
      setComments([comment, ...comments])
      setNewComment("")
      setNewAuthor("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden tactical-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-block p-4 rounded-full bg-primary/20 fps-glow mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent combat-pulse">
              HAZMOB FPS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Enter the battlefield. Master tactical combat. Dominate the competition in the ultimate FPS gaming
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold px-8 py-4 text-lg fps-glow"
            >
              🚀 DEPLOY NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold px-8 py-4 text-lg bg-transparent"
            >
              📊 VIEW STATS
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">MISSION SELECTION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Choose your battlefield and engage the enemy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 cursor-pointer group overflow-hidden hover:scale-105 fps-glow hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-80 relative overflow-hidden">
                      <img
                        src={`/abstract-geometric-shapes.png?height=320&width=480&query=${encodeURIComponent(`${game.title} FPS game cover art military tactical shooter dark theme neon green pink accents`)}`}
                        alt={`${game.title} game cover`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-bold fps-glow">
                          ONLINE
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {game.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{game.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-primary text-sm font-semibold">READY</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-secondary-foreground fps-glow"
                          >
                            DEPLOY →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 tactical-grid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">TACTICAL FEATURES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Advanced combat systems for elite operatives</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast-Paced Action</h3>
              <p className="text-muted-foreground">
                Experience lightning-fast gameplay with smooth controls and responsive mechanics that keep you in the
                action.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tactical Combat</h3>
              <p className="text-muted-foreground">
                Master strategic positioning, weapon selection, and team coordination to outmaneuver your opponents.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Online Multiplayer</h3>
              <p className="text-muted-foreground">
                Join players from around the world in intense multiplayer battles that test your skills and teamwork.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">🔫</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Diverse Arsenal</h3>
              <p className="text-muted-foreground">
                Choose from a variety of realistic weapons, each with unique characteristics and tactical applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dynamic Maps</h3>
              <p className="text-muted-foreground">
                Battle across carefully designed maps that offer multiple strategic routes and tactical opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 fps-glow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 fps-glow">
                <span className="text-foreground font-bold text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Competitive Play</h3>
              <p className="text-muted-foreground">
                Climb the leaderboards and prove your skills in ranked matches against players of similar skill levels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">MISSION REPORTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">What our operatives are saying</p>
          </div>

          {/* Add Comment Form */}
          <Card className="bg-card border-border mb-8 fps-glow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">📝 SUBMIT MISSION REPORT</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Operative Callsign"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mission feedback and tactical assessment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <Button
                  onClick={handleAddComment}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold fps-glow"
                >
                  🚀 TRANSMIT REPORT
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <Card
                key={comment.id}
                className="bg-card border-border hover:border-primary/30 transition-colors fps-glow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center fps-glow">
                        <span className="text-sm font-bold">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{comment.author}</h4>
                        <p className="text-sm text-muted-foreground">{comment.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(comment.rating)].map((_, i) => (
                        <span key={i} className="text-primary">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{comment.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-card/50 tactical-grid">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent combat-pulse">
                HAZMOB FPS
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2"></div>
            </div>
            <p className="text-muted-foreground mb-4">© 2024 Hazmob FPS Command. All tactical operations secured.</p>
            <p className="text-muted-foreground/70 text-sm">hazmobfps.com - Elite FPS Gaming Platform</p>
            <div className="flex justify-center gap-6 mt-6">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                🎮 Games
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                📊 Leaderboard
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                🛡️ Support
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
