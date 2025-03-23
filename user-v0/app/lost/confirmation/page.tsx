import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideCheck, LucideBell, LucideMap, LucideShare2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Report Submitted | PetConnect",
  description: "Your lost pet report has been submitted successfully",
}

export default function LostPetConfirmationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <LucideCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Report Submitted Successfully</CardTitle>
              <CardDescription className="text-base">
                Your lost pet report has been received and is being processed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">What happens next?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <LucideBell className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      You'll receive notifications when there are potential matches with found pets in your area
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <LucideMap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Your pet will appear on our interactive map for community members to see</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <LucideShare2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Share your pet's information on social media to increase visibility</span>
                  </li>
                </ul>
              </div>

              <div className="text-center space-y-4">
                <h3 className="font-medium">Increase your chances of finding your pet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    Share on Social Media
                  </Button>
                  <Button variant="outline" className="w-full">
                    Print Flyers
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-0">
              <Button asChild variant="default" className="w-full">
                <Link href="/map">View Pet Map</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}

