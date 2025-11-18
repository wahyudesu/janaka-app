import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, Crown, Star, Zap, Target, Gift } from "lucide-react"
import Link from "next/link"
import Header from "@/components/navbar"

// Leaderboard data - Top 10 based on Season Points
const leaderboardData = [
  {
    id: 1,
    name: "Moch Zulfikar Satria Abimanyu",
    username: "mzulfikar",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1350,
    xpToNext: 1550,
    totalXp: 2000,
    badges: ["Perfect Attendance", "Top Performer"],
    rank: 1,
    weeklyPoints: 270,
  },
  {
    id: 2,
    name: "Fairuz Fajar Athallah Setiawan",
    username: "ffairuz",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1350,
    xpToNext: 1550,
    totalXp: 2000,
    badges: ["Perfect Attendance", "Rising Star"],
    rank: 2,
    weeklyPoints: 270,
  },
  {
    id: 3,
    name: "Mohamad Alif Misbakhul Ramadhan",
    username: "malif",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1100,
    xpToNext: 1200,
    totalXp: 2000,
    badges: ["Consistent Learner"],
    rank: 3,
    weeklyPoints: 220,
  },
  {
    id: 4,
    name: "Muhammad Fariq Zain",
    username: "mfariq",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1100,
    xpToNext: 1200,
    totalXp: 2000,
    badges: ["Dedicated Student"],
    rank: 4,
    weeklyPoints: 220,
  },
  {
    id: 5,
    name: "Fawazdiya Arkan Putra",
    username: "farkan",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1100,
    xpToNext: 1200,
    totalXp: 2000,
    badges: ["Active Participant"],
    rank: 5,
    weeklyPoints: 220,
  },
  {
    id: 6,
    name: "Rafli Khrisna Dhiwanto",
    username: "rkhrisna",
    avatar: "/professional-avatar.png",
    level: 2,
    points: 1000,
    xpToNext: 1000,
    totalXp: 2000,
    badges: ["Steady Progress"],
    rank: 6,
    weeklyPoints: 200,
  },
  {
    id: 7,
    name: "Mochamad Naufal Rizquiloh",
    username: "mnaufal",
    avatar: "/professional-avatar.png",
    level: 1,
    points: 850,
    xpToNext: 850,
    totalXp: 2000,
    badges: ["Getting Started"],
    rank: 7,
    weeklyPoints: 170,
  },
  {
    id: 8,
    name: "Muhammad Dzaka Taufiqurrahman",
    username: "mdzaka",
    avatar: "/professional-avatar.png",
    level: 1,
    points: 850,
    xpToNext: 850,
    totalXp: 2000,
    badges: ["On Track"],
    rank: 8,
    weeklyPoints: 170,
  },
  {
    id: 9,
    name: "Athallah Alfareza Agustino",
    username: "aalfareza",
    avatar: "/professional-avatar.png",
    level: 1,
    points: 850,
    xpToNext: 850,
    totalXp: 2000,
    badges: ["Newcomer"],
    rank: 9,
    weeklyPoints: 170,
  },
  {
    id: 10,
    name: "Boris kristian tua sitompul",
    username: "bkristian",
    avatar: "/professional-avatar.png",
    level: 1,
    points: 850,
    xpToNext: 850,
    totalXp: 2000,
    badges: ["Beginner"],
    rank: 10,
    weeklyPoints: 170,
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
      <Header />

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
                    <div className="flex justify-center items-center mb-2">
                      <span className="text-sm text-muted-foreground">Level {user.level}</span>
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
