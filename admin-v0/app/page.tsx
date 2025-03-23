"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Dog, Home, Menu, PawPrint, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { SidebarNav } from "@/components/sidebar-nav"

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/found-pets" onClick={() => setIsMobileMenuOpen(false)}>
                    <PawPrint className="mr-2 h-5 w-5" />
                    Found Pets
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
            <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
          </div>
          <div className="relative hidden md:flex md:flex-1 md:items-center md:gap-4 md:justify-end">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,853</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Lost Pets</CardTitle>
                <Dog className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-muted-foreground">24 pending approval</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Found Pets</CardTitle>
                <PawPrint className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98</div>
                <p className="text-xs text-muted-foreground">18 pending approval</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Adoptions</CardTitle>
                <Dog className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">312</div>
                <p className="text-xs text-muted-foreground">42 pending approval</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      User growth chart visualization
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Listing Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Listing status chart visualization
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-1">
                      <CardTitle>Recent User Activity</CardTitle>
                      <CardDescription>Recent user registrations and actions</CardDescription>
                    </div>
                    <div className="ml-auto">
                      <Select defaultValue="today">
                        <SelectTrigger className="h-8 w-[120px]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="yesterday">Yesterday</SelectItem>
                          <SelectItem value="week">This Week</SelectItem>
                          <SelectItem value="month">This Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Sarah Johnson</TableCell>
                          <TableCell>New Registration</TableCell>
                          <TableCell>2 hours ago</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Completed
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Michael Chen</TableCell>
                          <TableCell>Posted Lost Pet</TableCell>
                          <TableCell>3 hours ago</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              Pending
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Emily Rodriguez</TableCell>
                          <TableCell>Posted Found Pet</TableCell>
                          <TableCell>5 hours ago</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Approved
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Pending Approvals</CardTitle>
                    <CardDescription>Listings waiting for moderation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full bg-muted">
                          <PawPrint className="absolute inset-0 h-10 w-10 p-2 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Lost Golden Retriever</p>
                          <p className="text-xs text-muted-foreground">Posted by Michael Chen</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full bg-muted">
                          <PawPrint className="absolute inset-0 h-10 w-10 p-2 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Found Tabby Cat</p>
                          <p className="text-xs text-muted-foreground">Posted by Lisa Wong</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>Detailed metrics and trends for your pet management platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-muted-foreground">Analytics content will be displayed here</div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>Generate and view reports for your pet management platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-muted-foreground">Reports content will be displayed here</div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

