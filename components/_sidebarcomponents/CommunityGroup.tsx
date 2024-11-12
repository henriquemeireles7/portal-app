import { 
  SidebarGroup, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { Users, MessageCircle, Cpu, DollarSign, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function CommunityGroup() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="flex w-full items-center">
            <span>Comunidade</span>
            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/comunidade/comunicados">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span>Comunicados</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/comunidade/ai">
                    <Cpu className="mr-2 h-4 w-4" />
                    <span>AI e Automações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/comunidade/magic">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Comunidade Magic</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/comunidade/piw">
                    <DollarSign className="mr-2 h-4 w-4" />
                    <span>Produtos PIW</span>
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