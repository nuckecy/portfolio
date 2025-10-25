import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { orgcompassConfig } from "@/config/case-studies/orgcompass"

export const metadata: Metadata = {
  title: orgcompassConfig.metadata.title,
  description: orgcompassConfig.metadata.description,
}

const sections = orgcompassConfig.sections

export default function OrgCompassCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={orgcompassConfig.hero} metrics={orgcompassConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents sections={sections} />
          </aside>

          {/* Main Content */}
          <main className={`flex-1 ${orgcompassConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
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

              <Separator className="my-8 md:my-10" />

              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I designed an enterprise organizational intelligence platform that transforms raw HR 
                data into strategic insights for executive decision-making, serving a global consultancy 
                with 400+ employees across 25+ countries.
              </p>

              <Separator className="my-6 md:my-8" />

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
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Goals</h2>
              
              <div className="space-y-6 md:space-y-8">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Accelerate Strategic Decision-Making
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Reduce time-to-decision for hiring and team composition from days to hours by 
                      providing executives with comprehensive organizational visibility and predictive 
                      intelligence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Improve Team Composition Effectiveness
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Enable data-driven team building by revealing skills distribution, collaboration 
                      patterns, and success factors across 400+ employees in 25+ countries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Build Sustainable Talent Strategy
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Create predictive capabilities for retention risk, skill gap identification, and 
                      career pathway planning that support long-term organizational development.
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
            </section>

            {/* Results Section */}
            <section id="results" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* Quantitative Outcomes */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Quantitative Outcomes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="45%"
                      label="Reduction in strategic decision time—executives make hiring and team composition decisions in hours rather than days"
                    />
                    <MetricCard
                      value="32%"
                      label="Improvement in team effectiveness through optimized team composition leading to measurably better project outcomes"
                    />
                    <MetricCard
                      value="94%"
                      label="C-Suite adoption with active engagement from executives within first quarter of deployment"
                    />
                    <MetricCard
                      value="28%"
                      label="Increase in employee retention through predictive intervention preventing talent loss"
                    />
                  </div>
                </div>

                {/* Qualitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Qualitative Impact</h3>
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

                {/* Strategic Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">Strategic Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The platform became Modus Create's foundation for comprehensive talent strategy, with 
                    the interface patterns and AI integration approaches adopted across other internal 
                    systems. The project elevated organizational perception of design from cosmetic to 
                    strategic, establishing precedent for design-led digital transformation initiatives.
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
