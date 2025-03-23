export default function StatsSection() {
  const stats = [
    { value: "93%", label: "Success Rate" },
    { value: "24h", label: "Average Reunion Time" },
    { value: "10k+", label: "Pets Reunited" },
    { value: "5k+", label: "Adoptions Facilitated" },
  ]

  return (
    <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Making a Difference</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Our platform has helped thousands of pets find their way back home and connect with new loving families.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-sm md:text-base opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

