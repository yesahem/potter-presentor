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
  name: string
  email: string
  avatar?: string
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

    // First filter out deleted projects unless we're in trash
    if (activeSection === "trash") {
      filtered = filtered.filter((project) => project.isDeleted)
    } else {
      filtered = filtered.filter((project) => !project.isDeleted)

      // Then apply section-specific filters
      switch (activeSection) {
        case "home":
          filtered = filtered.filter((project) => project.status === "active")
          break
        case "draft":
          filtered = filtered.filter((project) => project.status === "draft")
          break
        case "archived":
          filtered = filtered.filter((project) => project.status === "archived")
          break
        case "recents":
          // Show recently modified projects (last 7 days)
          filtered = filtered.filter(
            (project) =>
              project.lastModified.includes("hour") ||
              project.lastModified.includes("day") ||
              project.lastModified === "Just now",
          )
          break
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
