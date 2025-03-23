import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PetDetails from "@/components/pet-details"

type Props = {
  params: { id: string }
}

// This would normally come from your database
const getPet = (id: string) => {
  // Mock data for demonstration
  const pets = [
    {
      id: "1",
      name: "Max",
      status: "lost",
      type: "dog",
      breed: "Golden Retriever",
      age: "3 years",
      gender: "Male",
      color: "golden",
      lastSeenDate: "2023-03-20",
      lastSeenLocation: "Central Park, New York",
      description:
        "Max is a friendly Golden Retriever who loves to play fetch. He was last seen near the lake in Central Park. He's wearing a blue collar with tags and is microchipped.",
      microchipped: true,
      microchipNumber: "123456789",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      owner: {
        name: "John Smith",
        email: "john@example.com",
        phone: "+1 555-123-4567",
      },
      location: {
        lat: 40.7812,
        lng: -73.9665,
      },
      dateReported: "2023-03-21",
      reward: "$500",
      tags: ["friendly", "microchipped", "collar"],
    },
    {
      id: "2",
      status: "found",
      type: "cat",
      breed: "Tabby",
      age: "Unknown",
      gender: "Female",
      color: "tabby",
      foundDate: "2023-03-22",
      foundLocation: "Brooklyn Heights, New York",
      currentLocation: "Brooklyn Animal Shelter",
      description:
        "Found this friendly tabby cat wandering around Brooklyn Heights. She's very affectionate and appears to be well-cared for. No collar but seems to be an indoor cat.",
      hasCollar: false,
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      finder: {
        name: "Emily Johnson",
        email: "emily@example.com",
        phone: "+1 555-987-6543",
      },
      location: {
        lat: 40.6958,
        lng: -73.9936,
      },
      dateReported: "2023-03-22",
      tags: ["friendly", "well-groomed", "no collar"],
    },
    {
      id: "3",
      name: "Bella",
      status: "adoption",
      type: "dog",
      breed: "Labrador Mix",
      age: "2 years",
      gender: "Female",
      color: "black",
      description:
        "Bella is a sweet and energetic Labrador mix looking for her forever home. She's great with kids and other dogs, and loves to play outdoors. She's spayed, microchipped, and up-to-date on all vaccinations.",
      microchipped: true,
      neutered: true,
      vaccinated: true,
      goodWith: ["children", "dogs"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      shelter: {
        name: "Happy Tails Rescue",
        email: "info@happytails.org",
        phone: "+1 555-789-0123",
        address: "456 Rescue Lane, New York, NY",
      },
      location: {
        lat: 40.7282,
        lng: -73.7949,
      },
      dateAvailable: "2023-02-15",
      adoptionFee: "$250",
      tags: ["friendly", "energetic", "trained", "good with kids"],
    },
  ]

  const pet = pets.find((p) => p.id === id)
  return pet
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pet = getPet(params.id)

  if (!pet) {
    return {
      title: "Pet Not Found | PetConnect",
      description: "The pet you're looking for could not be found.",
    }
  }

  const statusMap = {
    lost: "Lost",
    found: "Found",
    adoption: "Available for Adoption",
  }

  const title = pet.name
    ? `${pet.name} - ${statusMap[pet.status as keyof typeof statusMap]} ${pet.type} | PetConnect`
    : `${statusMap[pet.status as keyof typeof statusMap]} ${pet.type} | PetConnect`

  return {
    title,
    description: pet.description?.substring(0, 160) || `Details about this ${pet.status} ${pet.type}.`,
  }
}

export default function PetDetailsPage({ params }: Props) {
  const pet = getPet(params.id)

  if (!pet) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <PetDetails pet={pet} />
      </div>
      <Footer />
    </main>
  )
}

