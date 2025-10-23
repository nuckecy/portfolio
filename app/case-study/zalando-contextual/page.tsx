import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { zalandoContextualConfig } from "@/config/case-studies/zalando-contextual"

export const metadata: Metadata = {
  title: zalandoContextualConfig.metadata.title,
  description: zalandoContextualConfig.metadata.description,
}

const sections = zalandoContextualConfig.sections

export default function ZalandoContextualCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={zalandoContextualConfig.hero} metrics={zalandoContextualConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          {zalandoContextualConfig.layout.hasSidebar && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </aside>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${zalandoContextualConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Designed and launched a contextual self-help platform for Zalando's 50M+ customers that 
                proactively addresses needs before they contact support, focusing initially on returns & 
                refunds which represent 33% of all customer inquiries. Through behavioral analytics and 
                ethnographic research, I identified that customers have highly predictable support needs 
                based on order status and behavioral patterns. By creating anticipatory design that surfaces 
                relevant information contextually, I transformed reactive support into proactive assistance.
              </p>

              <Separator className="my-6 md:my-8" />

              {/* Project Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Timeline
                  </h3>
                  <p className="text-base md:text-lg">8 Months</p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Market
                  </h3>
                  <p className="text-base md:text-lg">{zalandoContextualConfig.project.market}: {zalandoContextualConfig.project.marketDetails}</p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Role
                  </h3>
                  <p className="text-base md:text-lg">{zalandoContextualConfig.project.role}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                  Team
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Otobong Okoko (Senior Product Designer - Growth Design)</li>
                  <li>1 Product Manager</li>
                  <li>3 Engineers</li>
                  <li>1 Data Scientist</li>
                  <li>1 UX Researcher</li>
                  <li>1 Customer Care Expert</li>
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
                      Reduce Support Burden
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Achieve 25% reduction in returns-related contact volume while maintaining or 
                      improving customer satisfaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Improve First-Contact Resolution
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Increase customer satisfaction scores by 20% through comprehensive, contextual 
                      information that prevents repeat contacts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Drive Customer Loyalty
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Increase repeat purchase rate by 15% through improved experience that builds 
                      confidence and reduces friction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Create Scalable Framework
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Establish anticipatory design patterns that can expand beyond returns to other 
                      support categories.
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
                    Predictive Contextual Intelligence
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Instead of reactive support, I designed a proactive system that anticipates customer 
                    needs and surfaces relevant information contextually, creating a "magic" experience 
                    that feels personalized without being intrusive.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Core Design Principles:</strong>
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Anticipatory Design:</strong> Predict customer 
                      needs based on order status, behavior, and historical patterns, surfacing information 
                      before customers realize they need it
                    </li>
                    <li>
                      <strong className="text-foreground">Contextual Intelligence:</strong> Personalize 
                      content based on individual customer context, integrating cross-platform behavioral 
                      data for seamless experiences
                    </li>
                    <li>
                      <strong className="text-foreground">Trust Through Transparency:</strong> Provide 
                      real-time, accurate status information with clear process explanations and realistic 
                      timelines
                    </li>
                    <li>
                      <strong className="text-foreground">Emotional Journey Design:</strong> Address anxiety 
                      proactively during uncertain moments, celebrate positive moments, and provide 
                      reassurance during problem resolution
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Research Strategy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Implemented mixed-methods approach combining behavioral analytics, ethnographic research, 
                    and experimental validation:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Behavioral Data Analysis:</strong> 2.3M customer interaction analysis across all support channels</li>
                    <li><strong className="text-foreground">Journey mapping:</strong> High-contact customer segments and predictive modeling</li>
                    <li><strong className="text-foreground">Qualitative Research:</strong> 47 contextual inquiry sessions, 23 in-depth interviews, 12 diary studies</li>
                    <li><strong className="text-foreground">Usability Benchmarking:</strong> Competitive analysis of 12 e-commerce self-service experiences</li>
                  </ul>

                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium mb-2 text-foreground">Key Insights:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 78% of support inquiries could be anticipated based on order status + customer history</li>
                      <li>• Customers contact support at 5 predictable moments in the return journey</li>
                      <li>• Proactive communication reduces contact likelihood by 65%</li>
                      <li>• 84% preferred self-service when information was comprehensive and trustworthy</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Solution Architecture
                  </h3>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Active Returns Dashboard:</strong> Real-time status 
                      tracking with predictive delivery estimates, contextual action buttons, proactive problem 
                      alerts, and visual timeline
                    </li>
                    <li>
                      <strong className="text-foreground">Intelligent Information Architecture:</strong> 
                      Personalized content ranking, progressive disclosure, cross-reference integration, and 
                      multi-modal content
                    </li>
                    <li>
                      <strong className="text-foreground">Proactive Communication System:</strong> Predictive 
                      notifications, contextual messaging adapting to emotional state, multi-channel coordination, 
                      and escalation prevention
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section id="results" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* Quantitative Metrics */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Quantitative Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="33%"
                      label="Reduction in returns inquiries (exceeded 25% target)"
                    />
                    <MetricCard
                      value="28%"
                      label="Customer satisfaction improvement (self-service rating from 3.1 to 4.2 out of 5)"
                    />
                    <MetricCard
                      value="67%"
                      label="Faster issue resolution through contextual information"
                    />
                    <MetricCard
                      value="45%"
                      label="Reduction in repeat contacts through comprehensive information"
                    />
                  </div>
                </div>

                {/* Business Performance */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Business Performance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="€3.2M"
                      label="Annual cost savings through operational cost reduction"
                    />
                    <MetricCard
                      value="52%"
                      label="Agent productivity increase with focus shifted to complex interactions"
                    />
                    <MetricCard
                      value="23%"
                      label="Customer effort score improvement reducing perceived effort"
                    />
                    <MetricCard
                      value="15%"
                      label="Increase in repeat purchases as improved experience drives loyalty"
                    />
                  </div>
                </div>

                {/* Design System Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Design System Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="12 Teams"
                      label="Adoption of contextual help patterns across product areas"
                    />
                    <MetricCard
                      value="340%"
                      label="Knowledge base engagement through better discovery"
                    />
                    <MetricCard
                      value="89%"
                      label="Design QA pass rate ensuring high-quality implementation"
                    />
                    <MetricCard
                      value="67%"
                      label="Faster feature development through reusable components"
                    />
                  </div>
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
                    Anticipatory design creates "magic" when done right. The key is balancing proactive 
                    assistance with user agency—surfacing information they need without feeling invasive. 
                    The success came from deeply understanding the emotional journey, not just the functional 
                    needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Invest more time in the mobile native app experience earlier. While we optimized the 
                    web experience excellently, 73% of users were on mobile. A native app integration from 
                    the start would have enabled richer notifications and more seamless contextual experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Data Science Partnership Success</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The collaboration with data scientists was crucial. By working together from the research 
                    phase, we ensured the predictive models were designed around user needs rather than just 
                    technical capability. This human-centered AI approach was key to acceptance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Scalability Validation</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The framework's adoption by 12 other teams validated that we created true design patterns, 
                    not just point solutions. The contextual help principles are now influencing how Zalando 
                    approaches all customer experience design.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">Cross-Product Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The success of this project influenced broader organizational thinking about "anticipatory 
                    commerce"—predicting and addressing customer needs before they become problems. This mindset 
                    shift is now part of Zalando's product strategy.
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
