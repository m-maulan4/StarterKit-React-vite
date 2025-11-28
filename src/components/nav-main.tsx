"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import RouterNavMain from "@/routers/RouterNavMain";
import { NavLink } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function NavMain() {
  const [openIndex, SetOpenIndex] = useState<string>();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {RouterNavMain.filter((f) => f.subMenu === false).map((item) => (
          <SidebarMenuItem key={item.title} onClick={() => SetOpenIndex("")}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <NavLink to={item.path}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {RouterNavMain.filter((f) => f.subMenu === true).map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={openIndex === item.title}
            onOpenChange={() =>
              SetOpenIndex(openIndex === item.title ? "" : item.title)
            }
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <NavLink to={item.path + "/" + subItem.path}>
                          <span>{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
