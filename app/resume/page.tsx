import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and work experience.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Resume
          </h1>
        </div>
      </section>
    </div>
  )
}
