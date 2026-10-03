import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Session } from './service/Session'
import { Role } from './app/Role/role'

export async function proxy(request: NextRequest) {
  const pathname=request.nextUrl.pathname
  const {data}=await Session()
  let isAuthenticated=false
  let isAdmin=false 
  if(data){
    isAuthenticated=true
    isAdmin=data.user.role==Role.admin
  }
  if(!isAuthenticated){
      return NextResponse.redirect(new URL('/login', request.url))

  }
  if(isAdmin && pathname.startsWith('/userDashboard')){
    return NextResponse.redirect(new URL('/adminDashboard',request.url))
  }
  if(!isAdmin && pathname.startsWith('/adminDashboard')){
    return NextResponse.redirect(new URL('/dashboard',request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/dashboard','/adminDashboard','/adminDashboard/:path*','/dashboard/:path*'],
}