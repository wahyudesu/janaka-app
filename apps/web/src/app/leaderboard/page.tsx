import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, Crown, Star, Zap, Target, Gift } from "lucide-react"
import Link from "next/link"

// Mock data for leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "Alex Chen",
    username: "alexc",
    avatar: "/professional-avatar.png",
    level: 47,
    points: 12450,
    xpToNext: 1550,
    totalXp: 2000,
    badges: ["Speed Demon", "Task Master", "Streak King"],
    rank: 1,
    weeklyPoints: 890,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    username: "sarahj",
    avatar: "/female-professional-avatar.png",
    level: 43,
    points: 11200,
    xpToNext: 800,
    totalXp: 2000,
    badges: ["Goal Crusher", "Consistency Pro"],
    rank: 2,
    weeklyPoints: 750,
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    username: "miker",
    avatar: "/male-professional-avatar.png",
    level: 41,
    points: 10800,
    xpToNext: 1200,
    totalXp: 2000,
    badges: ["Early Bird", "Challenge Ace"],
    rank: 3,
    weeklyPoints: 680,
  },
  {
    id: 4,
    name: "Emma Wilson",
    username: "emmaw",
    avatar: "/female-avatar-glasses.png",
    level: 38,
    points: 9650,
    xpToNext: 350,
    totalXp: 2000,
    badges: ["Study Master"],
    rank: 4,
    weeklyPoints: 620,
  },
  {
    id: 5,
    name: "David Kim",
    username: "davidk",
    avatar: "/asian-male-avatar.png",
    level: 36,
    points: 9100,
    xpToNext: 900,
    totalXp: 2000,
    badges: ["Night Owl", "Perfectionist"],
    rank: 5,
    weeklyPoints: 580,
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-6 w-6 text-yellow-500" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />
    default:
      return <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>
  }
}

const getBadgeIcon = (badge: string) => {
  const iconMap: { [key: string]: any } = {
    "Speed Demon": Zap,
    "Task Master": Target,
    "Streak King": Star,
    "Goal Crusher": Trophy,
    "Consistency Pro": Award,
    "Early Bird": Star,
    "Challenge Ace": Medal,
    "Study Master": Target,
    "Night Owl": Star,
    Perfectionist: Award,
  }
  const Icon = iconMap[badge] || Gift
  return <Icon className="h-3 w-3" />
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Leaderboard</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how you stack up against other questers in the community
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <Card
              key={user.id}
              className={`text-center ${index === 0 ? "md:order-2 ring-2 ring-primary/20" : index === 1 ? "md:order-1" : "md:order-3"} ${index === 0 ? "md:scale-105" : ""} transition-all hover:shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">{getRankIcon(user.rank)}</div>
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-lg font-semibold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <p className="text-muted-foreground">@{user.username}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Level {user.level}</span>
                      <span className="text-sm text-muted-foreground">{user.xpToNext} XP to next</span>
                    </div>
                    <Progress value={(user.xpToNext / user.totalXp) * 100} className="h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.points.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {user.badges.slice(0, 2).map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {getBadgeIcon(badge)}
                        <span className="ml-1">{badge}</span>
                      </Badge>
                    ))}
                    {user.badges.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.badges.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Medal className="h-5 w-5 mr-2 text-primary" />
              Full Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {leaderboardData.map((user) => (
                <div key={user.id} className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">{getRankIcon(user.rank)}</div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">@{user.username}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      <div className="text-center hidden sm:block">
                        <div className="text-lg font-bold text-foreground">Level {user.level}</div>
                        <div className="text-sm text-muted-foreground">{user.xpToNext} XP to next</div>
                      </div>

                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{user.points.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Total Points</div>
                      </div>

                      <div className="text-center hidden md:block">
                        <div className="text-lg font-semibold text-accent">+{user.weeklyPoints}</div>
                        <div className="text-sm text-muted-foreground">This Week</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {user.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {getBadgeIcon(badge)}
                        <span className="ml-1">{badge}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Climb the Ranks?</h3>
              <p className="text-muted-foreground mb-6">
                Join GameQuest today and start earning points, unlocking achievements, and competing with the best!
              </p>
              <Link href="/leaderboard">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Journey
                  <Star className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
