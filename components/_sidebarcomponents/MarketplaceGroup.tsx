import { 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar";
import { ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function MarketplaceGroup() {
  return (
    <SidebarMenu>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>Marketplace</span>
              <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/dashboard/marketplace/demanda">
                    <span>Tenho uma demanda</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/dashboard/marketplace/profissional">
                    <span>Sou um profissional</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
} 