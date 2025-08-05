"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, FileText, TrendingUp, Eye, Edit } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      change: "+12%",
      icon: Users,
      description: "Active enrollments",
    },
    {
      title: "Active Courses",
      value: "6",
      change: "+2",
      icon: BookOpen,
      description: "Currently running",
    },
    {
      title: "Applications",
      value: "89",
      change: "+23%",
      icon: FileText,
      description: "Pending review",
    },
    {
      title: "Revenue",
      value: "€45,231",
      change: "+18%",
      icon: TrendingUp,
      description: "This month",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      name: "John Smith",
      course: "Cybersecurity Professional",
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Maria Garcia",
      course: "UI/UX Design",
      status: "approved",
      date: "2024-01-14",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      course: "IAM Specialist",
      status: "pending",
      date: "2024-01-13",
    },
    {
      id: 4,
      name: "Sophie Chen",
      course: "European Languages",
      status: "rejected",
      date: "2024-01-12",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your courses.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Applications */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest student applications requiring review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{application.name}</p>
                      <p className="text-xs text-muted-foreground">{application.course}</p>
                      <p className="text-xs text-muted-foreground">{application.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(application.status)}
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add New Student
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Create Course
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Review Applications
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
