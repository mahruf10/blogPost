import * as React from "react"

import { SearchForm } from "../components/search-form"
import { VersionSwitcher } from "../components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../components/ui/sidebar"
import { adminRoute } from "../../src/app/routes/adminRoute"
import { userRoute } from "../../src/app/routes/userRoute"
import { Role } from "../../src/app/Role/role"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
   {
      title: "user Management",
      url: "#",
      // items: [
      //   {
      //     title: "admin dashboard",
      //     url: "/adminDashboard",
      //   },
      //   {
      //     title: "user dashboard",
      //     url: "/dashboard",
      //   },
      // ],
    }
  ],
}
export function AppSidebar({
  user,...props
}) {
  let route=[]
  switch (user.role) {
    case Role.admin :
      route = adminRoute;
      break;
    case Role.user:
      route = userRoute
      break;
      default:
      route=[]
      break
  }
let routes=route.items
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {route.title}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {route.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} />}>
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
