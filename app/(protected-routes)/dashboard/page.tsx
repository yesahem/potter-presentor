

import { onAuthenticateUser } from "@/actions/user";
import { DashboardLayout } from "@/components/dashboard-layout";
import { mockProjects } from "@/lib/const";
import { redirect } from "next/navigation";

export default async function HomePage() {

  const user = await onAuthenticateUser();

  console.log("user from page.tsx", user);

  if (!user || user.status !== 200 || !user.user) {
    redirect("/signin");
  }
  
  return <DashboardLayout projects={mockProjects} user={user.user} />;
}
