import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}