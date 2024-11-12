import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/sidebar/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
        <SidebarTrigger />
        {children}
    </SidebarProvider>
  );
}
