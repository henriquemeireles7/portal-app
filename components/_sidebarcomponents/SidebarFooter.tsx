import { SidebarFooter as Footer, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { CircleUserRound } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function SidebarFooter() {
  return (
    <Footer>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <CircleUserRound className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <div className="px-3 py-2">
            <ModeToggle />
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </Footer>
  );
} 