import { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { zalandoChatbotConfig } from "@/config/case-studies/zalando-chatbot"

export const metadata: Metadata = {
  title: zalandoChatbotConfig.metadata.title,
  description: zalandoChatbotConfig.metadata.description,
}

const sections = zalandoChatbotConfig.sections

export default function ZalandoChatbotCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <CaseStudyHero hero={zalandoChatbotConfig.hero} metrics={zalandoChatbotConfig.metrics} />

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar - Table of Contents */}
          {zalandoChatbotConfig.layout.hasSidebar && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </aside>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${zalandoChatbotConfig.layout.maxWidth} w-full`}>
            {/* Project Summary Section */}
            <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
              {/* Card Info */}
              {zalandoChatbotConfig.cardInfo && (
                <div className="mb-10 md:mb-12">
                  <div className="inline-flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
                    <span>{zalandoChatbotConfig.hero.company}</span>
                    <span aria-hidden="true">•</span>
                    <span>{zalandoChatbotConfig.hero.year}</span>
                  </div>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-3 md:mb-6 leading-tight">
                    {zalandoChatbotConfig.cardInfo.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-muted-foreground font-light mb-3 md:mb-4 leading-snug">
                    {zalandoChatbotConfig.cardInfo.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {zalandoChatbotConfig.cardInfo.description}
                  </p>
                </div>
              )}

              <Separator className="my-8 md:my-10" />

              <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Project Summary</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I led the end-to-end redesign of Zalando's AI chatbot, which had become the 
                lowest-performing customer support channel with a 20% intent recognition failure rate 
                and the highest repeat contact rate across all channels. Through mixed-methods research, 
                I uncovered that the core issue wasn't usability—it was deep-seated customer distrust 
                in chatbots. By architecting a guided, button-driven conversational flow and introducing 
                counterintuitive design decisions like simulated "thinking" delays, I transformed the 
                chatbot into an intelligent partner that proactively solves problems and rebuilds 
                customer confidence.
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
                  <p className="text-base md:text-lg">{zalandoChatbotConfig.project.market}: {zalandoChatbotConfig.project.marketDetails}</p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                    Role
                  </h3>
                  <p className="text-base md:text-lg">{zalandoChatbotConfig.project.role}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-3">
                  Team
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Otobong Okoko (Senior Product Designer)</li>
                  <li>1 Product Manager</li>
                  <li>2 Lead AI/ML Engineers</li>
                  <li>3 Software Engineers</li>
                  <li>1 Data Scientist</li>
                  <li>1 Content Writer</li>
                  <li>External Partnership with UltimateAI</li>
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
                      Increase Automation While Maintaining Quality
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Transform the chatbot from a cost center to a strategic asset by dramatically 
                      increasing the automation rate for key use cases, particularly delivery issues, 
                      without sacrificing the customer experience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Reduce Repeat Contacts
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Solve customer problems effectively on the first interaction, eliminating the 
                      frustration of having to contact support multiple times for the same issue.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg md:text-xl font-normal mb-3">
                      Rebuild Customer Trust
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Address the fundamental psychological barrier preventing chatbot adoption—deep-seated 
                      distrust born from negative past experiences with conversational AI.
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
                    Designing for Trust, Not Just Efficiency
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Our research revealed a critical insight: users feared "not typing the right keywords" 
                    in free-text chatbots. The solution wasn't to improve NLP accuracy alone—it was to 
                    eliminate the anxiety entirely through a guided, button-driven experience. I analyzed 
                    100+ chat transcripts to identify failure patterns and mapped them against our technical 
                    capabilities, establishing three core design principles:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground ml-4">
                    <li>
                      <strong className="text-foreground">Be a Partner, Not a Gatekeeper:</strong> Proactively 
                      offer solutions rather than forcing users to navigate complex menus
                    </li>
                    <li>
                      <strong className="text-foreground">Remember Everything:</strong> Maintain full context 
                      throughout the conversation to eliminate repetition
                    </li>
                    <li>
                      <strong className="text-foreground">Always Offer an Off-Ramp:</strong> Make escalating 
                      to human agents transparent and seamless with full conversation summaries
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    The "Patience" Paradox
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Usability testing uncovered a counterintuitive finding that became pivotal to our success. 
                    Users described the bot's instant responses as "unnatural" and "irritating"—the bot was 
                    <em> too fast</em>, which paradoxically eroded trust. I introduced a 3-5 second simulated 
                    "thinking" delay with a typing indicator before responses. This small change made the 
                    experience feel more human and thoughtful, leading to a 60% improvement in user perception 
                    and acceptance in subsequent tests.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Proactive Intelligence Through API Integration
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Rather than asking users to hunt for order numbers or parcel details, I designed a system 
                    that automatically fetches recent orders via API and displays them in a visual carousel. 
                    For clear-cut issues like lost parcels, the bot now initiates automated refunds directly 
                    in the conversation after performing risk checks—providing instant resolution that users 
                    never expected from a chatbot.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                    Graceful Handovers
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    When escalation is necessary, the chatbot summarizes the entire interaction and passes 
                    that context directly to human agents. This eliminated the user's biggest fear: having 
                    to repeat themselves and waste time after a failed bot interaction.
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
                      value="226%"
                      label="Increase in automation rate for delivery use cases (from 11.76% to 38.36%)"
                    />
                    <MetricCard
                      value="18%"
                      label="Decrease in Repeated Case Share, proving first-contact resolution improved significantly"
                    />
                    <MetricCard
                      value="€1.34M+"
                      label="Estimated annualized operational savings from increased automation and reduced repeat contacts"
                    />
                    <MetricCard
                      value="~40% → 70%"
                      label="CSAT scores rose significantly in post-launch monitoring"
                    />
                  </div>
                </div>

                {/* Qualitative Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Qualitative Impact</h3>
                  <QuoteBlock
                    quote="Before this user test, I would have opted to call instead of using the chat. Just now, I realize how efficient and workable the chat is. It gives me all the information I need, and it's easy to use. If I had known this before, I would have used it instead of calling."
                    author="User from qualitative testing"
                  />
                </div>

                {/* Strategic Impact */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">Strategic Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The project established a new, scalable framework for AI-powered experiences at Zalando 
                    and fundamentally changed internal perception of what conversational AI could achieve for 
                    customer support.
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
                    Design for trust, not just speed. The primary barrier to chatbot adoption wasn't 
                    usability—it was psychological. The counterintuitive decision to intentionally slow 
                    down the bot's response time proved that in conversational AI, the perception of 
                    thoughtfulness can be more important than raw efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-normal mb-3">What I Would Do Differently</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Involve the Content Writer from day one. We spent significant time in later stages 
                    refining the bot's tone of voice and empathy. Establishing this content strategy 
                    earlier would have streamlined the design process and strengthened the emotional 
                    connection with users from the start.
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
