import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { spectaConfig } from "@/config/case-studies/specta"

export const metadata: Metadata = {
  title: spectaConfig.metadata.title,
  description: spectaConfig.metadata.description,
}

const sections = spectaConfig.sections

export default function SpectaCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={spectaConfig.hero} metrics={spectaConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents sections={sections} />
          </aside>

          {/* Main Content */}
          <main className={`flex-1 ${spectaConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I designed and developed Nigeria's first instant digital lending platform, transforming 
                a weeks-long bureaucratic process into a 5-minute automated experience while eliminating 
                the predatory practices that plagued traditional lending.
              </p>

              <Separator className="my-6 md:my-8" />

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
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Goals</h2>
              
              <div className="space-y-6 md:space-y-8">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Eliminate Lending Bureaucracy
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Transform traditional bank loans requiring extensive paperwork, guarantors, and 
                      2-4 week processing into an instant, automated 5-minute experience accessible to 
                      all Sterling Bank customers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Build Trust Through Radical Transparency
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Address Nigeria's exploitative lending crisis where 89% of borrowers had negative 
                      experiences with loan sharks and hidden fees by creating a transparent platform 
                      with zero hidden charges and 24-hour reversal option.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Create Sustainable Digital Innovation
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Leverage existing banking data for real-time credit assessment, creating a 
                      profitable business model that serves customers ethically while achieving 
                      regulatory compliance and 200%+ profit growth.
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
                      <strong className="text-foreground">Trust Through Transparency:</strong> 89% of 
                      Nigerians had negative lending experiences due to hidden fees and unrealistic 
                      conditions. Transparency wasn't just nice-to-have—it was revolutionary.
                    </li>
                    <li>
                      <strong className="text-foreground">Algorithmic Opportunity:</strong> 91% of manual 
                      loan processing could be automated using existing bank transaction data and debt 
                      coverage ratio calculations, enabling instant decisions.
                    </li>
                    <li>
                      <strong className="text-foreground">Mobile-First Reality:</strong> 84% of target 
                      customers completed financial transactions on mobile devices, requiring mobile-native 
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
            </section>

            {/* Results Section */}
            <section id="results" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* Quantitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Quantitative Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="$263M"
                      label="Total disbursement within 3 years of launch, validating sustainable business model"
                    />
                    <MetricCard
                      value="200%"
                      label="Increase in profit & revenue through ethical, transparent lending"
                    />
                    <MetricCard
                      value="120%"
                      label="Increase in loan applications within 6 months demonstrating market demand"
                    />
                    <MetricCard
                      value="5 Minutes"
                      label="Average processing time from application to disbursement"
                    />
                  </div>
                </div>

                {/* Qualitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Qualitative Impact</h3>
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
                </div>

                {/* Strategic Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">Strategic Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The project established Sterling Bank as Nigeria's fintech innovation leader, with 
                    Specta's transparency and speed becoming the benchmark for digital lending. The 
                    platform's success influenced Central Bank of Nigeria policies on digital lending 
                    innovation and catalyzed multiple competitors to launch similar platforms—transforming 
                    an entire industry.
                  </p>
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
