import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reunite Lost Pets with Their Families
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                PetConnect uses AI-powered image recognition to match lost pets with found reports and helps facilitate
                pet adoptions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="px-8">
                <Link href="/lost">Report Lost Pet</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/found">Report Found Pet</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Happy dog reunited with owner"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

