import { Home, Clock, Trash2, Settings, Archive, FileIcon as FileTemplate, FileText, Palette,Brain, Share2, Sparkles, Zap,  BarChart3, PlusCircle, Code, Users } from "lucide-react"




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
    title: "Draft",
    key: "draft",
    icon: FileText,
  },
  {
    title: "Archived",
    key: "archived",
    icon: Archive,
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


export const features = [
  {
    icon: Brain,
    title: "AI-Powered Content",
    description: "Generate compelling content and layouts automatically with advanced AI technology.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create professional presentations in minutes, not hours. Save time and boost productivity.",
  },
  {
    icon: Palette,
    title: "Beautiful Designs",
    description: "Choose from hundreds of professionally designed templates that adapt to your content.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your presentations instantly with colleagues, clients, or the world.",
  },
  {
    icon: Clock,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, no matter where you are.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "Get intelligent recommendations to improve your presentation's impact.",
  },
]

export const projectTemplates = [
  {
    id: "create",
    title: "Use a Template",
    description: "Choose from our collection of professionally designed templates to get started quickly.",
    icon: FileTemplate,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    features: ["Pre-built layouts", "Industry standards", "Quick setup"],
  },
  {
    id: "creative-ai",
    title: "Creative AI",
    description: "Let our AI assistant create a custom project based on your requirements and preferences.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    features: ["Smart generation", "Custom layouts", "AI-powered"],
  },
  {
    id: "creative-scratch",
    title: "Start from Scratch",
    description: "Begin with a blank canvas and build your project exactly the way you envision it.",
    icon: PlusCircle,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    features: ["Full control", "Custom design", "Unlimited creativity"],
  },
]

export const recentPrompts = [
  {
    id: 1,
    title: "Create a modern e-commerce dashboard with analytics",
    createdAt: "2 hours ago",
    outline: [
      {
        id: "1",
        title: "Dashboard",
        order: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Design a team collaboration workspace",
    createdAt: "1 day ago",
    outline: [
      {
        id: "1",
        title: "Workspace",
        order: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Build a portfolio website with dark theme",
    createdAt: "3 days ago",
    outline: [
      {
        id: "1",
        title: "Website",
        order: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Create a project management tool interface",
    createdAt: "1 week ago",
    outline: [
      {
        id: "1",
        title: "Tool",
        order: 4,
      },
    ],
  },
  {
    id: 5,
    title: "Design a mobile app landing page",
    createdAt: "2 weeks ago",
    outline: [
      {
        id: "1",
        title: "Landing",
        order: 5,
      },
    ],
  },
]