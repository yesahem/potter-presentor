import { Home, Clock, Trash2, Settings } from "lucide-react"

export const menuItems = [
  {
    title: "Home",
    key: "home",
    icon: Home,
  },
  {
    title: "Recents",
    key: "recents",
    icon: Clock,
  },
  {
    title: "Trash",
    key: "trash",
    icon: Trash2,
  },
  {
    title: "Settings",
    key: "settings",
    icon: Settings,
  },
]


export const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    lastModified: "2 hours ago",
    status: "active",
    isDeleted: false,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    lastModified: "1 day ago",
    status: "active",
    isDeleted: false,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics and content management",
    lastModified: "3 days ago",
    status: "draft",
    isDeleted: false,
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Online education platform",
    lastModified: "1 week ago",
    status: "active",
    isDeleted: false,
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather forecasting",
    lastModified: "2 weeks ago",
    status: "archived",
    isDeleted: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal showcase and blog",
    lastModified: "1 month ago",
    status: "active",
    isDeleted: false,
  },
  {
    id: 7,
    title: "Deleted Project Example",
    description: "This project was moved to trash",
    lastModified: "3 days ago",
    status: "active",
    isDeleted: true,
  },

  {
    id: 8,
    title: "E-commerce Platform 2",
    description: "Modern online shopping experience 2",
    lastModified: "2 hours ago",
    status: "active",
    isDeleted: false,
  },
];