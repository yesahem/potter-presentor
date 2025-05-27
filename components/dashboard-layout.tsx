"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"

interface Project {
  id: number
  title: string
  description: string
  lastModified: string
  status: string
}

interface DashboardLayoutProps {
  projects: Project[]
}

export function DashboardLayout({ projects }: DashboardLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <DashboardContent projects={filteredProjects} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>
    </SidebarProvider>
  )
}
