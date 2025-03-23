import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { LucideMail, LucideMapPin, LucidePhone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | PetConnect",
  description: "Get in touch with the PetConnect team",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below or use our contact
              information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <LucideMail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">support@petconnect.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LucidePhone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LucideMapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 Pet Street, Anytown, USA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Hours of Operation</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

