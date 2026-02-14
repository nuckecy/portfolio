import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { ubaReddConfig } from "@/config/case-studies/uba-redd"

export const metadata: Metadata = {
  title: ubaReddConfig.metadata.title,
  description: ubaReddConfig.metadata.description,
}

export default function UBAREDDCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={ubaReddConfig.hero} metrics={ubaReddConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${ubaReddConfig.layout.maxWidth} w-full mx-auto`}>
            {/* Project Summary Section */}
            <section id="overview" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-muted/30 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Overview
                    </span>
                  </div>

                  {/* Card Info */}
                  {ubaReddConfig.cardInfo && (
                    <div className="mb-10 md:mb-12">
                      <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                        <span>{ubaReddConfig.hero.company}</span>
                        <span aria-hidden="true">•</span>
                        <span>{ubaReddConfig.hero.year}</span>
                      </div>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                        {ubaReddConfig.cardInfo.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                        {ubaReddConfig.cardInfo.subtitle}
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {ubaReddConfig.cardInfo.description}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-border my-8 md:my-10"></div>

                  <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Led the complete redesign of UBA's flagship mobile banking application serving 50M+
                    customers across 20 African countries and 3 international markets. The existing solution
                    faced 67% customer dissatisfaction. By introducing revolutionary personalization features
                    including mood-based themes and cultural adaptation, combined with infrastructure-resilient
                    architecture for varying network conditions, I transformed REDD into Africa's most advanced
                    mobile banking platform, setting new standards for culturally-adaptive fintech design.
                  </p>

                  <div className="border-t border-border my-6 md:my-8"></div>

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
                </div>
              </div>
            </section>

            {/* Goals Section */}
            <section id="goals" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-background py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded mb-6">
                      Goals
                    </span>
                    <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Strategic Objectives</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Transform mobile banking experience across 20 African markets through personalization and cultural adaptation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px]">
                        <CardContent className="p-4 md:p-5">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Transform User Experience
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Increase user satisfaction from 33% to 80%+ and drive mobile banking adoption to
                            89% across UBA's Pan-African operations.
                          </p>
                        </CardContent>
                      </div>
                    </Card>

                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-400 to-pink-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px]">
                        <CardContent className="p-4 md:p-5">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Pioneer Personalization
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Introduce first-to-market theme intelligence system (Dark, Light, Red modes)
                            reflecting user emotional and professional contexts.
                          </p>
                        </CardContent>
                      </div>
                    </Card>

                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-400 to-orange-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px]">
                        <CardContent className="p-4 md:p-5">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Ensure Cultural Adaptation
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Create unified yet culturally adaptive experience serving diverse African markets
                            while maintaining brand consistency.
                          </p>
                        </CardContent>
                      </div>
                    </Card>

                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px]">
                        <CardContent className="p-4 md:p-5">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Achieve Business Impact
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Drive 43% increase in digital transaction volume and €15M annual revenue increase
                            through improved engagement.
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Approach Section */}
            <section id="approach" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-muted/30 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Approach
                    </span>
                  </div>

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
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section id="results" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f0f4f9] dark:bg-slate-900 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Impact and Results
                    </span>
                  </div>

                  <div className="space-y-8 md:space-y-12">
                    {/* User Experience Transformation */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">User Experience Transformation</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Customer satisfaction and engagement improvements</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            89%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in user satisfaction across all 20 markets
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            156%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in app engagement (daily active user sessions and time spent)
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            78%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Reduction in support tickets through improved self-service
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            67%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Faster transaction completion through streamlined user flows
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Wavy Line Separator */}
                    <div className="flex justify-center my-6 md:my-8">
                      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                        <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Business Impact</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Revenue growth and operational efficiency gains</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            €15M
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Annual revenue increase directly attributed to improved mobile banking engagement
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            43%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in digital transaction volume
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            89%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Mobile banking adoption achieving mobile-first banking across African operations
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            29%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Reduction in operational costs through decreased branch dependency
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-background py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Reflection
                    </span>
                  </div>

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
                </div>
              </div>
            </section>

        </main>
      </div>

      {/* Navigation Footer - Outside container for full width */}
      <CaseStudyNavigation
        prev={ubaReddConfig.navigation?.prev}
        next={ubaReddConfig.navigation?.next}
        showBackHome={true}
      />
    </div>
  )
}
