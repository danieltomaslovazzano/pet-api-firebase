import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Sign In | PetConnect",
  description: "Sign in to your PetConnect account",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto py-10 px-4 md:px-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border-none shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in to PetConnect</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <LoginForm />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                <span>Don't have an account? </span>
                <Link href="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
              <div className="text-center text-sm">
                <Link href="/forgot-password" className="text-muted-foreground hover:text-foreground">
                  Forgot your password?
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

