import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Cpu,
  GraduationCap,
  MessageCircle,
  Wrench,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function LearningPathsGroup() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="flex w-full items-center">
            <span>Trilhas</span>
            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/trilhas/ai">
                    <Cpu className="mr-2 h-4 w-4" />
                    <span>AI e Automações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/trilhas/formacao-magic">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    <span>Formação Magic</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/trilhas/piws">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span>PIWs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/trilhas/ferramentas">
                    <Wrench className="mr-2 h-4 w-4" />
                    <span>Ferramentas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
