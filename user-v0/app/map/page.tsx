import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PetMap from "@/components/pet-map"

export const metadata: Metadata = {
  title: "Interactive Pet Map | PetConnect",
  description: "View lost and found pets in your area on our interactive map",
}

export default function MapPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Interactive Pet Map</h1>
            <p className="text-muted-foreground">
              View lost and found pets in your area. Use the filters to narrow down your search.
            </p>
          </div>
        </div>
        <PetMap />
      </div>
      <Footer />
    </main>
  )
}

