"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  LucideArrowLeft,
  LucideCalendar,
  LucideCheck,
  LucideHeart,
  LucideInfo,
  LucideLoader2,
  LucideMapPin,
  LucideMail,
  LucideMessageSquare,
  LucidePhone,
  LucidePrinter,
  LucideShare2,
  LucideTag,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type PetDetailsProps = {
  pet: any // In a real app, you'd use a proper type definition
}

export default function PetDetails({ pet }: PetDetailsProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [sightingDialogOpen, setSightingDialogOpen] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent successfully",
        description: `Your message has been sent to the ${pet.status === "adoption" ? "shelter" : pet.status === "lost" ? "owner" : "finder"}.`,
      })

      setContactDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSightingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Sighting reported successfully",
        description: "Thank you for helping reunite this pet with their owner.",
      })

      setSightingDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error reporting sighting",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAdoptionRequest = async () => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Adoption request submitted",
        description: "The shelter has been notified of your interest.",
      })
    } catch (error) {
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusBadge = () => {
    switch (pet.status) {
      case "lost":
        return <Badge variant="destructive">Lost</Badge>
      case "found":
        return <Badge variant="default">Found</Badge>
      case "adoption":
        return <Badge variant="secondary">For Adoption</Badge>
      default:
        return null
    }
  }

  const getStatusTitle = () => {
    switch (pet.status) {
      case "lost":
        return `Lost ${pet.type}`
      case "found":
        return `Found ${pet.type}`
      case "adoption":
        return `${pet.name} is available for adoption`
      default:
        return null
    }
  }

  const getContactInfo = () => {
    if (pet.status === "lost") {
      return pet.owner
    } else if (pet.status === "found") {
      return pet.finder
    } else if (pet.status === "adoption") {
      return pet.shelter
    }
    return null
  }

  const contactInfo = getContactInfo()

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 flex items-center">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mr-4">
          <LucideArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            {pet.name && pet.status !== "found" ? pet.name : getStatusTitle()}
            {getStatusBadge()}
          </h1>
          <p className="text-muted-foreground">
            {pet.breed} • {pet.gender} • {pet.age}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images and details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={pet.images[activeImageIndex] || "/placeholder.svg"}
                alt={pet.name || `${pet.status} ${pet.type}`}
                className="w-full h-full object-cover"
              />
            </div>

            {pet.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {pet.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${index === activeImageIndex ? "border-primary" : "border-transparent"}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${pet.name || pet.type} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tabs for details */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <LucideInfo className="mr-2 h-4 w-4 text-muted-foreground" />
                  Description
                </h3>
                <p className="text-muted-foreground">{pet.description}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Characteristics</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Type:</span> {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
                    </li>
                    <li>
                      <span className="font-medium">Breed:</span> {pet.breed}
                    </li>
                    <li>
                      <span className="font-medium">Gender:</span> {pet.gender}
                    </li>
                    <li>
                      <span className="font-medium">Age:</span> {pet.age}
                    </li>
                    <li>
                      <span className="font-medium">Color:</span>{" "}
                      {pet.color.charAt(0).toUpperCase() + pet.color.slice(1)}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Additional Info</h3>
                  <ul className="space-y-1 text-sm">
                    {pet.status === "lost" && (
                      <>
                        <li>
                          <span className="font-medium">Last Seen:</span>{" "}
                          {new Date(pet.lastSeenDate).toLocaleDateString()}
                        </li>
                        <li>
                          <span className="font-medium">Microchipped:</span> {pet.microchipped ? "Yes" : "No"}
                        </li>
                        {pet.reward && (
                          <li>
                            <span className="font-medium">Reward:</span> {pet.reward}
                          </li>
                        )}
                      </>
                    )}

                    {pet.status === "found" && (
                      <>
                        <li>
                          <span className="font-medium">Found Date:</span>{" "}
                          {new Date(pet.foundDate).toLocaleDateString()}
                        </li>
                        <li>
                          <span className="font-medium">Has Collar:</span> {pet.hasCollar ? "Yes" : "No"}
                        </li>
                        <li>
                          <span className="font-medium">Current Location:</span> {pet.currentLocation}
                        </li>
                      </>
                    )}

                    {pet.status === "adoption" && (
                      <>
                        <li>
                          <span className="font-medium">Microchipped:</span> {pet.microchipped ? "Yes" : "No"}
                        </li>
                        <li>
                          <span className="font-medium">Neutered/Spayed:</span> {pet.neutered ? "Yes" : "No"}
                        </li>
                        <li>
                          <span className="font-medium">Vaccinated:</span> {pet.vaccinated ? "Yes" : "No"}
                        </li>
                        {pet.adoptionFee && (
                          <li>
                            <span className="font-medium">Adoption Fee:</span> {pet.adoptionFee}
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {pet.tags && pet.tags.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <LucideTag className="mr-2 h-4 w-4 text-muted-foreground" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pet.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {pet.status === "adoption" && pet.goodWith && pet.goodWith.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-2">Good With</h3>
                    <div className="flex flex-wrap gap-2">
                      {pet.goodWith.map((item: string) => (
                        <Badge key={item} variant="outline" className="flex items-center">
                          <LucideCheck className="mr-1 h-3 w-3" />
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value="location" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <LucideMapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {pet.status === "lost"
                    ? "Last Seen Location"
                    : pet.status === "found"
                      ? "Found Location"
                      : "Shelter Location"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pet.status === "lost"
                    ? pet.lastSeenLocation
                    : pet.status === "found"
                      ? pet.foundLocation
                      : pet.shelter?.address}
                </p>

                <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
                  {/* This would be a real map in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground">Map would be displayed here</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <LucideCalendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  {pet.status === "lost"
                    ? "Date Reported Lost"
                    : pet.status === "found"
                      ? "Date Reported Found"
                      : "Available Since"}
                </h3>
                <p className="text-muted-foreground">
                  {new Date(pet.status === "adoption" ? pet.dateAvailable : pet.dateReported).toLocaleDateString()}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4 pt-4">
              {contactInfo && (
                <div>
                  <h3 className="font-medium mb-4">
                    {pet.status === "lost"
                      ? "Owner Information"
                      : pet.status === "found"
                        ? "Finder Information"
                        : "Shelter Information"}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <LucideUser className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contactInfo.name}</p>
                        {pet.status === "adoption" && (
                          <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <LucideMail className="h-4 w-4 text-primary" />
                      </div>
                      <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <LucidePhone className="h-4 w-4 text-primary" />
                      </div>
                      <a href={`tel:${contactInfo.phone}`} className="text-primary hover:underline">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Contact Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <LucideMessageSquare className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Contact {pet.status === "adoption" ? "Shelter" : pet.status === "lost" ? "Owner" : "Finder"}
                        </DialogTitle>
                        <DialogDescription>
                          Send a message about this {pet.status === "adoption" ? "pet" : pet.type}.
                        </DialogDescription>
                      </DialogHeader>

                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Your Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Your Phone (Optional)</Label>
                          <Input id="phone" placeholder="(555) 123-4567" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder={
                              pet.status === "adoption"
                                ? "I'm interested in adopting this pet..."
                                : pet.status === "lost"
                                  ? "I think I may have seen your pet..."
                                  : "I think this might be my pet..."
                            }
                            className="min-h-[100px]"
                            required
                          />
                        </div>

                        <DialogFooter>
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" asChild>
                    <a href={`tel:${contactInfo?.phone}`}>
                      <LucidePhone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right column - Actions and related */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>
                {pet.status === "lost"
                  ? "Help reunite this pet with their owner"
                  : pet.status === "found"
                    ? "Is this your pet or do you recognize it?"
                    : "Interested in adopting this pet?"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pet.status === "lost" && (
                <>
                  <Dialog open={sightingDialogOpen} onOpenChange={setSightingDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <LucideMapPin className="mr-2 h-4 w-4" />
                        Report Sighting
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Report a Sighting</DialogTitle>
                        <DialogDescription>Provide details about where and when you saw this pet.</DialogDescription>
                      </DialogHeader>

                      <form onSubmit={handleSightingSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="sighting-location">Location</Label>
                          <Input id="sighting-location" placeholder="123 Main St, Anytown, USA" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sighting-date">Date & Time</Label>
                          <Input id="sighting-date" type="datetime-local" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sighting-details">Details</Label>
                          <Textarea
                            id="sighting-details"
                            placeholder="Describe the pet and the circumstances of the sighting..."
                            className="min-h-[100px]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reporter-name">Your Name</Label>
                          <Input id="reporter-name" placeholder="John Doe" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reporter-contact">Contact Information</Label>
                          <Input id="reporter-contact" placeholder="Email or phone number" required />
                        </div>

                        <DialogFooter>
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Submit Sighting"
                            )}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full">
                    <LucideShare2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>

                  <Button variant="outline" className="w-full">
                    <LucidePrinter className="mr-2 h-4 w-4" />
                    Print Flyer
                  </Button>
                </>
              )}

              {pet.status === "found" && (
                <>
                  <Button className="w-full">
                    <LucideCheck className="mr-2 h-4 w-4" />
                    This is My Pet
                  </Button>

                  <Button variant="outline" className="w-full">
                    <LucideShare2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </>
              )}

              {pet.status === "adoption" && (
                <>
                  <Button className="w-full" onClick={handleAdoptionRequest} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <LucideHeart className="mr-2 h-4 w-4" />
                        Request to Adopt
                      </>
                    )}
                  </Button>

                  <Button variant="outline" className="w-full">
                    <LucideShare2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Pets</CardTitle>
              <CardDescription>
                {pet.status === "lost"
                  ? "Other lost pets in the area"
                  : pet.status === "found"
                    ? "Pets reported lost in this area"
                    : "You might also like these pets"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Similar pets would be dynamically generated in a real app */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Similar pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{pet.status === "adoption" ? "Charlie" : "Unknown " + pet.type}</h4>
                    <p className="text-sm text-muted-foreground">
                      {pet.status === "adoption" ? "Labrador Mix, 3 years" : "Found 2 miles away"}
                    </p>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      View details
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Similar pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{pet.status === "adoption" ? "Luna" : "Unknown " + pet.type}</h4>
                    <p className="text-sm text-muted-foreground">
                      {pet.status === "adoption" ? "Siamese, 2 years" : "Found 3 miles away"}
                    </p>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      View details
                    </Link>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href={pet.status === "adoption" ? "/adopt" : "/map"}>
                  View {pet.status === "lost" ? "Lost" : pet.status === "found" ? "Found" : "Adoption"} Listings
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Missing component definition
const LucideUser = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

