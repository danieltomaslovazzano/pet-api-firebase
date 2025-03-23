import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RegisterForm from "@/components/register-form"

export const metadata: Metadata = {
  title: "Sign Up | PetConnect",
  description: "Create a new PetConnect account",
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border-none shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Enter your information to create a PetConnect account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RegisterForm />
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-muted-foreground">
                <span>Already have an account? </span>
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}

