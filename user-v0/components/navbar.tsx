"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LucidePawPrint,
  LucideMenu,
  LucideUser,
  LucideLogOut,
  LucideSettings,
  LucideHeart,
  LucideBell,
} from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <LucidePawPrint className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PetConnect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Lost & Found</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pets/browse"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Browse Lost & Found Pets</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Search and filter through lost and found pets in your area
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/lost"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Report Lost Pet</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Create a report for your missing pet
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/found"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Report Found Pet</div>
                        <p className="text-sm leading-tight text-muted-foreground">Report a pet you've found</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/map"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Interactive Map</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          View lost and found pets in your area on our interactive map
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/adopt" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Adopt</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="hidden md:flex relative">
                <LucideBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Notifications</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full md:h-10 md:w-10">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <div className="flex items-center">
                          <LucideUser className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/favorites">
                        <div className="flex items-center">
                          <LucideHeart className="mr-2 h-4 w-4" />
                          <span>Favorites</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <div className="flex items-center">
                          <LucideSettings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <div className="flex items-center">
                      <LucideLogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="secondary" className="hidden md:inline-flex">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild variant="default" className="hidden md:inline-flex">
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <LucideMenu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/lost" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Report Lost Pet
                </Link>
                <Link href="/found" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Report Found Pet
                </Link>
                <Link href="/map" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Interactive Map
                </Link>
                <Link href="/adopt" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Adopt
                </Link>
                <Link href="/community" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Community
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>

                {isAuthenticated ? (
                  <div className="border-t pt-4 mt-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/profile" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                        Profile
                      </Link>
                      <Link href="/favorites" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                        Favorites
                      </Link>
                      <Link href="/settings" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                        Settings
                      </Link>
                      <Button variant="destructive" onClick={handleLogout}>
                        Log out
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 mt-4">
                    <Button asChild>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

