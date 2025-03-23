import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LucidePawPrint, LucideMail, LucidePhone, LucideMapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <LucidePawPrint className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PetConnect</span>
            </div>
            <p className="text-muted-foreground">
              Reuniting lost pets with their families and helping pets find forever homes.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lost" className="text-muted-foreground hover:text-foreground transition-colors">
                  Report Lost Pet
                </Link>
              </li>
              <li>
                <Link href="/found" className="text-muted-foreground hover:text-foreground transition-colors">
                  Report Found Pet
                </Link>
              </li>
              <li>
                <Link href="/adopt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Adopt a Pet
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <LucideMail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@petconnect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <LucidePhone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <LucideMapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">123 Pet Street, Anytown, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on lost pets in your area.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} PetConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

