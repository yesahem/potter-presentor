"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { menuItems } from "@/const";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  user: {
    id: string;
    email: string;
    name: string;
    clerkId: string;
    profilePicture: string | null;
    subscription: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function AppSidebar({
  activeSection,
  onSectionChange,
  user,
}: AppSidebarProps) {
  console.log("user ", user);
  return (
    <Sidebar className="border-r border-border/40">
      <SidebarContent>
        <div className="flex items-center justify-center text-3xl mt-3">
          Potter-Presentor
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeSection === item.key}
                  >
                    <button
                      onClick={() => onSectionChange(item.key)}
                      className="flex items-center gap-3 px-3 py-2 w-full text-left hover:cursor-pointer m-y-3"
                    >
                      <item.icon className="h-4 w-4" />
                      <span >{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.profilePicture!} alt={user.name} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate">{user.name}</span>
            <span className="text-xs text-muted-foreground truncate">
              {user.email}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
