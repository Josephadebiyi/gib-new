import { supabase } from "./supabase"

export interface Course {
  id: string
  title: string
  description: string
  category: string
  image_url: string
  slug: string
  created_at: string
  updated_at: string
}

export interface Application {
  id: string
  course_id: string
  full_name: string
  email: string
  phone_number?: string
  message?: string
  status: "pending" | "approved" | "rejected"
  created_at: string
  updated_at: string
}

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: false })
  if (error) {
    console.error("Error fetching courses:", error)
    return []
  }
  return data as Course[]
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const { data, error } = await supabase.from("courses").select("*").eq("slug", slug).single()
  if (error) {
    console.error(`Error fetching course with slug ${slug}:`, error)
    return null
  }
  return data as Course
}

export async function addCourse(course: Omit<Course, "id" | "created_at" | "updated_at">): Promise<Course | null> {
  const { data, error } = await supabase.from("courses").insert(course).select().single()
  if (error) {
    console.error("Error adding course:", error)
    return null
  }
  return data as Course
}

export async function updateCourse(
  id: string,
  updates: Partial<Omit<Course, "id" | "created_at" | "updated_at">>,
): Promise<Course | null> {
  const { data, error } = await supabase.from("courses").update(updates).eq("id", id).select().single()
  if (error) {
    console.error("Error updating course:", error)
    return null
  }
  return data as Course
}

export async function deleteCourse(id: string): Promise<boolean> {
  const { error } = await supabase.from("courses").delete().eq("id", id)
  if (error) {
    console.error("Error deleting course:", error)
    return false
  }
  return true
}

export async function submitApplication(
  application: Omit<Application, "id" | "status" | "created_at" | "updated_at">,
): Promise<Application | null> {
  const { data, error } = await supabase.from("applications").insert(application).select().single()
  if (error) {
    console.error("Error submitting application:", error)
    return null
  }
  return data as Application
}

export async function getApplications(): Promise<Application[]> {
  const { data, error } = await supabase.from("applications").select("*").order("created_at", { ascending: false })
  if (error) {
    console.error("Error fetching applications:", error)
    return []
  }
  return data as Application[]
}

export async function updateApplicationStatus(
  id: string,
  status: "pending" | "approved" | "rejected",
): Promise<Application | null> {
  const { data, error } = await supabase.from("applications").update({ status }).eq("id", id).select().single()
  if (error) {
    console.error("Error updating application status:", error)
    return null
  }
  return data as Application
}
