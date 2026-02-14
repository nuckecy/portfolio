import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { spectaConfig } from "@/config/case-studies/specta"

export const metadata: Metadata = {
  title: spectaConfig.metadata.title,
  description: spectaConfig.metadata.description,
}

export default function SpectaCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={spectaConfig.hero} metrics={spectaConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${spectaConfig.layout.maxWidth} w-full mx-auto`}>
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
                  {spectaConfig.cardInfo && (
                    <div className="mb-10 md:mb-12">
                      <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                        <span>{spectaConfig.hero.company}</span>
                        <span aria-hidden="true">•</span>
                        <span>{spectaConfig.hero.year}</span>
                      </div>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                        {spectaConfig.cardInfo.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                        {spectaConfig.cardInfo.subtitle}
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {spectaConfig.cardInfo.description}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-border my-8 md:my-10"></div>

                  <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    I designed and developed Nigeria's first instant digital lending platform, transforming
                    a weeks-long bureaucratic process into a 5-minute automated experience while eliminating
                    the predatory practices that plagued traditional lending.
                  </p>

                  <div className="border-t border-border my-6 md:my-8"></div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Timeline
                      </h3>
                      <p className="text-base md:text-lg">6 Months</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Market
                      </h3>
                      <p className="text-base md:text-lg">Nigeria (First-to-Market Innovation)</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Role
                      </h3>
                      <p className="text-base md:text-lg">Solo UX Engineer</p>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Team
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Otobong Okoko (Solo UX Engineer - Research, Design, Frontend Development)</li>
                      <li>5-person cross-functional squad:</li>
                      <li className="ml-4">Retail experts</li>
                      <li className="ml-4">Financial analyst</li>
                      <li className="ml-4">Engineers</li>
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
                      Transform Nigeria's broken lending ecosystem through instant, transparent digital financing.
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
                            Eliminate Lending Bureaucracy
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Transform traditional bank loans requiring extensive paperwork, guarantors, and
                            2-4 week processing into an instant, automated 5-minute experience accessible to
                            all Sterling Bank customers.
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
                            Build Trust Through Radical Transparency
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Address Nigeria's exploitative lending crisis where borrowers routinely had negative
                            experiences with loan sharks and hidden fees by creating a transparent platform
                            with zero hidden charges and 24-hour reversal option.
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
                            Create Sustainable Digital Innovation
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Leverage existing banking data for real-time credit assessment, creating a
                            profitable business model that serves customers ethically while achieving
                            regulatory compliance and 200%+ profit growth.
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
                        Designing for a Broken Market
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        Nigeria's 2016 lending landscape was dominated by exploitative loan sharks and
                        bureaucratic bank processes. My research revealed that the core problem wasn't just
                        convenience—it was a fundamental trust deficit born from systemic exploitation.
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        <strong className="text-foreground">Research revealed three critical insights:</strong>
                      </p>
                      <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                        <li>
                          <strong className="text-foreground">Trust Through Transparency:</strong> Research revealed
                          widespread negative lending experiences due to hidden fees and unrealistic conditions.
                          Transparency was not a feature; it was the foundation.
                        </li>
                        <li>
                          <strong className="text-foreground">Algorithmic Opportunity:</strong> Analysis showed the
                          vast majority of manual loan processing steps could be automated using existing bank
                          transaction data and debt coverage ratio calculations, enabling instant credit decisions.
                        </li>
                        <li>
                          <strong className="text-foreground">Mobile-First Reality:</strong> Target customers
                          predominantly completed financial transactions on mobile devices, requiring mobile-native
                          design rather than desktop-first thinking.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        The Transparency Paradox
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Guerrilla research at Sterling Bank branches revealed a counterintuitive insight:
                        customers viewed instant approval with suspicion. I designed a system that explained
                        the algorithmic decision-making process in plain language, showing customers exactly
                        why they were approved and what factors influenced their credit limit. This transparency
                        transformed skepticism into trust.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Financial Footprint Innovation
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Rather than requiring guarantors and endless paperwork, I architected a system using
                        customers' existing banking transaction history. The platform analyzes spending patterns,
                        income consistency, and debt coverage ratios in real-time—making credit decisions in
                        under 5 minutes while maintaining regulatory compliance.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Customer Protection Beyond Regulation
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Going beyond Central Bank requirements, I designed a 24-hour reversal option allowing
                        customers to cancel loans without penalty. This feature, combined with upfront fee
                        disclosure and clear repayment terms, positioned Specta as Nigeria's first truly
                        customer-first lending platform.
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
                    {/* Quantitative Impact */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Platform Performance</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Business growth and customer adoption metrics</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            $263M
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Total disbursement within 3 years of launch, validating sustainable business model
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            200%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in profit & revenue through ethical, transparent lending
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            120%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in loan applications within 6 months demonstrating market demand
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            5 Min
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Average processing time from application to disbursement
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
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Customer Testimonials</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Qualitative feedback and market impact</p>
                      <div className="space-y-6">
                        <QuoteBlock
                          quote="I couldn't believe it was real. In 5 minutes, I had the money in my account. No paperwork, no guarantors, no hidden charges. Specta saved my business when I needed quick inventory funding."
                          author="Small Business Owner, Lagos"
                        />
                        <QuoteBlock
                          quote="After being cheated by loan sharks for years, Specta showed me what honest lending looks like. Everything was clear, and I could even cancel if I changed my mind."
                          author="Customer, Abuja"
                        />
                      </div>

                      <div className="mt-8">
                        <h4 className="text-lg font-normal mb-3 text-center">Strategic Impact</h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                          The project established Sterling Bank as Nigeria's fintech innovation leader, with
                          Specta's transparency and speed becoming the benchmark for digital lending. The
                          platform's success influenced Central Bank of Nigeria policies on digital lending
                          innovation and catalyzed multiple competitors to launch similar platforms—transforming
                          an entire industry.
                        </p>
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
                        Trust is the foundation of financial technology, especially in markets with histories
                        of exploitation. The counterintuitive decision to slow down and explain algorithmic
                        decisions—rather than just celebrating speed—proved that transparency builds adoption
                        faster than convenience alone.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Involve more customers in beta testing before launch. While our 50-business-owner
                        beta provided valuable feedback, a larger, more diverse test group would have uncovered
                        edge cases in credit assessment earlier, particularly for customers with irregular
                        income patterns common in Nigeria's informal economy.
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
        prev={spectaConfig.navigation?.prev}
        next={spectaConfig.navigation?.next}
        showBackHome={true}
      />
    </div>
  )
}
