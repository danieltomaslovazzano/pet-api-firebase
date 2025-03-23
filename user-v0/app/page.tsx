import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideCompass, LucideHeart, LucideSearch } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <section className="py-16 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How PetConnect Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to report lost pets, find pets in your area, and connect with pet owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-md">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <LucideSearch className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Report a Lost Pet</CardTitle>
              <CardDescription>Create a detailed report with photos and last seen location</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>Our AI technology will scan and match your pet with found reports in the area.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/lost">Report Lost Pet</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <LucideHeart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Found a Pet?</CardTitle>
              <CardDescription>Help reunite a pet with their owner by reporting it</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>Upload photos and location details to help match with lost pet reports.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/found">Report Found Pet</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <LucideCompass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Adopt a Pet</CardTitle>
              <CardDescription>Find your perfect companion from our adoption listings</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>Browse pets from shelters and individuals looking for loving homes.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/adopt">Browse Adoptions</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <StatsSection />
      <Footer />
    </main>
  )
}

