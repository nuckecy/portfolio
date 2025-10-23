import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "Contextual Self-Help Platform",
    subtitle: "Transforming Customer Support Through Predictive Design",
    description: "A proactive platform that anticipates customer needs before they contact support.",
    metrics: ["33% reduction in inquiries", "€3.2M annual savings", "28% satisfaction improvement"],
    href: "/case-study/zalando-contextual",
    company: "Zalando",
    year: "2025",
  },
  {
    title: "Zalando Chatbot Redesign",
    subtitle: "From Frustration to Flow: Rebuilding Trust in Conversational AI",
    description: "A guided chatbot experience that increased automation by 66% and saved over €1.34M annually.",
    metrics: ["226% automation increase", "18% reduction in repeat contacts", "€1.34M+ savings"],
    href: "/case-study/zalando-chatbot",
    company: "Zalando",
    year: "2024",
  },
  {
    title: "UBA HCM Connect",
    subtitle: "Transforming HR Operations for 20,000+ Employees Across Africa",
    description: "A comprehensive 12-module enterprise platform that revolutionized HR processes.",
    metrics: ["$960K annual savings", "91% process automation", "94% employee adoption"],
    href: "/case-study/uba-hcm-connect",
    company: "UBA",
    year: "2021",
  },
  {
    title: "Cashamm E-Commerce",
    subtitle: "Empowering Economic Justice Through Design",
    description: "Community-centered commerce platform empowering Black-owned businesses to thrive online.",
    metrics: ["347 businesses onboarded", "$1.2M transactions", "87% satisfaction"],
    href: "/case-study/cashamm",
    company: "Cashamm",
    year: "2021",
  },
  {
    title: "UBA REDD Banking App",
    subtitle: "Pioneering Pan-African Digital Banking Transformation",
    description: "Revolutionary personalization features that transformed mobile banking across Africa.",
    metrics: ["€15M revenue increase", "89% satisfaction increase", "156% engagement boost"],
    href: "/case-study/uba-redd",
    company: "UBA",
    year: "2020",
  },
  {
    title: "OrgCompass HR Intelligence",
    subtitle: "From Data Overload to Strategic Intelligence",
    description: "Enterprise platform turning HR data into actionable intelligence for C-suite executives.",
    metrics: ["45% faster decisions", "32% team effectiveness", "94% C-suite adoption"],
    href: "/case-study/orgcompass",
    company: "Modus Create",
    year: "2020",
  },
  {
    title: "Fraud Analytics Platform",
    subtitle: "AI-Powered Financial Crime Prevention Through Design",
    description: "AI-powered fraud detection that reduced successful fraud attempts by 78% and saved €2.3M annually.",
    metrics: ["78% fraud reduction", "€2.3M annual savings", "92% customer satisfaction"],
    href: "/case-study/fraud-analytics",
    company: "Sterling Bank",
    year: "2019",
  },
  {
    title: "Specta Digital Lending",
    subtitle: "From Weeks to Minutes: Nigeria's Digital Lending Revolution",
    description: "Nigeria's first instant digital lending platform transforming exploitative lending into transparent access.",
    metrics: ["$263M disbursements", "200% profit growth", "5-minute processing"],
    href: "/case-study/specta",
    company: "Sterling Bank",
    year: "2016",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Product Designer Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Crafting user-centered experiences that drive business impact across fintech, 
            e-commerce, and enterprise platforms.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-normal mb-8 md:mb-12">Featured Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <Link key={study.href} href={study.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-foreground/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {study.company}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {study.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-normal group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {study.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      {study.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      <span>View Case Study</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
