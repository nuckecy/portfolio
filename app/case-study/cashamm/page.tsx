import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { cashAmmConfig } from "@/config/case-studies/cashamm"

export const metadata: Metadata = {
  title: cashAmmConfig.metadata.title,
  description: cashAmmConfig.metadata.description,
}

export default function CashammCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={cashAmmConfig.hero} metrics={cashAmmConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${cashAmmConfig.layout.maxWidth} w-full mx-auto`}>
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
                  {cashAmmConfig.cardInfo && (
                    <div className="mb-10 md:mb-12">
                      <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                        <span>{cashAmmConfig.hero.company}</span>
                        <span aria-hidden="true">•</span>
                        <span>{cashAmmConfig.hero.year}</span>
                      </div>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                        {cashAmmConfig.cardInfo.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                        {cashAmmConfig.cardInfo.subtitle}
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {cashAmmConfig.cardInfo.description}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-border my-8 md:my-10"></div>

                  <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    I designed and developed a complete e-commerce ecosystem empowering Black business owners
                    to create professional online stores without technical resources, while creating authentic
                    shopping experiences for customers seeking to support Black-owned businesses.
                  </p>

                  <div className="border-t border-border my-6 md:my-8"></div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Timeline
                      </h3>
                      <p className="text-base md:text-lg">10 Months</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Market
                      </h3>
                      <p className="text-base md:text-lg">{cashAmmConfig.project.market}: {cashAmmConfig.project.marketDetails}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                        Role
                      </h3>
                      <p className="text-base md:text-lg">{cashAmmConfig.project.role}</p>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Team
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Otobong Okoko (UX Engineer - Solo Designer + Frontend Developer)</li>
                      <li>2 Startup Founders</li>
                      <li>1 Backend Engineer</li>
                      <li>1 Business Development Lead</li>
                    </ul>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                      Target Market
                    </h3>
                    <p className="text-muted-foreground">
                      2.6M Black-Owned Businesses
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
                      Empower Black entrepreneurship through accessible e-commerce platform and community-centered discovery.
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
                            Democratize E-Commerce Access
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Enable Black business owners without technical resources or large budgets to create
                            professional online stores, eliminating barriers that kept them locked into exploitative
                            social media commerce or expensive platform fees.
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
                            Build Community-Centered Discovery
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Create shopping experiences that celebrate Black entrepreneurship and facilitate
                            authentic connections between customers seeking to support Black-owned businesses
                            and the entrepreneurs behind them.
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
                            Achieve Sustainable Growth
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Onboard 500+ businesses within 6 months while maintaining 80% business owner
                            satisfaction and 60% month-over-month transaction growth through superior user
                            experience.
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge Section */}
            <section id="challenge" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-muted/30 py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Challenge
                    </span>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10">
                    My research within Black business communities revealed that existing e-commerce platforms
                    failed not just on usability, but on cultural understanding. Business owners valued
                    community connection over features, while customers wanted authentic stories behind
                    products—not just transactions.
                  </p>

                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Research Insights</h3>
                  <div className="space-y-6 md:space-y-8">
                    <Card className="transition-shadow hover:shadow-md">
                      <CardContent className="pt-6">
                        <h4 className="text-lg md:text-xl font-normal mb-3">
                          Simplicity as Empowerment
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          89% of business owners managed their businesses primarily through mobile devices and
                          overwhelmingly preferred easy setup over extensive customization. They needed to get
                          online fast, not become web developers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="transition-shadow hover:shadow-md">
                      <CardContent className="pt-6">
                        <h4 className="text-lg md:text-xl font-normal mb-3">
                          Story-Driven Shopping
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          78% of customers discovered Black-owned businesses through social recommendations and
                          preferred businesses with authentic personal narratives. The platform needed to celebrate
                          entrepreneurial stories, not just display products.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="transition-shadow hover:shadow-md">
                      <CardContent className="pt-6">
                        <h4 className="text-lg md:text-xl font-normal mb-3">
                          Community Over Competition
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          Business owners wanted to support each other's success rather than just compete. The
                          platform should feel like a tool for collective economic empowerment, not individual survival.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Approach Section */}
            <section id="approach" className="scroll-mt-24">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-background py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                  <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
                      Approach
                    </span>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        The Cultural Authenticity Challenge
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Unlike generic e-commerce platforms, Cashamm needed visual design and language that
                        genuinely reflected Black entrepreneurship—celebrating achievement and cultural pride
                        without falling into exploitative "diversity marketing" patterns. Every design decision
                        was validated through community feedback ensuring authentic representation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Mobile-First for Economic Reality
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        With 91% of interactions occurring on mobile devices and target users often managing
                        businesses between day jobs or childcare, I architected a mobile-native experience where
                        store management could happen in spare moments throughout the day, not requiring dedicated
                        desktop time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                        Dual Experience Architecture
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        Rather than choosing between serving businesses or customers, I designed two complementary
                        products:
                      </p>
                      <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                        <li>
                          <strong className="text-foreground">ShopFront (Customer Marketplace):</strong> Community-focused
                          discovery enabling customers to browse businesses by story, support local entrepreneurs,
                          and share discoveries within social networks.
                        </li>
                        <li>
                          <strong className="text-foreground">StoreFront Manager (Business Dashboard):</strong> Simplified
                          store creation and management requiring minimal technical knowledge, with intuitive product
                          listing, order processing, and accessible business analytics.
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
                      Impact and Results
                    </span>
                  </div>

                  <div className="space-y-8 md:space-y-12">
                    {/* Quantitative Impact */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Platform Growth</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Business onboarding and transaction metrics</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            347
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Businesses onboarded (exceeded 500-business target by month 8)
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            $1.2M
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Community transactions in first year
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            87%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Business owner satisfaction rate
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            73%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Month-over-month transaction growth
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
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Community Impact</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Qualitative feedback and strategic achievements</p>
                      <div className="space-y-6">
                        <QuoteBlock
                          quote="Cashamm made it possible for me to have a professional online store without hiring a web designer. The setup was so simple, and I love being part of a community that supports each other."
                          author="Beauty Business Owner, Atlanta"
                        />
                        <QuoteBlock
                          quote="I've discovered so many amazing Black-owned businesses through Cashamm that I never would have found otherwise. It feels good to support the community while finding unique products."
                          author="Customer, Los Angeles"
                        />
                        <QuoteBlock
                          quote="The platform celebrates our stories and achievements rather than just focusing on products. It feels authentic to our community values."
                          author="Fashion Business Owner, New York"
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
                        Community-centered product design requires deep cultural immersion, not just user research.
                        The difference between exploitation and empowerment lies in authentic partnership with
                        communities from research through launch, ensuring design decisions reflect genuine values
                        rather than designer assumptions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Build stronger business owner networking features from day one. While we focused on
                        customer-business connections, business owners consistently expressed desire for peer
                        support and resource sharing. Earlier implementation of business-to-business networking
                        would have strengthened community bonds and platform stickiness.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-3">Design Innovation Highlights</h3>
                      <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                        <li>
                          <strong className="text-foreground">Story-Driven Business Profiles:</strong> Created
                          profiles helping owners share authentic entrepreneurial narratives beyond product listings
                        </li>
                        <li>
                          <strong className="text-foreground">Community Discovery Features:</strong> Developed social
                          integration and curated showcases celebrating Black entrepreneurship
                        </li>
                        <li>
                          <strong className="text-foreground">Simplified Store Creation:</strong> Built step-by-step
                          setup flow and mobile-optimized management requiring minimal technical knowledge
                        </li>
                        <li>
                          <strong className="text-foreground">Cultural Design System:</strong> Implemented design
                          emphasizing celebration over charity with professional quality and authentic representation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        </main>
      </div>

      {/* Navigation Footer - Outside container for full width */}
      <CaseStudyNavigation
        prev={cashAmmConfig.navigation?.prev}
        next={cashAmmConfig.navigation?.next}
        showBackHome={true}
      />
    </div>
  )
}
