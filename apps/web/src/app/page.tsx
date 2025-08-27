"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Gift, Users, Star, Zap, Award } from "lucide-react"
import Link from "next/link"
import Header from "@/components/navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-1" />
              Level Up Your Life
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Komunitas Jejepangan
              <span className="text-primary block">JANAKA </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Komunitas Jejepangan PENS yang aktif berbagi info, event, dan kegiatan seru seputar budaya Jepang, anime, manga, serta jejepangan kampus. Temukan teman baru, ikuti lomba, diskusi, dan ekspresikan minatmu bareng JANAKA!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/leaderboard">
                <Button size="lg" className="text-lg px-8 py-6">
                  Mari bergabung
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:border-transparent">
                  Lihat kegiatan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose GameQuest?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform mundane tasks into exciting challenges with our comprehensive gamification platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Break down your goals into manageable quests with XP rewards and progress tracking
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unlock badges, level up your profile, and showcase your accomplishments to the community
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reward Store</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exchange your earned points for real rewards, discounts, and exclusive benefits
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compete with friends, join challenges, and climb the global leaderboard together
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Questers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <div className="text-muted-foreground">Tasks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Rewards Claimed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section ala inspirasi */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 39.5L40 0.5V39.5H0Z\' fill=\'%23fff\' fill-opacity=\'0.03\'/%3E%3C/svg%3E")'}} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text & Button */}
          <div className="flex-1 text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="block text-white">LET'S GO</span>
              <span className="block">
                <span className="text-yellow-400">SAAT</span>
                <span className="text-white">NYA</span>
              </span>
              <span className="block text-white">KAMU JOIN!</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md">
              Jadilah bagian dari komunitas developer terbesar di Indonesia. Tingkatkan skill, perluas jaringan, dan raih kesempatan karir bersama kami!
            </p>
            <Link href="#">
              <Button size="lg" className="text-lg px-8 py-6 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full shadow-lg group flex items-center gap-2">
                Join Sekarang
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Button>
            </Link>
          </div>
          {/* Right: Card Info */}
          <div className="flex-1 flex justify-center w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center min-w-[300px] max-w-xs border border-white/20" style={{transform: 'rotate(4deg)'}}>
              {/* Dummy Logo
              <div className="mb-4">
                <img src="https://imphnen.com/assets/logo-imphnen.png" alt="Logo" className="h-12 mx-auto" onError={(e) => {e.currentTarget.style.display='none'}} />
                <div className="text-2xl font-extrabold text-white drop-shadow-sm">JANAKA</div>
              </div> */}
              <div className="text-3xl font-bold text-white mb-2">450+</div>
              <div className="text-white/80 text-lg font-medium">Member Sudah Bergabung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                {/* Dummy Logo */}
                <span className="text-2xl font-bold text-primary">J</span>
              </div>
              <span className="text-lg font-semibold text-foreground tracking-wide">Janaka</span>
            </div>
            {/* Links */}
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Support</Link>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-primary">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 19c7.732 0 11.965-6.415 11.965-11.965 0-.182 0-.364-.012-.545A8.548 8.548 0 0022 3.924a8.19 8.19 0 01-2.357.646A4.118 4.118 0 0021.448 2.3a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0015.448 2c-2.266 0-4.104 1.838-4.104 4.104 0 .322.036.636.106.936C7.728 6.89 4.1 5.13 1.671 2.149c-.355.61-.558 1.32-.558 2.078 0 1.434.73 2.7 1.845 3.444A4.093 4.093 0 012 6.575v.052c0 2.004 1.426 3.675 3.32 4.053-.347.094-.713.144-1.09.144-.267 0-.522-.026-.773-.073.523 1.632 2.037 2.82 3.833 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a href="#" aria-label="Github" className="hover:text-primary">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Janaka. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
