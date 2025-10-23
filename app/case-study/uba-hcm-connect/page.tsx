import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { ubaHcmConnectConfig } from "@/config/case-studies/uba-hcm-connect"

export const metadata: Metadata = {
  title: ubaHcmConnectConfig.metadata.title,
  description: ubaHcmConnectConfig.metadata.description,
}

const sections = ubaHcmConnectConfig.sections

export default function UBAHCMConnectCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={ubaHcmConnectConfig.hero} metrics={ubaHcmConnectConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents sections={sections} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:max-w-3xl w-full">
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
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

              <Separator className="my-6 md:my-8" />

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
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Goals</h2>
              
              <div className="space-y-6 md:space-y-8">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Reduce Operational Costs
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Eliminate $80,000 monthly license fees from third-party HR solutions while 
                      reducing manual HR processes by 80%+ to support UBA's ambitious 35% annual 
                      technology cost reduction goal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Achieve Organization-Wide Adoption
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Reach 90%+ employee adoption within 6 months across 20,000+ employees in 20+ 
                      countries with varying levels of digital literacy and technical infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Maintain Cultural Sensitivity
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Create a flexible system architecture that accommodates regional variations in 
                      HR practices, compliance requirements, and cultural norms across 20+ countries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Establish Design Foundation
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Transform UBA from Level 1 to Level 3 design maturity by establishing the bank's 
                      first comprehensive design system and user-centered design processes.
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
            </section>

            {/* Results Section */}
            <section id="results" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* Quantitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Quantitative Outcomes</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-base md:text-lg font-normal mb-3 text-foreground">Financial Impact:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <MetricCard
                        value="$960,000"
                        label="Annual savings from license elimination and operational efficiency gains"
                      />
                      <MetricCard
                        value="18%"
                        label="Annual profit increase through operational cost reduction and process automation"
                      />
                      <MetricCard
                        value="91%"
                        label="Process automation eliminating manual handling for vast majority of HR operations"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-normal mb-3 text-foreground">User Experience Metrics:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <MetricCard
                        value="94%"
                        label="Employee adoption within 6 months across 20,000+ employees"
                      />
                      <MetricCard
                        value="89%"
                        label="User satisfaction in post-launch surveys"
                      />
                      <MetricCard
                        value="73%"
                        label="Reduction in HR helpdesk tickets through improved self-service capabilities"
                      />
                      <MetricCard
                        value="56%"
                        label="Faster onboarding for new employee setup"
                      />
                      <MetricCard
                        value="67%"
                        label="Faster HR processes with average task completion time reduction across all modules"
                      />
                    </div>
                  </div>
                </div>

                {/* Organizational Transformation */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Organizational Transformation</h3>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Design maturity advancement</strong> from Level 1 to Level 3
                    </li>
                    <li>
                      <strong className="text-foreground">Cross-team adoption</strong> of design thinking principles 
                      by IT and Operations teams
                    </li>
                    <li>
                      <strong className="text-foreground">Knowledge transfer</strong> with design documentation used 
                      for subsequent digital initiatives
                    </li>
                    <li>
                      <strong className="text-foreground">Cultural change</strong> embedding user-centered thinking 
                      in organizational decision-making
                    </li>
                  </ul>
                </div>

                {/* Qualitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Qualitative Impact</h3>
                  <div className="space-y-6">
                    <QuoteBlock
                      quote="The HCM Connect transformation fundamentally changed how our employees interact with HR services. What used to take days now happens in minutes, and our people can focus on strategic work rather than administrative tasks."
                      author="HR Director, UBA"
                    />
                    <QuoteBlock
                      quote="The design system approach meant we could scale consistently across all our African operations while respecting local needs. It's become the blueprint for all our digital initiatives."
                      author="Head of Technology, UBA"
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
