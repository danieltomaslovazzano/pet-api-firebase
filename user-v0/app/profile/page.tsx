import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProfileForm from "@/components/profile-form"

export const metadata: Metadata = {
  title: "Your Profile | PetConnect",
  description: "Manage your PetConnect profile and settings",
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Your Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and preferences</p>
          </div>
          <ProfileForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

