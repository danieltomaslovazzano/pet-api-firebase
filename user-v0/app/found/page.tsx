import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FoundPetForm from "@/components/found-pet-form"

export const metadata: Metadata = {
  title: "Report a Found Pet | PetConnect",
  description: "Report a pet you've found and help reunite them with their owner",
}

export default function FoundPetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Report a Found Pet</h1>
            <p className="text-muted-foreground">
              Thank you for helping a lost pet! Fill out the form below with as much detail as possible. Our AI
              technology will scan and match the pet with lost reports in the area.
            </p>
          </div>
          <FoundPetForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

