import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { orgcompassConfig } from "@/config/case-studies/orgcompass"

export const metadata: Metadata = {
  title: orgcompassConfig.metadata.title,
  description: orgcompassConfig.metadata.description,
}

export default function OrgCompassCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={orgcompassConfig.hero} metrics={orgcompassConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${orgcompassConfig.layout.maxWidth} w-full mx-auto`}>
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
                  {orgcompassConfig.cardInfo && (
                    <div className="mb-10 md:mb-12">
                      <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                        <span>{orgcompassConfig.hero.company}</span>
                        <span aria-hidden="true">•</span>
                        <span>{orgcompassConfig.hero.year}</span>
                      </div>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                        {orgcompassConfig.cardInfo.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                        {orgcompassConfig.cardInfo.subtitle}
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {orgcompassConfig.cardInfo.description}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-border my-8 md:my-10"></div>

                  <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    I designed an enterprise organizational intelligence platform that transforms raw HR
                    data into strategic insights for executive decision-making, serving a global consultancy
                    with 400+ employees across 25+ countries.
                  </p>

                  <div className="border-t border-border my-6 md:my-8"></div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Timeline
                      </h3>
                      <p className="text-base md:text-lg">4 Months</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Client
                      </h3>
                      <p className="text-base md:text-lg">Modus Create</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Role
                      </h3>
                      <p className="text-base md:text-lg">Senior UX Consultant & Design Strategist</p>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Team
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Otobong Okoko (Senior UX Consultant & Design Strategist)</li>
                      <li>Product Strategy Consultant</li>
                      <li>HR Technology Specialist</li>
                      <li>Senior Developer</li>
                      <li>Data Architect</li>
                    </ul>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Scope
                    </h3>
                    <p className="text-muted-foreground">
                      400+ employees across 25+ countries
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
                      Transform HR data into actionable intelligence for executive decision-making across global consultancy.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <Card className="relative transition-shadow hover:shadow-md border-0 overflow-hidden rounded-[0.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 rounded-[0.5rem] opacity-70" />
                      <div className="relative bg-background rounded-[calc(0.5rem-1px)] m-[1px]">
                        <CardContent className="p-4 md:p-5">
                          <div className="mb-4">
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 max-w-xs leading-tight">
                            Accelerate Strategic Decision-Making
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Reduce time-to-decision for hiring and team composition from days to hours by
                            providing executives with comprehensive organizational visibility and predictive
                            intelligence.
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
                            Improve Team Composition Effectiveness
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Enable data-driven team building by revealing skills distribution, collaboration
                            patterns, and success factors across 400+ employees in 25+ countries.
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
                            Build Sustainable Talent Strategy
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Create predictive capabilities for retention risk, skill gap identification, and
                            career pathway planning that support long-term organizational development.
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
                        Designing Intelligence, Not Just Analytics
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        My research with C-suite executives revealed a critical insight: they were drowning
                        in HR data but starving for actionable intelligence. The solution wasn't more reports—it
                        was transforming data into strategic narratives that enabled confident decision-making.
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        <strong className="text-foreground">Three core design principles emerged:</strong>
                      </p>
                      <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                        <li>
                          <strong className="text-foreground">Executive-Grade Experience:</strong> C-suite users
                          expect polish, reliability, and instant insight discovery. The interface needed to
                          match the sophistication of financial dashboards while making people analytics accessible.
                        </li>
                        <li>
                          <strong className="text-foreground">Predictive Over Descriptive:</strong> Historical
                          reporting was table stakes. Executives needed forward-looking intelligence about
                          retention risk, skill gaps, and team composition success factors.
                        </li>
                        <li>
                          <strong className="text-foreground">Privacy-Centered Design:</strong> Global workforce
                          spanning 25+ countries required cultural adaptation of privacy expectations. The system
                          needed to provide strategic insight while respecting individual privacy across different
                          regulatory environments.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        The "Seeing is Believing" Strategy
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Given Modus Create's Level 1 design maturity, I implemented a tangible prototyping
                        approach. Rather than presenting abstract concepts, I created interactive prototypes
                        demonstrating real organizational insights using anonymized company data. This "show
                        don't tell" methodology built stakeholder confidence and secured executive buy-in.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Cultural Intelligence Integration
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Research across 25 countries revealed that privacy expectations varied dramatically.
                        German employees required strict data anonymization, while US employees were more
                        comfortable with transparent performance visibility. I designed a configurable privacy
                        layer allowing regional adaptation while maintaining strategic insight quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Collaborative Decision-Making
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Rather than automating decisions, I designed interfaces that augmented human judgment.
                        The system provides AI-powered recommendations for team composition and hiring priorities,
                        but always presents multiple options with clear rationale, enabling executives to apply
                        contextual knowledge the algorithm couldn't access.
                      </p>
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
                    {/* Quantitative Outcomes */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Executive Decision-Making</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Strategic decision and team effectiveness improvements</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            45%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Reduction in strategic decision time—executives make hiring and team composition decisions in hours rather than days
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            32%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Improvement in team effectiveness through optimized team composition leading to measurably better project outcomes
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            94%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            C-Suite adoption with active engagement from executives within first quarter of deployment
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            28%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in employee retention through predictive intervention preventing talent loss
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

                    {/* Qualitative Impact */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Leadership Testimonials</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Qualitative feedback from executive stakeholders</p>
                      <div className="space-y-6">
                        <QuoteBlock
                          quote="OrgCompass transformed how we think about organizational development. What used to take spreadsheets, meetings, and guesswork now happens in minutes with confidence."
                          author="CEO, Modus Create"
                        />
                        <QuoteBlock
                          quote="For the first time, I can see patterns in our organization that were invisible before. The system doesn't just show me data—it tells me what matters and why."
                          author="Chief People Officer, Modus Create"
                        />
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
                        Designing for executives requires different patterns than designing for end users.
                        C-suite stakeholders need strategic overview with drill-down capability, visual
                        storytelling over raw data, and action-oriented insights rather than exploratory
                        analytics. The interface needed to respect their time while providing comprehensive
                        intelligence.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Invest more time in change management strategy upfront. While the platform achieved
                        strong adoption, some regional HR teams initially resisted data-driven decision-making,
                        preferring traditional intuition-based approaches. Earlier engagement with regional
                        stakeholders and more comprehensive training programs would have accelerated
                        organization-wide adoption.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">Design Innovation Highlights</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Created a three-layer intelligence architecture serving organizational overview, team
                        intelligence, and individual development needs. Implemented privacy-by-design framework
                        with role-based access control and cultural adaptation. Developed executive-grade visual
                        design with narrative structure, progressive disclosure, and action-oriented insights.
                        Built predictive intelligence features including team composition tools, skills heat
                        mapping, retention risk assessment, and collaboration network analysis.
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
        prev={orgcompassConfig.navigation?.prev}
        next={orgcompassConfig.navigation?.next}
        showBackHome={true}
      />
    </div>
  )
}
