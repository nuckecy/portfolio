import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { ubaReddConfig } from "@/config/case-studies/uba-redd"

export const metadata: Metadata = {
  title: ubaReddConfig.metadata.title,
  description: ubaReddConfig.metadata.description,
}

const sections = ubaReddConfig.sections

export default function UBAREDDCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={ubaReddConfig.hero} metrics={ubaReddConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          {ubaReddConfig.layout.hasSidebar && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </aside>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${ubaReddConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Led the complete redesign of UBA's flagship mobile banking application serving 50M+ 
                customers across 20 African countries and 3 international markets. The existing solution 
                faced 67% customer dissatisfaction. By introducing revolutionary personalization features 
                including mood-based themes and cultural adaptation, combined with infrastructure-resilient 
                architecture for varying network conditions, I transformed REDD into Africa's most advanced 
                mobile banking platform, setting new standards for culturally-adaptive fintech design.
              </p>

              <Separator className="my-6 md:my-8" />

              {/* Project Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Timeline
                  </h3>
                  <p className="text-base md:text-lg">12 Months</p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Market
                  </h3>
                  <p className="text-base md:text-lg">{ubaReddConfig.project.market}: {ubaReddConfig.project.marketDetails}</p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Role
                  </h3>
                  <p className="text-base md:text-lg">{ubaReddConfig.project.role}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                  Team
                </h3>
                <p className="text-muted-foreground">{ubaReddConfig.project.teamDetails}</p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                  Additional Context
                </h3>
                <p className="text-muted-foreground">
                  4 languages | 50M+ customers
                </p>
              </div>
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Goals</h2>
              
              <div className="space-y-6 md:space-y-8">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Transform User Experience
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Increase user satisfaction from 33% to 80%+ and drive mobile banking adoption to 
                      89% across UBA's Pan-African operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Pioneer Personalization
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Introduce first-to-market theme intelligence system (Dark, Light, Red modes) 
                      reflecting user emotional and professional contexts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Ensure Cultural Adaptation
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Create unified yet culturally adaptive experience serving diverse African markets 
                      while maintaining brand consistency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Achieve Business Impact
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Drive 43% increase in digital transaction volume and €15M annual revenue increase 
                      through improved engagement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Approach Section */}
            <section id="approach" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Approach</h2>

              <div className="space-y-8 md:space-y-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Cultural Intelligence System
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Developed comprehensive personalization strategy respecting cultural diversity while 
                    creating unified brand experience:
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-base md:text-lg font-normal mb-3 text-foreground">Theme Intelligence System:</h4>
                    <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Mood-Based Themes:</strong> Dark, Light, and 
                        Red themes reflecting user emotional and professional contexts
                      </li>
                      <li>
                        <strong className="text-foreground">Cultural Color Adaptation:</strong> Theme colors 
                        adjusted for cultural significance across different markets
                      </li>
                      <li>
                        <strong className="text-foreground">Context-Aware Switching:</strong> Automatic theme 
                        suggestions based on time, location, and usage patterns
                      </li>
                      <li>
                        <strong className="text-foreground">Social Appropriateness:</strong> Theme recommendations 
                        considering professional vs. personal usage contexts
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-normal mb-3 text-foreground">Regional Adaptation:</h4>
                    <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Language-Aware Interface Design:</strong> Beyond 
                        translation—interface patterns adapted to language reading patterns
                      </li>
                      <li>
                        <strong className="text-foreground">Contextual Content Delivery:</strong> Financial 
                        education and features relevant to local economic contexts
                      </li>
                      <li>
                        <strong className="text-foreground">Cultural Privacy Modeling:</strong> Personalization 
                        boundaries respecting different cultural attitudes toward financial privacy
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Infrastructure-Resilient Architecture
                  </h3>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Adaptive Performance:</strong> App performance 
                      scaling based on network conditions and device capabilities
                    </li>
                    <li>
                      <strong className="text-foreground">Offline-First Features:</strong> Core banking 
                      functions available without continuous connectivity
                    </li>
                    <li>
                      <strong className="text-foreground">Progressive Enhancement:</strong> Advanced features 
                      loading when network and device conditions permit
                    </li>
                    <li>
                      <strong className="text-foreground">Data-Conscious Design:</strong> Minimized data usage 
                      while maintaining rich user experience
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Pan-African Research Strategy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Conducted comprehensive research across UBA's operational footprint:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground ml-4">
                    <li><strong className="text-foreground">234 user interviews</strong> across 12 African countries and 3 international markets</li>
                    <li><strong className="text-foreground">Cultural banking behavior analysis</strong> identifying regional financial management patterns</li>
                    <li><strong className="text-foreground">Technology adoption research</strong> understanding device capabilities and connectivity constraints</li>
                    <li><strong className="text-foreground">Aspirational design workshops</strong> exploring how customers wanted to feel while banking</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section id="results" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* User Experience Transformation */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">User Experience Transformation</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="89%"
                      label="Increase in user satisfaction across all 20 markets"
                    />
                    <MetricCard
                      value="156%"
                      label="Increase in app engagement (daily active user sessions and time spent)"
                    />
                    <MetricCard
                      value="78%"
                      label="Reduction in support tickets through improved self-service"
                    />
                    <MetricCard
                      value="67%"
                      label="Faster transaction completion through streamlined user flows"
                    />
                  </div>
                </div>

                {/* Business Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Business Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="€15M"
                      label="Annual revenue increase directly attributed to improved mobile banking engagement"
                    />
                    <MetricCard
                      value="43%"
                      label="Increase in digital transaction volume"
                    />
                    <MetricCard
                      value="89%"
                      label="Mobile banking adoption achieving mobile-first banking across African operations"
                    />
                    <MetricCard
                      value="29%"
                      label="Reduction in operational costs through decreased branch dependency"
                    />
                  </div>
                </div>

                {/* Innovation Recognition */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Innovation Recognition</h3>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Industry benchmark:</strong> REDD became reference 
                      standard for culturally-adaptive fintech design across Africa
                    </li>
                    <li>
                      <strong className="text-foreground">Regional awards:</strong> Recognition from African 
                      banking associations for digital innovation excellence
                    </li>
                    <li>
                      <strong className="text-foreground">Academic interest:</strong> Case study adoption by 
                      design schools studying cross-cultural digital product design
                    </li>
                    <li>
                      <strong className="text-foreground">Competitive response:</strong> Other African banks 
                      adopting similar personalization strategies
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Reflection</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">The Biggest Learning</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Personalization and cultural adaptation are not just features—they're fundamental 
                    differentiators in diverse markets. What succeeded wasn't just technical excellence 
                    but deep respect for cultural contexts and user identity expression through design.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Invest more in voice banking capabilities from the start. With 20+ countries and 
                    multiple languages, voice interfaces could have provided even more accessible 
                    experiences for users with limited literacy or visual impairments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Cultural Design Breakthrough</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The theme system's success validated that African users view app appearance as 
                    personal identity extension, not just preference. This insight influenced how we 
                    approach all personalization features—focusing on empowerment and self-expression 
                    rather than just customization.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Vendor Relationship Management</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transforming a Level 1 design maturity vendor through education and collaboration 
                    proved that design leadership extends beyond internal teams. The "seeing is believing" 
                    approach with stakeholders worked equally well with external partners.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Long-Term Platform Foundation</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The design system and cultural adaptation frameworks became foundational for UBA's 
                    digital transformation, influencing projects worth €50M+ and establishing UBA as a 
                    design-forward institution in African financial services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Cross-Industry Influence</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The project's cultural intelligence approaches are now referenced by other African 
                    fintech companies, extending impact beyond UBA and influencing how the global fintech 
                    industry approaches emerging market design.
                  </p>
                </div>
              </div>
            </section>

            {/* Navigation Footer */}
            <Separator className="my-8 md:my-12" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm py-6 md:py-8">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Previous Case Study</span>
              </a>
              <a
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Back to Home
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Next Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
