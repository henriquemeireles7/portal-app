"use client";

import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { SidebarHeader } from "@/components/_sidebarcomponents/SidebarHeader";
import { EventsGroup } from "@/components/_sidebarcomponents/EventsGroup";
import { CommunityGroup } from "@/components/_sidebarcomponents/CommunityGroup";
import { LearningPathsGroup } from "@/components/_sidebarcomponents/LearningPathsGroup";
import { SoftwaresGroup } from "@/components/_sidebarcomponents/SoftwaresGroup";
import { MarketplaceGroup } from "@/components/_sidebarcomponents/MarketplaceGroup";
import { SidebarFooter } from "@/components/_sidebarcomponents/SidebarFooter";

export function Sidebar() {
  return (
    <SidebarProvider>
      <ShadcnSidebar>
        <SidebarHeader />
        <SidebarContent>
          <EventsGroup />
          <CommunityGroup />
          <LearningPathsGroup />
          <SidebarSeparator />
          <SoftwaresGroup />
          <MarketplaceGroup />
        </SidebarContent>
        <SidebarFooter />
      </ShadcnSidebar>
    </SidebarProvider>
  );
}
