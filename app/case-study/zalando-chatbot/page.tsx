import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyNavigation } from "@/components/case-study-navigation"
import { PasswordWall } from "@/components/password-wall"
import { zalandoChatbotConfig } from "@/config/case-studies/zalando-chatbot"
import { getCaseStudyPassword } from "@/config/passwords"

export const metadata: Metadata = {
  title: zalandoChatbotConfig.metadata.title,
  description: zalandoChatbotConfig.metadata.description,
}

export default function ZalandoChatbotCaseStudy() {
  const password = getCaseStudyPassword("zalando-chatbot")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero hero={zalandoChatbotConfig.hero} metrics={zalandoChatbotConfig.metrics} />

      {/* Password Wall - Wraps content below hero */}
      <PasswordWall
        caseStudySlug="zalando-chatbot"
        correctPassword={password || ""}
      >

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Content */}
        <main className={`${zalandoChatbotConfig.layout.maxWidth} w-full mx-auto`}>
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

                  <div className="border-t border-border my-8 md:my-10"></div>

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

                  <div className="border-t border-border my-6 md:my-8"></div>

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
                      Transform chatbot from cost center to strategic asset through improved automation and customer trust.
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
                            Increase Automation While Maintaining Quality
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Transform the chatbot from a cost center to a strategic asset by dramatically
                            increasing the automation rate for key use cases, particularly delivery issues,
                            without sacrificing the customer experience.
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
                            Reduce Repeat Contacts
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Solve customer problems effectively on the first interaction, eliminating the
                            frustration of having to contact support multiple times for the same issue.
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
                            Rebuild Customer Trust
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Address the fundamental psychological barrier preventing chatbot adoption—deep-seated
                            distrust born from negative past experiences with conversational AI.
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
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Automation Performance</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Improved efficiency and customer satisfaction metrics</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            226%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Increase in automation rate for delivery use cases (from 11.76% to 38.36%)
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            18%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Decrease in Repeated Case Share, proving first-contact resolution improved significantly
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            70%
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            CSAT scores rose significantly in post-launch monitoring
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-3 md:mb-4">
                            €1.34M+
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground">
                            Estimated annualized operational savings from increased automation
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
                      <h3 className="text-2xl md:text-3xl font-normal mb-2 text-center">Customer Feedback</h3>
                      <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-12">Qualitative impact and user testimonials</p>
                      <QuoteBlock
                        quote="Before this user test, I would have opted to call instead of using the chat. Just now, I realize how efficient and workable the chat is. It gives me all the information I need, and it's easy to use. If I had known this before, I would have used it instead of calling."
                        author="User from qualitative testing"
                      />
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
                </div>
              </div>
            </section>

        </main>
      </div>

      {/* Navigation Footer - Outside container for full width */}
      <CaseStudyNavigation
        prev={zalandoChatbotConfig.navigation?.prev}
        next={zalandoChatbotConfig.navigation?.next}
        showBackHome={true}
      />

      </PasswordWall>
    </div>
  )
}
