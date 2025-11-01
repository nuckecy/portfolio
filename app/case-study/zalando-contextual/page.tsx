import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { ApproachSection } from "@/components/approach-section"
import { SolutionArchitectureSection } from "@/components/solution-architecture-section"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { PasswordWall } from "@/components/password-wall"
import { zalandoContextualConfig } from "@/config/case-studies/zalando-contextual"
import { getCaseStudyPassword } from "@/config/passwords"

export const metadata: Metadata = {
  title: zalandoContextualConfig.metadata.title,
  description: zalandoContextualConfig.metadata.description,
}

export default function ZalandoContextualCaseStudy() {
  const password = getCaseStudyPassword("zalando-contextual")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Always Visible */}
      <CaseStudyHero hero={zalandoContextualConfig.hero} />

      {/* Case Study Carousel - Always Visible */}
      {zalandoContextualConfig.carouselImages && (
        <section className="w-full bg-background border-b border-border">
          <CaseStudyCarousel images={zalandoContextualConfig.carouselImages} />
        </section>
      )}

      {/* Password Wall - Wraps content below carousel */}
      <PasswordWall
        caseStudySlug="zalando-contextual"
        correctPassword={password || ""}
      >

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${zalandoContextualConfig.layout.maxWidth} w-full mx-auto`}>
            {/* Project Summary Section */}
            <section id="overview" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-muted/30 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">

              {/* Two Column Layout: Summary on left, Role & Team on right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                {/* Left Column - Project Summary */}
                <div className="lg:col-span-2">
                  <div className="inline-block mb-6 md:mb-8">
                    <span className="text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Summary
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Designed and launched a contextual self-help platform for Zalando's 50M+ customers that
                    proactively addresses needs before they contact support, focusing initially on returns &
                    refunds which represent 33% of all customer inquiries. <br /><br />Through behavioral analytics and
                    ethnographic research, I identified that customers have highly predictable support needs
                    based on order status and behavioral patterns.
                  </p>
                </div>

                {/* Right Column - Role & Team Information */}
                <div className="border border-red-500 rounded-[0.5rem] bg-white dark:bg-slate-950">
                  <div className="p-4 md:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {/* Role */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        Role
                      </h3>
                      <p className="text-base md:text-md">{zalandoContextualConfig.project.role}</p>
                    </div>

                    {/* Timeline */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        Timeline
                      </h3>
                      <p className="text-base md:text-md">16 Months</p>
                    </div>

                    {/* Team - Spans both columns */}
                    <div className="sm:col-span-2 text-center">
                      <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wide mb-3">
                        Team
                      </h3>
                      <ul className="text-base md:text-md text-muted-foreground space-y-2 inline-block">
                        <li>Product Manager</li>
                        <li>Engineers (3)</li>
                        <li>Data Analyst</li>
                        <li>Customer Care Experts (3)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                    Shift Zalando's customer support from reactive problem-solving to anticipatory assistance, reducing contact volume while enhancing satisfaction and loyalty.
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
                        Reduce Support Burden
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Achieve 25% reduction in returns-related contact volume while maintaining or
                        improving customer satisfaction.
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
                        First-Contact Resolution
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Increase customer satisfaction scores by 20% through an improved first-contact resolution to
                        prevent repeat contacts.
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
                        Drive Customer Loyalty
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Increase repeat purchase rate by 15% through improved experience that builds
                        confidence and reduces friction.
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
                <ApproachSection />
                </div>
              </div>
            </section>

            {/* Solution Architecture Section */}
            <section id="solution" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-background py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <SolutionArchitectureSection />
                </div>
              </div>
            </section>

            {/* Research Strategy Section */}
            <section id="research" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-muted/30 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                {/* Centered Section Badge */}
                <div className="flex justify-center mb-8 md:mb-12">
                  <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                    Research
                  </span>
                </div>

                {/* Centered Title and Description */}
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Research Strategy</h3>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Implemented mixed-methods approach combining behavioral analytics, ethnographic research, and experimental validation:
                  </p>
                </div>

                {/* Two Column Grid: Research Methods + Key Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Left Column - Research Methods */}
                  <div className="border border-border rounded-lg p-6 md:p-8">
                    <h4 className="text-lg md:text-xl font-semibold mb-6">Research Methods</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl mt-0.5">✓</span>
                        <div>
                          <strong className="text-foreground">Behavioral Data Analysis:</strong>
                          <span className="text-muted-foreground"> 2.3M customer interaction analysis across all support channels</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl mt-0.5">✓</span>
                        <div>
                          <strong className="text-foreground">Journey mapping:</strong>
                          <span className="text-muted-foreground"> High-contact customer segments and predictive modeling</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl mt-0.5">✓</span>
                        <div>
                          <strong className="text-foreground">Qualitative Research:</strong>
                          <span className="text-muted-foreground"> 47 contextual inquiry sessions, 23 in-depth interviews, 12 diary studies</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl mt-0.5">✓</span>
                        <div>
                          <strong className="text-foreground">Usability Benchmarking:</strong>
                          <span className="text-muted-foreground"> Competitive analysis of 12 e-commerce self-service experiences</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column - Key Insights */}
                  <div className="border border-border rounded-lg p-6 md:p-8">
                    <h4 className="text-lg md:text-xl font-semibold mb-6">Key Insights</h4>
                    <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-0.5">💡</span>
                        <span>78% of support inquiries could be anticipated based on order status + customer history</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-0.5">💡</span>
                        <span>Customers contact support at 5 predictable moments in the return journey</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-0.5">💡</span>
                        <span>Proactive communication reduces contact likelihood by 65%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-0.5">💡</span>
                        <span>84% preferred self-service when information was comprehensive and trustworthy</span>
                      </li>
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
                  Impact and Result
                </span>
              </div>

              <div className="space-y-8 md:space-y-12">
                {/* Business Impact */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Business Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Direct improvements to customer experience and satisfaction</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                        33%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Reduction in returns inquiries (exceeded 25% target)
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                        28%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Customer satisfaction improvement (self-service rating from 3.1 to 4.2 out of 5)
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                        67%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Faster issue resolution through contextual information
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                        45%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Reduction in repeat contacts through comprehensive information
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

                {/* Business Results */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Business Results</h3>
                  <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Organizational gains and operational efficiency achieved</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                        €3.2M
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Annual cost savings through operational cost reduction
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                        52%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Agent productivity increase with focus shifted to complex interactions
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-green-600 mb-3 md:mb-4">
                        8%
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Increase in automation rate as intelligent routing handles routine inquiries
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </section>


        </main>
      </div>

      {/* Navigation Footer - Outside container for full width */}
      <CaseStudyNavigation
        prev={zalandoContextualConfig.navigation.prev}
        next={zalandoContextualConfig.navigation.next}
        showBackHome={true}
      />

      </PasswordWall>
    </div>
  )
}
