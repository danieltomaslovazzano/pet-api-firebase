import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AddPetForm from "@/components/add-pet-form"

export const metadata: Metadata = {
  title: "Add Your Pet | PetConnect",
  description: "Add your pet to your PetConnect profile",
}

export default function AddPetPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Add Your Pet</h1>
            <p className="text-muted-foreground">
              Add your pet to your profile to make it easier to report if they get lost
            </p>
          </div>
          <AddPetForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

