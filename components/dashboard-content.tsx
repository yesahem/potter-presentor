"use client"

import { Search, Plus, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ProjectCard } from "@/components/project-card"
import { ImportProjectModal } from "@/components/import-project-modal"
import { useState } from "react"
import { JsonValue } from "@prisma/client/runtime/library"
import { useRouter } from "next/navigation"

interface Project {
  id: number
  title: string
  description: string
  lastModified: string
  status: string
  slidesData? : JsonValue
  isDeleted: boolean
}

interface DashboardContentProps {
  projects: Project[]
  searchQuery: string
  onSearchChange: (query: string) => void
  activeSection: string
  onDeleteProject: (projectId: number) => void
  onRestoreProject: (projectId: number) => void
  onPermanentDelete: (projectId: number) => void
}

export function DashboardContent({
  projects,
  searchQuery,
  onSearchChange,
  activeSection,
  onDeleteProject,
  onRestoreProject,
  onPermanentDelete,
}: DashboardContentProps) {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const router = useRouter()

  const getSectionTitle = () => {
    switch (activeSection) {
      case "home":
        return "Active Projects"
      case "recents":
        return "Recent Projects"
      case "draft":
        return "Draft Projects"
      case "archived":
        return "Archived Projects"
      case "trash":
        return "Trash"
      case "settings":
        return "Settings"
      default:
        return "Projects"
    }
  }

  const getEmptyMessage = () => {
    switch (activeSection) {
      case "trash":
        return "No deleted projects found."
      case "recents":
        return "No recent projects found."
      case "draft":
        return "No draft projects found."
      case "archived":
        return "No archived projects found."
      default:
        return "No projects found."
    }
  }

  const handleNewProject = () => {
    console.log("Creating new project...")
    // Add your new project logic here
    router.push("/create")
  }

  const handleImportProject = () => {
    setIsImportModalOpen(true)
  }

  const handleImportComplete = (files: File[]) => {
    console.log("Importing files:", files)
    // Add your import logic here
    setIsImportModalOpen(false)
  }

  // Only show action buttons in home, recents, and draft sections
  const showActionButtons = ["home", "recents", "draft"].includes(activeSection)

  return (
    <SidebarInset className="flex-1">
      <div className="flex flex-col h-full">
        {/* Header with search */}
        <header className="flex items-center gap-4 p-4 border-b border-border/40">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-lg font-semibold">{getSectionTitle()}</h1>
            {activeSection !== "settings" && (
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
            )}
          </div>
        </header>

        {/* Action buttons section */}
        {showActionButtons && (
          <div className="flex items-center gap-3 p-4 border-b border-border/40 justify-end">
            <Button onClick={handleNewProject} className="flex items-center gap-2 cursor-pointer">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
            <Button onClick={handleImportProject} variant="outline" className="flex items-center gap-2 cursor-pointer">
              <Upload className="h-4 w-4" />
              Import Project
            </Button>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          {activeSection === "settings" ? (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <p>Settings panel coming soon...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    slidesData={project?.slidesData}
                    isInTrash={activeSection === "trash"}
                    onDelete={onDeleteProject}
                    onRestore={onRestoreProject}
                    onPermanentDelete={onPermanentDelete}
                  />
                ))}
              </div>

              {projects.length === 0 && (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <p>{getEmptyMessage()}</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Import Modal */}
      <ImportProjectModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportComplete}
      />
    </SidebarInset>
  )
}
