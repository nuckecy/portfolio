import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { ubaHcmConnectConfig } from "@/config/case-studies/uba-hcm-connect"

export const metadata: Metadata = {
  title: ubaHcmConnectConfig.metadata.title,
  description: ubaHcmConnectConfig.metadata.description,
}

export default function UBAHCMConnectCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={ubaHcmConnectConfig.hero} metrics={ubaHcmConnectConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${ubaHcmConnectConfig.layout.maxWidth} w-full mx-auto`}>
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
                  {ubaHcmConnectConfig.cardInfo && (
                    <div className="mb-10 md:mb-12">
                      <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                        <span>{ubaHcmConnectConfig.hero.company}</span>
                        <span aria-hidden="true">•</span>
                        <span>{ubaHcmConnectConfig.hero.year}</span>
                      </div>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                        {ubaHcmConnectConfig.cardInfo.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                        {ubaHcmConnectConfig.cardInfo.subtitle}
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {ubaHcmConnectConfig.cardInfo.description}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-border my-8 md:my-10"></div>

                  <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Led the complete design transformation of UBA's HR operations through a comprehensive
                    12-module enterprise platform, replacing expensive third-party solutions while serving
                    20,000+ employees across 20 African countries and international hubs in London, Paris,
                    and New York. Working with a 23-person cross-functional squad in a low UX maturity
                    environment, I implemented a "seeing is believing" strategy using tangible prototypes
                    to build stakeholder confidence while conducting comprehensive user research across
                    diverse cultural contexts.
                  </p>

                  <div className="border-t border-border my-6 md:my-8"></div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Timeline
                      </h3>
                      <p className="text-base md:text-lg">14 Months</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Market
                      </h3>
                      <p className="text-base md:text-lg">20 African countries + London, Paris, New York</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Role
                      </h3>
                      <p className="text-base md:text-lg">Senior Product Designer & Design Lead</p>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Team
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Otobong Okoko (Senior Product Designer & Design Lead)</li>
                      <li>23-person cross-functional squad:</li>
                      <li className="ml-4">6 Frontend Engineers</li>
                      <li className="ml-4">11 Backend Engineers</li>
                      <li className="ml-4">3 Designers</li>
                      <li className="ml-4">1 Data Analyst</li>
                      <li className="ml-4">1 QA Specialist</li>
                      <li className="ml-4">1 Project Manager</li>
                    </ul>
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
                      Transform UBA's HR operations through comprehensive digital platform serving 20,000+ employees across multiple continents.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem] h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px] h-full">
                        <CardContent className="p-4 md:p-5 h-full flex flex-col">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Reduce Operational Costs
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Eliminate $80,000 monthly license fees from third-party HR solutions while
                            reducing manual HR processes by 80%+ to support UBA's ambitious 35% annual
                            technology cost reduction goal.
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
                            Achieve Organization-Wide Adoption
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Reach 90%+ employee adoption within 6 months across 20,000+ employees in 20+
                            countries with varying levels of digital literacy and technical infrastructure.
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
                            Maintain Cultural Sensitivity
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Create a flexible system architecture that accommodates regional variations in
                            HR practices, compliance requirements, and cultural norms across 20+ countries.
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
                            Establish Design Foundation
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Transform UBA from Level 1 to Level 3 design maturity by establishing the bank's
                            first comprehensive design system and user-centered design processes.
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
                        "Seeing is Believing" Strategy
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        Given the low UX maturity (Level 1) of the organization, I implemented a strategic
                        approach using tangible prototypes to build stakeholder confidence while conducting
                        comprehensive user research.
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        <strong className="text-foreground">Research Methods:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground ml-4">
                        <li><strong className="text-foreground">23 stakeholder interviews</strong> across C-suite, HR managers, and regional leads</li>
                        <li><strong className="text-foreground">47 employee contextual inquiries</strong> across Nigeria, Kenya, and UK offices</li>
                        <li><strong className="text-foreground">12 process mapping workshops</strong> documenting current-state HR workflows</li>
                        <li><strong className="text-foreground">Cultural sensitivity research</strong> understanding work practices across 20 countries</li>
                        <li><strong className="text-foreground">Competitive analysis</strong> benchmarking against Workday, BambooHR, and regional solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Strategic Design Principles
                      </h3>
                      <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                        <li>
                          <strong className="text-foreground">Cultural Adaptability:</strong> Flexible components
                          accommodating regional variations in HR practices and compliance requirements
                        </li>
                        <li>
                          <strong className="text-foreground">Progressive Disclosure:</strong> Layered complexity
                          based on user sophistication, supporting varying technical literacy levels
                        </li>
                        <li>
                          <strong className="text-foreground">Mobile-First Design:</strong> Primary experience
                          optimized for mobile devices (67% of employees primarily accessed systems via mobile)
                        </li>
                        <li>
                          <strong className="text-foreground">Inclusive Accessibility:</strong> Design for varying
                          technical literacy and infrastructure capabilities
                        </li>
                        <li>
                          <strong className="text-foreground">Modular Architecture:</strong> Scalable system
                          supporting future expansion across 12 distinct modules
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        12-Module System Architecture
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        Created an integrated platform replacing fragmented tools:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">1. Core Human Resource:</strong>
                          <p className="text-muted-foreground mt-1">Employee profiles, organizational charts</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">2. Organization Structure:</strong>
                          <p className="text-muted-foreground mt-1">Department management, hierarchy visualization</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">3. ManPower & Recruitment:</strong>
                          <p className="text-muted-foreground mt-1">Job posting, candidate tracking, interview scheduling</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">4. Talent Center:</strong>
                          <p className="text-muted-foreground mt-1">Skills assessment, career development pathways</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">5. Benefit Management:</strong>
                          <p className="text-muted-foreground mt-1">Insurance, compensation, employee perks</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">6. Leave Management:</strong>
                          <p className="text-muted-foreground mt-1">PTO requests, approval workflows, calendar integration</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">7. Promotion Management:</strong>
                          <p className="text-muted-foreground mt-1">Performance reviews, career advancement tracking</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">8. Potential Assessment:</strong>
                          <p className="text-muted-foreground mt-1">Skills evaluation, development planning</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">9. Confirmation Management:</strong>
                          <p className="text-muted-foreground mt-1">Probation tracking, performance milestones</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">10. HR Helpdesk:</strong>
                          <p className="text-muted-foreground mt-1">Internal support tickets, knowledge base</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">11. Sanctions & Rewards:</strong>
                          <p className="text-muted-foreground mt-1">Performance management, recognition programs</p>
                        </div>
                        <div className="p-3 border border-border rounded-lg">
                          <strong className="text-foreground">12. Exit Management:</strong>
                          <p className="text-muted-foreground mt-1">Offboarding workflows, knowledge transfer</p>
                        </div>
                      </div>
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
                    {/* Quantitative Impact */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Financial Impact</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Direct cost savings and operational improvements</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            $960,000
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Annual savings from license elimination and operational efficiency gains
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            18%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Annual profit increase through operational cost reduction and process automation
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            91%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Process automation eliminating manual handling for vast majority of HR operations
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

                    {/* User Experience Metrics */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">User Experience Metrics</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Employee adoption and satisfaction improvements</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            94%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Employee adoption within 6 months across 20,000+ employees
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            89%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            User satisfaction in post-launch surveys
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            73%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Reduction in HR helpdesk tickets through improved self-service capabilities
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                            67%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Faster HR processes with average task completion time reduction across all modules
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
                        Cultural design importance cannot be overstated. Local context was crucial for
                        enterprise design success in a global organization. What works in London doesn't
                        necessarily work in Lagos or Nairobi. Building flexibility into the design system
                        from the beginning allowed us to scale while respecting regional differences.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Start with smaller, focused modules rather than tackling all 12 simultaneously.
                        While we succeeded, a phased approach with 3-4 core modules first would have
                        allowed faster learning cycles and earlier value delivery, reducing risk in the
                        low-maturity environment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">Stakeholder Journey Design Insight</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        In enterprise contexts with low design maturity, designing for decision-makers is
                        as important as designing for end-users. The "seeing is believing" approach with
                        tangible prototypes was essential for building confidence and securing buy-in at
                        every stage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">Remote Collaboration Success</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Effective virtual design collaboration during COVID-19 proved that distributed teams
                        can match in-person outcomes with the right processes. Structured async feedback
                        workflows, regular virtual design sprints, and clear documentation were key enablers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">Long-Term Platform Impact</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        The HCM Connect design system and principles became the foundation for UBA's broader
                        digital transformation, influencing subsequent projects worth €50M+ in total investment
                        and establishing design as a strategic function within the organization.
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
        prev={ubaHcmConnectConfig.navigation?.prev}
        next={ubaHcmConnectConfig.navigation?.next}
        showBackHome={true}
      />
    </div>
  )
}
