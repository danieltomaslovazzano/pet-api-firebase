"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { LucideFilter, LucideHeart, LucideMapPin, LucideSearch } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const MOCK_ADOPTIONS = [
  {
    id: 1,
    name: "Buddy",
    type: "dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    size: "Large",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks.",
    location: "New York, NY",
    distance: 3.2,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "Happy Paws Rescue",
    goodWith: ["children", "dogs"],
  },
  {
    id: 2,
    name: "Whiskers",
    type: "cat",
    breed: "Domestic Shorthair",
    age: "1 year",
    gender: "Female",
    size: "Medium",
    description: "Whiskers is a playful and affectionate cat who enjoys cuddling and playing with toys.",
    location: "Brooklyn, NY",
    distance: 5.7,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "Feline Friends",
    goodWith: ["cats"],
  },
  {
    id: 3,
    name: "Max",
    type: "dog",
    breed: "German Shepherd",
    age: "3 years",
    gender: "Male",
    size: "Large",
    description:
      "Max is a loyal and intelligent German Shepherd who is great with training and loves to learn new tricks.",
    location: "Queens, NY",
    distance: 7.1,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "Second Chance Shelter",
    goodWith: ["children", "dogs"],
  },
  {
    id: 4,
    name: "Luna",
    type: "cat",
    breed: "Siamese",
    age: "4 years",
    gender: "Female",
    size: "Small",
    description: "Luna is a quiet and gentle Siamese cat who enjoys peaceful environments and gentle petting.",
    location: "Manhattan, NY",
    distance: 2.3,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "City Kitties",
    goodWith: ["seniors"],
  },
  {
    id: 5,
    name: "Charlie",
    type: "dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Male",
    size: "Medium",
    description: "Charlie is an energetic and curious Beagle who loves to explore and play with other dogs.",
    location: "Bronx, NY",
    distance: 9.5,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "Paws and Claws",
    goodWith: ["children", "dogs", "cats"],
  },
  {
    id: 6,
    name: "Oliver",
    type: "cat",
    breed: "Maine Coon",
    age: "2 years",
    gender: "Male",
    size: "Large",
    description: "Oliver is a majestic Maine Coon who is gentle and loves to be brushed and petted.",
    location: "Staten Island, NY",
    distance: 12.8,
    image: "/placeholder.svg?height=300&width=300",
    shelter: "Furry Friends",
    goodWith: ["children", "seniors"],
  },
]

export default function AdoptionListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    petType: "all",
    age: "all",
    size: "all",
    gender: "all",
    distance: [50],
    goodWith: {
      children: false,
      dogs: false,
      cats: false,
      seniors: false,
    },
  })

  const [showFilters, setShowFilters] = useState(false)

  // Filter pets based on search and filters
  const filteredPets = MOCK_ADOPTIONS.filter((pet) => {
    // Search term filter
    if (
      searchTerm &&
      !pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Pet type filter
    if (filters.petType !== "all" && pet.type !== filters.petType) {
      return false
    }

    // Age filter
    if (filters.age !== "all") {
      const petAgeYears = Number.parseInt(pet.age.split(" ")[0])
      if (filters.age === "puppy" && petAgeYears >= 1) return false
      if (filters.age === "young" && (petAgeYears < 1 || petAgeYears > 3)) return false
      if (filters.age === "adult" && (petAgeYears < 4 || petAgeYears > 8)) return false
      if (filters.age === "senior" && petAgeYears < 9) return false
    }

    // Size filter
    if (filters.size !== "all" && pet.size.toLowerCase() !== filters.size) {
      return false
    }

    // Gender filter
    if (filters.gender !== "all" && pet.gender.toLowerCase() !== filters.gender) {
      return false
    }

    // Distance filter
    if (pet.distance > filters.distance[0]) {
      return false
    }

    // Good with filter
    const goodWithFilters = Object.entries(filters.goodWith).filter(([_, value]) => value)
    if (goodWithFilters.length > 0) {
      const hasMatch = goodWithFilters.some(([key, _]) => pet.goodWith.includes(key))
      if (!hasMatch) return false
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, breed, etc."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          <LucideFilter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle>Filter Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Label htmlFor="age">Age</Label>
                <Select value={filters.age} onValueChange={(value) => setFilters({ ...filters, age: value })}>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="All Ages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="puppy">Baby/Puppy (Under 1 year)</SelectItem>
                    <SelectItem value="young">Young (1-3 years)</SelectItem>
                    <SelectItem value="adult">Adult (4-8 years)</SelectItem>
                    <SelectItem value="senior">Senior (9+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Size</Label>
                <Select value={filters.size} onValueChange={(value) => setFilters({ ...filters, size: value })}>
                  <SelectTrigger id="size">
                    <SelectValue placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={filters.gender} onValueChange={(value) => setFilters({ ...filters, gender: value })}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="All Genders" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between">
                <Label>Distance (miles)</Label>
                <span className="text-sm text-muted-foreground">{filters.distance[0]} miles</span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={5}
                value={filters.distance}
                onValueChange={(value) => setFilters({ ...filters, distance: value })}
              />
            </div>

            <div className="mt-6">
              <Label className="mb-2 block">Good With</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="children"
                    checked={filters.goodWith.children}
                    onCheckedChange={(checked) =>
                      setFilters({
                        ...filters,
                        goodWith: { ...filters.goodWith, children: !!checked },
                      })
                    }
                  />
                  <Label htmlFor="children">Children</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dogs"
                    checked={filters.goodWith.dogs}
                    onCheckedChange={(checked) =>
                      setFilters({
                        ...filters,
                        goodWith: { ...filters.goodWith, dogs: !!checked },
                      })
                    }
                  />
                  <Label htmlFor="dogs">Dogs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cats"
                    checked={filters.goodWith.cats}
                    onCheckedChange={(checked) =>
                      setFilters({
                        ...filters,
                        goodWith: { ...filters.goodWith, cats: !!checked },
                      })
                    }
                  />
                  <Label htmlFor="cats">Cats</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="seniors"
                    checked={filters.goodWith.seniors}
                    onCheckedChange={(checked) =>
                      setFilters({
                        ...filters,
                        goodWith: { ...filters.goodWith, seniors: !!checked },
                      })
                    }
                  />
                  <Label htmlFor="seniors">Seniors</Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                setFilters({
                  petType: "all",
                  age: "all",
                  size: "all",
                  gender: "all",
                  distance: [50],
                  goodWith: {
                    children: false,
                    dogs: false,
                    cats: false,
                    seniors: false,
                  },
                })
              }
            >
              Reset Filters
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No pets found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        ) : (
          filteredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden">
              <div className="relative h-48">
                <img src={pet.image || "/placeholder.svg"} alt={pet.name} className="h-full w-full object-cover" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 rounded-full"
                >
                  <LucideHeart className="h-5 w-5 text-destructive" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{pet.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pet.breed}</p>
                  </div>
                  <Badge>{pet.age}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <LucideMapPin className="h-4 w-4 mr-1" />
                  <span>
                    {pet.location} ({pet.distance} miles)
                  </span>
                </div>
                <p className="line-clamp-2 text-sm">{pet.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {pet.goodWith.includes("children") && <Badge variant="outline">Good with children</Badge>}
                  {pet.goodWith.includes("dogs") && <Badge variant="outline">Good with dogs</Badge>}
                  {pet.goodWith.includes("cats") && <Badge variant="outline">Good with cats</Badge>}
                  {pet.goodWith.includes("seniors") && <Badge variant="outline">Good with seniors</Badge>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">From {pet.shelter}</p>
                <Button asChild>
                  <Link href={`/pets/${pet.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>

      {filteredPets.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More Pets</Button>
        </div>
      )}
    </div>
  )
}

