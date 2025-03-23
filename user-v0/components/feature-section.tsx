import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideImage, LucideMapPin, LucideBell, LucideMessageSquare, LucideUsers, LucideShield } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <LucideImage className="h-10 w-10 text-primary" />,
      title: "AI Image Recognition",
      description:
        "Our advanced AI technology matches photos of lost pets with found reports to increase reunion chances.",
    },
    {
      icon: <LucideMapPin className="h-10 w-10 text-primary" />,
      title: "Interactive Map",
      description: "View lost and found pets in your area with our interactive map interface.",
    },
    {
      icon: <LucideBell className="h-10 w-10 text-primary" />,
      title: "Real-time Alerts",
      description: "Receive instant notifications when there's a potential match for your lost pet.",
    },
    {
      icon: <LucideMessageSquare className="h-10 w-10 text-primary" />,
      title: "Secure Messaging",
      description: "Communicate safely with other users through our built-in messaging system.",
    },
    {
      icon: <LucideUsers className="h-10 w-10 text-primary" />,
      title: "Community Support",
      description: "Connect with volunteers who can help verify sightings and assist in pet recovery.",
    },
    {
      icon: <LucideShield className="h-10 w-10 text-primary" />,
      title: "Verified Profiles",
      description: "Trust our verification system for pet owners, shelters, and rescue organizations.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful Features to Help Pets Find Their Way Home</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            PetConnect combines cutting-edge technology with community engagement to create the most effective pet
            recovery platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

