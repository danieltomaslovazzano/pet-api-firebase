import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LucidePawPrint } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <LucidePawPrint className="h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">404 - Pet Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn't find the pet you're looking for. It may have been reunited with its owner or the page may no
        longer exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/map">View Pet Map</Link>
        </Button>
      </div>
    </div>
  )
}

