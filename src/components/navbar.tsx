
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            N
          </div>
          <span className="text-lg">Nova</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
          About
          </Link>

    

          <Link
            href="/dashboard"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/service"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/Posts"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Posts
          </Link>

          
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
        <Link href="/login">  <Button variant="ghost">Log in</Button></Link>
          <Link href="/signup"> <Button>Register</Button></Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 hover:bg-muted md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>

            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>

            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>

            <div className="mt-3 flex gap-2 border-t pt-3">
              <Button variant="outline" className="flex-1">
                Log in
              </Button>

              <Button className="flex-1">
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

