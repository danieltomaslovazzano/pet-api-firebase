import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdoptionListing from "@/components/adoption-listing"

export const metadata: Metadata = {
  title: "Adopt a Pet | PetConnect",
  description: "Browse pets available for adoption from shelters and individuals",
}

export default function AdoptPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Find Your Perfect Companion</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse pets available for adoption from shelters and individuals in your area. Each pet is looking for a
            loving forever home.
          </p>
        </div>
        <AdoptionListing />
      </div>
      <Footer />
    </main>
  )
}

