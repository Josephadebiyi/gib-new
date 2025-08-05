"use client"

import { useState, useEffect } from "react"
import { getCourses, updateCourse, deleteCourse, addCourse } from "@/lib/api"
import type { Course } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, PlusCircle, Edit, Trash2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function AdminCoursesPage() {
  const { toast } = useToast()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    name: "",
    description: "",
    price: 0,
    duration: "",
    category: "",
    level: "",
    certification: "",
    image_url: "",
    popular: false,
    rating: 0,
    students: 0,
    skills: [],
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    setLoading(true)
    const result = await getCourses()
    if (result.success) {
      setCourses(result.data)
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  const handleEditClick = (course: Course) => {
    setEditingCourse({ ...course, skills: course.skills || [] }) // Ensure skills is an array
    setIsEditDialogOpen(true)
  }

  const handleDeleteClick = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const result = await deleteCourse(id)
      if (result.success) {
        toast({
          title: "Success",
          description: "Course deleted successfully.",
        })
        fetchCourses()
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    }
  }

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingCourse) return

    const result = await updateCourse(editingCourse.id, editingCourse)
    if (result.success) {
      toast({
        title: "Success",
        description: "Course updated successfully.",
      })
      setIsEditDialogOpen(false)
      setEditingCourse(null)
      fetchCourses()
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    }
  }

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCourse.name || !newCourse.description || !newCourse.price || !newCourse.duration || !newCourse.category || !newCourse.level) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const courseToCreate = {
      ...newCourse,
      id: newCourse.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '') || `course-${Date.now()}`,
      popular: newCourse.popular || false,
      rating: newCourse.rating || 0,
      students: newCourse.students || 0,
      skills: newCourse.skills || [],
    } as Course

    const result = await addCourse(courseToCreate)
    if (result.success) {
      toast({
        title: "Success",
        description: "Course added successfully.",
      })
      setIsAddDialogOpen(false)
      setNewCourse({
        name: "",
        description: "",
        price: 0,
        duration: "",
        category: "",
        level: "",
        certification: "",
        image_url: "",
        popular: false,
        rating: 0,
        students: 0,
        skills: [],
      })
      fetchCourses()
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    }
  }

  const handleNewCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setNewCourse((prev) => ({ ...prev, [id]: value }))
  }

  const handleNewCourseSelectChange = (id: string, value: string | boolean) => {
    setNewCourse((prev) => ({ ...prev, [id]: value }))
  }

  const handleNewCourseSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourse((prev) => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }))
  }

  const handleEditingCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setEditingCourse((prev) => (prev ? { ...prev, [id]: value } : null))
  }

  const handleEditingCourseSelectChange = (id: string, value: string | boolean) => {
    setEditingCourse((prev) => (prev ? { ...prev, [id]: value } : null))
  }

  const handleEditingCourseSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingCourse((prev) => (prev ? { ...prev, skills: e.target.value.split(',').map(s => s.trim()) } : null))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#173104]/90 to-[#2d5a1a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src="/images/gitb-logo-simple.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer brightness-0 invert"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#b9ee44] transition-colors">
                Home
              </Link>
              <Link href="/courses" className="hover:text-[#b9ee44] transition-colors">
                Courses
              </Link>
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="hover:text-[#b9ee44] transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="hover:text-[#b9ee44] transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/application">
              <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] text-sm px-6 py-2 font-semibold shadow-lg">
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Dashboard Content */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#173104] hover:bg-[#2d5a1a] text-white">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Course
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">Add New Course</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddSubmit} className="space-y-4 py-4">
                  <div>
                    <Label htmlFor="name">Course Name</Label>
                    <Input id="name" value={newCourse.name} onChange={handleNewCourseChange} required />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" value={newCourse.description} onChange={handleNewCourseChange} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price (€)</Label>
                      <Input id="price" type="number" value={newCourse.price} onChange={handleNewCourseChange} required />
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration (e.g., "4 months")</Label>
                      <
