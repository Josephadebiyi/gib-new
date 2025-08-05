import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codel - Online Courses",
  description: "Learn in-demand skills with Codel's online courses.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 z-40 w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                  <div className="flex items-center space-x-4">
                    <SidebarTrigger className="lg:hidden" /> {/* Only show on smaller screens */}
                    <Link href="/" className="flex items-center space-x-2">
                      <Image
                        src="/images/gitb-logo-simple.png"
                        alt="Codel Logo"
                        width={32}
                        height={32}
                        className="dark:invert"
                      />
                      <span className="font-bold text-lg">Codel</span>
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-4">
                      <Link href="/courses" className="text-sm font-medium hover:underline underline-offset-4">
                        Courses
                      </Link>
                      <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                        How It Works
                      </Link>
                      <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                        About Us
                      </Link>
                      <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
                        FAQ
                      </Link>
                      <Link href="/application" className="text-sm font-medium hover:underline underline-offset-4">
                        Apply
                      </Link>
                      <Link href="/admin/courses" className="text-sm font-medium hover:underline underline-offset-4">
                        Admin
                      </Link>
                    </nav>
                  </div>
                  <div className="flex items-center space-x-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Sheet>
                      <SheetTrigger asChild className="lg:hidden">
                        <Button variant="outline" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle navigation</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <nav className="flex flex-col gap-4 py-6">
                          <Link href="/courses" className="text-lg font-medium hover:underline underline-offset-4">
                            Courses
                          </Link>
                          <Link href="/how-it-works" className="text-lg font-medium hover:underline underline-offset-4">
                            How It Works
                          </Link>
                          <Link href="/about" className="text-lg font-medium hover:underline underline-offset-4">
                            About Us
                          </Link>
                          <Link href="/faq" className="text-lg font-medium hover:underline underline-offset-4">
                            FAQ
                          </Link>
                          <Link href="/application" className="text-lg font-medium hover:underline underline-offset-4">
                            Apply
                          </Link>
                          <Link href="/admin/courses" className="text-lg font-medium hover:underline underline-offset-4">
                            Admin
                          </Link>
                        </nav>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                {children}
              </main>
              <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
                <div className="container px-4 md:px-6">
                  <p>&copy; {new Date().getFullYear()} Codel. All rights reserved.</p>
                  <nav className="mt-2 flex justify-center space-x-4">
                    <Link href="/privacy-policy" className="hover:underline underline-offset-4">
                      Privacy Policy
                    </Link>
                    <Link href="/terms-conditions" className="hover:underline underline-offset-4">
                      Terms & Conditions
                    </Link>
                    <Link href="/cookie-policy" className="hover:underline underline-offset-4">
                      Cookie Policy
                    </Link>
                  </nav>
                </div>
              </footer>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
