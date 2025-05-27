import getAllProjects from "@/actions/projects";
import { onAuthenticateUser } from "@/actions/user";
import { DashboardLayout } from "@/components/dashboard-layout";
import { redirect } from "next/navigation";

async function checkAuthUser() {
  const user = await onAuthenticateUser();

  if (200 === user?.status) {
    redirect("/dashboard");
  }
  if (403 === user?.status || 500 === user?.status) {
    redirect("/signin");
  }
}

async function getAllProject() {
  const projects = await getAllProjects();
  if (200 === projects?.status) {
    return projects.data;
  }
  redirect("/signin");
}
export default function Dashboard() {
  checkAuthUser();
  getAllProject();

  const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    lastModified: "2 hours ago",
    status: "active",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    lastModified: "1 day ago",
    status: "active",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics and content management",
    lastModified: "3 days ago",
    status: "deleted",

  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Online education platform",
    lastModified: "1 week ago",
    status: "active",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather forecasting",
    lastModified: "2 weeks ago",
    status: "deleted",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal showcase and blog",
    lastModified: "1 month ago",
    status: "active",
  },
]
  // return (
  //   <div className="flex flex-col gap-6 w-full relative">
  //     <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
  //       <div className="flex flex-col items-start">
  //         <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
  //           Projects
  //         </h1>
  //         <p className=" font-normal text-xl dark:text-secondary">
  //           Get all your projects at one place
  //         </p>
  //       </div>
  //     </div>

  //     {/* Projects */}
  //   </div>
 
  // );

  return <DashboardLayout projects={mockProjects} />
}
