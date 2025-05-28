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
  isDeleted: boolean
}

interface User {
  id: string;
        email: string;
        name: string;
        clerkId: string;
        profilePicture: string | null;
        subscription: boolean;
        createdAt: Date;
        updatedAt: Date;
}

interface DashboardLayoutProps {
  projects: Project[]
  user: User
}

export function DashboardLayout({ projects, user }: DashboardLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [projectList, setProjectList] = useState(projects)

  const handleDeleteProject = (projectId: number) => {
    setProjectList((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, isDeleted: true, lastModified: "Just now" } : project,
      ),
    )
  }

  const handleRestoreProject = (projectId: number) => {
    setProjectList((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, isDeleted: false, lastModified: "Just now" } : project,
      ),
    )
  }

  const handlePermanentDelete = (projectId: number) => {
    setProjectList((prev) => prev.filter((project) => project.id !== projectId))
  }

  // Filter projects based on active section
  const getFilteredProjects = () => {
    let filtered = projectList

    // Filter by section
    if (activeSection === "trash") {
      filtered = filtered.filter((project) => project.isDeleted)
    } else {
      filtered = filtered.filter((project) => !project.isDeleted)

      if (activeSection === "recents") {
        // Show recently modified projects (last 7 days)
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        // For demo purposes, we'll show projects modified in the last few days/hours
        filtered = filtered.filter(
          (project) =>
            project.lastModified.includes("hour") ||
            project.lastModified.includes("day") ||
            project.lastModified === "Just now",
        )
      }
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filtered
  }

  const filteredProjects = getFilteredProjects()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} user={user} />
        <DashboardContent
          projects={filteredProjects}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeSection={activeSection}
          onDeleteProject={handleDeleteProject}
          onRestoreProject={handleRestoreProject}
          onPermanentDelete={handlePermanentDelete}
        />
      </div>
    </SidebarProvider>
  )
}
