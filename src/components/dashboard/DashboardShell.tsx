import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { AnimatedBackground } from "@/components/phantomix/AnimatedBackground";
import { useAuthSession } from "@/hooks/use-auth-session";

export function DashboardShell({ children }: { children: ReactNode }) {
  const { session } = useAuthSession();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative">
        <AnimatedBackground />
        <AppSidebar />
        <SidebarInset className="relative z-10 bg-transparent">
          <DashboardNavbar email={session?.user?.email} />
          <main className="p-4 md:p-6 space-y-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-display font-bold">
        {title}<span className="text-gradient">.</span>
      </h1>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
}
