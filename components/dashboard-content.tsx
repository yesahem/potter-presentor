"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ProjectCard } from "@/components/project-card"

interface Project {
  id: number
  title: string
  description: string
  lastModified: string
  status: string
}

interface DashboardContentProps {
  projects: Project[]
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function DashboardContent({ projects, searchQuery, onSearchChange }: DashboardContentProps) {
  return (
    <SidebarInset className="flex-1">
      <div className="flex flex-col h-full">
        {/* Header with search */}
        <header className="flex items-center gap-4 p-4 border-b border-border/40">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <p>No projects found matching your search.</p>
            </div>
          )}
        </main>
      </div>
    </SidebarInset>
  )
}
