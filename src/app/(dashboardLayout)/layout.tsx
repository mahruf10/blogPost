import { AppSidebar } from "../../../@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../@/components/ui/breadcrumb"
import { Separator } from "../../../@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../../@/components/ui/sidebar"
import { Session } from "../../service/Session"

export default async function DashboardLayout({user,admin,children}:{user: React.ReactNode, admin: React.ReactNode, children: React.ReactNode}) {
  // const userInfo={
  //   role:"ADMIN"
  // }
  const {data}=await Session()
  return (
    < SidebarProvider>
      <AppSidebar user={data.user}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        <div className="p-5">
          {user}
          {admin}
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
