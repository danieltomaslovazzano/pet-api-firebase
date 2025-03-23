import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LostPetForm from "@/components/lost-pet-form"

export const metadata: Metadata = {
  title: "Report a Lost Pet | PetConnect",
  description: "Report your lost pet and let our AI technology help you find them",
}

export default function LostPetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Report a Lost Pet</h1>
            <p className="text-muted-foreground">
              Fill out the form below with as much detail as possible to help us find your pet. Our AI technology will
              scan and match your pet with found reports in the area.
            </p>
          </div>
          <LostPetForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

