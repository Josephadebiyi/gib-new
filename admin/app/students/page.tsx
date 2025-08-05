import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Edit, MessageSquare } from "lucide-react"

// Mock data for students
const students = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    course: "Cybersecurity Professional",
    status: "Enrolled",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Bob Williams",
    email: "bob@example.com",
    course: "UI/UX Design",
    status: "Pending",
    date: "2024-02-20",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    course: "IAM Specialist",
    status: "Enrolled",
    date: "2024-03-01",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    course: "European Languages",
    status: "Rejected",
    date: "2024-03-10",
  },
  {
    id: "5",
    name: "Eve Adams",
    email: "eve@example.com",
    course: "KYC Compliance",
    status: "Enrolled",
    date: "2024-04-05",
  },
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-3xl font-bold mb-6">Student Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Students Management</CardTitle>
          <CardDescription>View and manage all students enrolled in GITB courses.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This page will display a list of students with filtering, sorting, and actions.</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Enrollment Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.status}</TableCell>
                  <TableCell>{student.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="mr-1">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="mr-1">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Message</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
