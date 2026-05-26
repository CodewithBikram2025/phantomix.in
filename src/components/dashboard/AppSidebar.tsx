import { Link, useRouterState } from "@tanstack/react-router";
import { Ghost, LayoutDashboard, BarChart3, Users, Globe, Shield, Settings, Sparkles } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", url: "/dashboard", icon: BarChart3 },
  { title: "Sessions", url: "/dashboard", icon: Globe },
  { title: "Privacy", url: "/dashboard", icon: Shield },
  { title: "AI Copilot", url: "/dashboard", icon: Sparkles },
  { title: "Members", url: "/dashboard", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-primary/40 blur-md rounded-full" />
            <Ghost className="relative h-6 w-6 text-primary" strokeWidth={2.5} />
          </div>
          {!collapsed && (
            <span className="font-display text-lg font-bold">
              Phantom<span className="text-gradient">ix</span>
            </span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={path === item.url && item.title === "Overview"}>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              {!collapsed && <span>Settings</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
