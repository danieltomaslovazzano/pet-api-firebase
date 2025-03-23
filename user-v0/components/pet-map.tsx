"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LucideMapPin, LucideFilter, LucideX, LucideChevronDown, LucideChevronUp } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Mock data for demonstration
const MOCK_PETS = [
  {
    id: 1,
    type: "lost",
    petName: "Max",
    petType: "dog",
    breed: "Golden Retriever",
    lastSeen: "2023-03-20",
    location: { lat: 40.7128, lng: -74.006 },
    description: "Male, 3 years old, golden color with white chest",
    image: "/placeholder.svg?height=200&width=200",
    distance: 0.5,
  },
  {
    id: 2,
    type: "found",
    petType: "cat",
    breed: "Tabby",
    lastSeen: "2023-03-21",
    location: { lat: 40.7148, lng: -74.016 },
    description: "Female, gray tabby with white paws",
    image: "/placeholder.svg?height=200&width=200",
    distance: 1.2,
  },
  {
    id: 3,
    type: "lost",
    petName: "Bella",
    petType: "dog",
    breed: "Poodle",
    lastSeen: "2023-03-19",
    location: { lat: 40.7138, lng: -74.026 },
    description: "Female, 2 years old, white curly fur",
    image: "/placeholder.svg?height=200&width=200",
    distance: 2.3,
  },
  {
    id: 4,
    type: "found",
    petType: "dog",
    breed: "Labrador",
    lastSeen: "2023-03-22",
    location: { lat: 40.7158, lng: -74.036 },
    description: "Male, black lab with brown collar",
    image: "/placeholder.svg?height=200&width=200",
    distance: 3.1,
  },
  {
    id: 5,
    type: "lost",
    petName: "Charlie",
    petType: "cat",
    breed: "Siamese",
    lastSeen: "2023-03-18",
    location: { lat: 40.7168, lng: -74.046 },
    description: "Male, 4 years old, cream with brown points",
    image: "/placeholder.svg?height=200&width=200",
    distance: 3.8,
  },
]

export default function PetMap() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("all")
  const [showFilters, setShowFilters] = useState(!isMobile)
  const [filters, setFilters] = useState({
    petType: "all",
    dateRange: "all",
    distance: [10],
    showAIMatches: true,
  })
  const [filteredPets, setFilteredPets] = useState(MOCK_PETS)

  useEffect(() => {
    // Filter pets based on selected filters
    let filtered = MOCK_PETS

    if (activeTab !== "all") {
      filtered = filtered.filter((pet) => pet.type === activeTab)
    }

    if (filters.petType !== "all") {
      filtered = filtered.filter((pet) => pet.petType === filters.petType)
    }

    // Filter by distance
    filtered = filtered.filter((pet) => pet.distance <= filters.distance[0])

    setFilteredPets(filtered)
  }, [activeTab, filters])

  return (
    <div className="relative h-[calc(100vh-13rem)] min-h-[500px]">
      <div className="absolute inset-0 bg-muted/20">
        {/* This would be replaced with an actual map component */}
        <div className="h-full w-full flex items-center justify-center bg-muted/30">
          <div className="text-center">
            <p className="text-muted-foreground">Interactive Map would be displayed here</p>
            <p className="text-sm text-muted-foreground mt-2">(Using Google Maps or Mapbox integration)</p>
          </div>
        </div>

        {/* Map pins for pets */}
        {filteredPets.map((pet) => (
          <div
            key={pet.id}
            className="absolute"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${pet.type === "lost" ? "bg-destructive" : "bg-green-500"} text-white`}
            >
              <LucideMapPin className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="absolute top-0 right-0 h-full w-full md:w-96 bg-background/95 backdrop-blur-sm shadow-lg overflow-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="lost">Lost</TabsTrigger>
                <TabsTrigger value="found">Found</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Pets Near You</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1"
            >
              <LucideFilter className="h-4 w-4" />
              Filters
              {showFilters ? <LucideChevronUp className="h-4 w-4" /> : <LucideChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Filter Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pet-type">Pet Type</Label>
                  <Select value={filters.petType} onValueChange={(value) => setFilters({ ...filters, petType: value })}>
                    <SelectTrigger id="pet-type">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="dog">Dogs</SelectItem>
                      <SelectItem value="cat">Cats</SelectItem>
                      <SelectItem value="bird">Birds</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select
                    value={filters.dateRange}
                    onValueChange={(value) => setFilters({ ...filters, dateRange: value })}
                  >
                    <SelectTrigger id="date-range">
                      <SelectValue placeholder="All Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Past Week</SelectItem>
                      <SelectItem value="month">Past Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Distance (miles)</Label>
                    <span className="text-sm text-muted-foreground">{filters.distance[0]} miles</span>
                  </div>
                  <Slider
                    defaultValue={[10]}
                    max={50}
                    step={1}
                    value={filters.distance}
                    onValueChange={(value) => setFilters({ ...filters, distance: value })}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="ai-matches"
                    checked={filters.showAIMatches}
                    onCheckedChange={(checked) => setFilters({ ...filters, showAIMatches: checked })}
                  />
                  <Label htmlFor="ai-matches">Show AI-suggested matches only</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      petType: "all",
                      dateRange: "all",
                      distance: [10],
                      showAIMatches: true,
                    })
                  }
                >
                  <LucideX className="h-4 w-4 mr-2" />
                  Reset Filters
                </Button>
              </CardFooter>
            </Card>
          )}

          <div className="space-y-4">
            {filteredPets.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No pets found matching your filters</p>
              </div>
            ) : (
              filteredPets.map((pet) => (
                <Card key={pet.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={pet.image || "/placeholder.svg"}
                        alt={pet.petName || `${pet.petType} ${pet.breed}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-2/3">
                      <CardHeader className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant={pet.type === "lost" ? "destructive" : "default"} className="mb-2">
                              {pet.type === "lost" ? "Lost" : "Found"}
                            </Badge>
                            <CardTitle className="text-base">{pet.petName || `${pet.breed} ${pet.petType}`}</CardTitle>
                          </div>
                          <Badge variant="outline">{pet.distance} mi</Badge>
                        </div>
                        <CardDescription className="text-xs">
                          Last {pet.type === "lost" ? "seen" : "found"} on {pet.lastSeen}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        <p className="text-sm line-clamp-2">{pet.description}</p>
                      </CardContent>
                      <CardFooter className="p-3 pt-0">
                        <Button size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

