import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { cashAmmConfig } from "@/config/case-studies/cashamm"

export const metadata: Metadata = {
  title: cashAmmConfig.metadata.title,
  description: cashAmmConfig.metadata.description,
}

const sections = cashAmmConfig.sections

export default function CashammCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={cashAmmConfig.hero} metrics={cashAmmConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          {cashAmmConfig.layout.hasSidebar && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </aside>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${cashAmmConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
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

              <Separator className="my-8 md:my-10" />

              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I designed and developed a complete e-commerce ecosystem empowering Black business owners 
                to create professional online stores without technical resources, while creating authentic 
                shopping experiences for customers seeking to support Black-owned businesses.
              </p>

              <Separator className="my-6 md:my-8" />

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
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12 md:mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Goals</h2>
              
              <div className="space-y-6 md:space-y-8">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Democratize E-Commerce Access
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Enable Black business owners without technical resources or large budgets to create 
                      professional online stores, eliminating barriers that kept them locked into exploitative 
                      social media commerce or expensive platform fees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Build Community-Centered Discovery
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Create shopping experiences that celebrate Black entrepreneurship and facilitate 
                      authentic connections between customers seeking to support Black-owned businesses 
                      and the entrepreneurs behind them.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Achieve Sustainable Growth
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Onboard 500+ businesses within 6 months while maintaining 80% business owner 
                      satisfaction and 60% month-over-month transaction growth through superior user 
                      experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Challenge Section */}
            <section id="challenge" className="mb-16 md:mb-20 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">The Challenge</h2>

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
            </section>

            {/* Approach Section */}
            <section id="approach" className="mb-16 md:mb-20 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Approach</h2>

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
            </section>

            {/* Results Section */}
            <section id="results" className="mb-16 md:mb-20 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8">Results</h2>

              <div className="space-y-10 md:space-y-12">
                {/* Quantitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Quantitative Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <MetricCard
                      value="347"
                      label="Businesses onboarded (exceeded 500-business target by month 8)"
                    />
                    <MetricCard
                      value="$1.2M"
                      label="Community transactions in first year"
                    />
                    <MetricCard
                      value="87%"
                      label="Business owner satisfaction rate"
                    />
                    <MetricCard
                      value="73%"
                      label="Month-over-month transaction growth"
                    />
                  </div>
                </div>

                {/* Qualitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Qualitative Impact</h3>
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

                {/* Strategic Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">Strategic Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The project established Cashamm as a viable alternative to generic e-commerce platforms, 
                    demonstrating market opportunity for community-focused commerce. The cultural design 
                    framework and community research methods influenced several subsequent minority-focused 
                    e-commerce platforms, establishing new standards for authentic representation in digital 
                    commerce.
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
