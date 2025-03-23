"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Check, Dog, Eye, Filter, Home, Menu, MoreHorizontal, PawPrint, Search, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { SidebarNav } from "@/components/sidebar-nav"

export default function LostPetsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("all")

  const lostPets = [
    {
      id: "1",
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      location: "Central Park, NY",
      date: "Mar 15, 2023",
      status: "pending",
      owner: "Michael Chen",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Luna",
      type: "Cat",
      breed: "Siamese",
      location: "Downtown, Seattle",
      date: "Apr 2, 2023",
      status: "approved",
      owner: "Robert Johnson",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Buddy",
      type: "Dog",
      breed: "Labrador",
      location: "Riverside Park, Chicago",
      date: "Apr 10, 2023",
      status: "approved",
      owner: "Emily Rodriguez",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredPets = selectedStatus === "all" ? lostPets : lostPets.filter((pet) => pet.status === selectedStatus)

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <SidebarNav />

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PetConnect</span>
            </div>
          </div>
          <div className="py-4">
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-muted-foreground">Main</h3>
              <div className="mt-2 space-y-1">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Home className="mr-2 h-5 w-5" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/users" onClick={() => setIsMobileMenuOpen(false)}>
                    <Users className="mr-2 h-5 w-5" />
                    Users
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-muted-foreground">Pet Listings</h3>
              <div className="mt-2 space-y-1">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/lost-pets" onClick={() => setIsMobileMenuOpen(false)}>
                    <Dog className="mr-2 h-5 w-5" />
                    Lost Pets
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1 md:grow-0">
            <h1 className="text-lg font-semibold md:text-xl">Lost Pets</h1>
          </div>
          <div className="relative hidden md:flex md:flex-1 md:items-center md:gap-4 md:justify-end">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search lost pets..."
                className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[300px]"
              />
            </form>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                5
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Lost Pets</CardTitle>
                <CardDescription>Review and moderate lost pet listings.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Listings</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search lost pets..."
                    className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pet</TableHead>
                    <TableHead>Type/Breed</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date Reported</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPets.map((pet) => (
                    <TableRow key={pet.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={pet.image} alt={pet.name} />
                            <AvatarFallback>{pet.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {pet.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        {pet.type} / {pet.breed}
                      </TableCell>
                      <TableCell>{pet.location}</TableCell>
                      <TableCell>{pet.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            pet.status === "approved"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : pet.status === "rejected"
                                ? "bg-red-50 text-red-700 border-red-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                          }
                        >
                          {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{pet.owner}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View details</span>
                          </Button>
                          {pet.status === "pending" && (
                            <>
                              <Button variant="ghost" size="icon" className="text-green-600">
                                <Check className="h-4 w-4" />
                                <span className="sr-only">Approve</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-600">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Reject</span>
                              </Button>
                            </>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Contact owner</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Remove listing</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

