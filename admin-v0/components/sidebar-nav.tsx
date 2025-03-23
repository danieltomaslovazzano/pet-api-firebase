"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dog, Home, PawPrint, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn("hidden md:flex h-screen w-64 flex-col border-r bg-background", className)} {...props}>
      {/* Header */}
      <div className="flex h-16 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PetConnect</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-4">
        <div className="px-4 py-2">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Main</h3>
          <div className="space-y-1">
            <Button variant={pathname === "/" ? "secondary" : "ghost"} asChild className="w-full justify-start">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Link>
            </Button>
            <Button variant={pathname === "/users" ? "secondary" : "ghost"} asChild className="w-full justify-start">
              <Link href="/users">
                <Users className="mr-2 h-5 w-5" />
                Users
              </Link>
            </Button>
          </div>
        </div>

        <div className="px-4 py-2">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Pet Listings</h3>
          <div className="space-y-1">
            <Button
              variant={pathname === "/lost-pets" ? "secondary" : "ghost"}
              asChild
              className="w-full justify-start"
            >
              <Link href="/lost-pets">
                <Dog className="mr-2 h-5 w-5" />
                Lost Pets
              </Link>
            </Button>
            <Button
              variant={pathname === "/found-pets" ? "secondary" : "ghost"}
              asChild
              className="w-full justify-start"
            >
              <Link href="/found-pets">
                <PawPrint className="mr-2 h-5 w-5" />
                Found Pets
              </Link>
            </Button>
            <Button variant={pathname === "/adoption" ? "secondary" : "ghost"} asChild className="w-full justify-start">
              <Link href="/adoption">
                <Dog className="mr-2 h-5 w-5" />
                Adoption
              </Link>
            </Button>
          </div>
        </div>

        <div className="px-4 py-2">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">System</h3>
          <div className="space-y-1">
            <Button variant={pathname === "/settings" ? "secondary" : "ghost"} asChild className="w-full justify-start">
              <Link href="/settings">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">admin@petconnect.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

