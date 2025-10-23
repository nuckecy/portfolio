import { Metadata } from "next"
import { MetricCard, QuoteBlock } from "@/components/case-study-components"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { CaseStudyHero } from "@/components/case-study-hero"
import { Shield, TrendingDown, Users, Zap, AlertTriangle, BarChart3, CheckCircle2, Home } from "lucide-react"
import { fraudAnalyticsConfig } from "@/config/case-studies/fraud-analytics"

export const metadata: Metadata = {
  title: fraudAnalyticsConfig.metadata.title,
  description: fraudAnalyticsConfig.metadata.description,
}

const sections = fraudAnalyticsConfig.sections

export default function FraudAnalyticsCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />

      {/* Hero Section - includes Overview (gray) and Roles & Responsibilities (white) */}
      <CaseStudyHero 
        hero={fraudAnalyticsConfig.hero} 
        overview={fraudAnalyticsConfig.overview}
        metrics={fraudAnalyticsConfig.metrics}
        rolesResponsibilities={fraudAnalyticsConfig.rolesResponsibilities}
      />

      {/* The Challenge - White Background (no images) */}
      <section id="challenge" className="w-full py-12 md:py-16 bg-background scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">The Challenge</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-red-500/20 bg-red-500/5">
              <CardContent className="pt-6">
                <AlertTriangle className="w-8 h-8 mb-4 text-red-500" />
                <h3 className="text-xl font-normal mb-3">Rising Fraud Rates</h3>
                <p className="text-muted-foreground">
                  Sophisticated fraud attacks were increasing in frequency and complexity, with traditional 
                  rule-based systems unable to detect evolving fraud patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500/20 bg-orange-500/5">
              <CardContent className="pt-6">
                <TrendingDown className="w-8 h-8 mb-4 text-orange-500" />
                <h3 className="text-xl font-normal mb-3">Reactive Approach</h3>
                <p className="text-muted-foreground">
                  Fraud was only investigated after occurrence, leading to customer fund losses and 
                  damaged trust in the bank's security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-500/20 bg-yellow-500/5">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mb-4 text-yellow-500" />
                <h3 className="text-xl font-normal mb-3">Analyst Overload</h3>
                <p className="text-muted-foreground">
                  High false positive rates created alert fatigue, with analysts overwhelmed by 
                  investigating legitimate customer activities flagged as suspicious.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/20 bg-blue-500/5">
              <CardContent className="pt-6">
                <BarChart3 className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-normal mb-3">Limited Visibility</h3>
                <p className="text-muted-foreground">
                  Fragmented data sources made it difficult for analysts to get a complete picture 
                  of customer behavior and transaction patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          <QuoteBlock quote="How might we proactively prevent fraud while maintaining a frictionless experience for legitimate customers?" />
        </div>
      </section>

      {/* Solution - Gray Background (has images) */}
      <section id="solution" className="w-full py-12 md:py-16 bg-muted/50 scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">Solution</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I designed a comprehensive fraud analytics platform that combines AI-powered behavioral 
              analysis with human expertise. The system learns normal customer patterns and flags anomalies 
              in real-time, enabling analysts to prevent fraud before it impacts customers.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl overflow-hidden border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">Solution Overview: AI-Powered Detection Interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process - Gray Background (has images) */}
      <section id="design-process" className="w-full py-12 md:py-16 bg-muted/50 scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">Design Process</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-normal mb-6">1. Research & Discovery</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I conducted interviews with fraud analysts, reviewed hundreds of fraud cases, and analyzed 
                the existing detection workflow to understand pain points and opportunities.
              </p>
              
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl overflow-hidden border border-border mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">User Research: Analyst Interviews & Workflow Mapping</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h4 className="font-medium mb-4">Key Insights</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>Analysts spent 70% of their time investigating false positives</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>Context switching between multiple systems reduced efficiency by 40%</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>Lack of behavioral patterns made it difficult to distinguish fraud from normal activity</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-6">2. Ideation & Wireframing</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Working closely with fraud analysts, I created wireframes that prioritized actionable insights 
                and reduced cognitive load through progressive disclosure of information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl overflow-hidden border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Shield className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground">Early Wireframes: Dashboard Layout</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl overflow-hidden border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground">Alert Detail View Wireframes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-6">3. Testing & Iteration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I conducted usability testing with 8 fraud analysts, iterating on the design based on 
                their feedback. The final design reduced average investigation time from 15 minutes to 4 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Gray Background (has images) */}
      <section id="key-features" className="w-full py-12 md:py-16 bg-muted/50 scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">Key Features</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-normal mb-4">Real-Time Behavioral Analysis</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The AI engine monitors every transaction against learned behavioral patterns, instantly 
                flagging anomalies while explaining the reasoning behind each alert.
              </p>
              
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Zap className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">Feature: Real-Time Detection Dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-4">Intelligent Alert Prioritization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Machine learning ranks alerts by risk score and confidence level, ensuring analysts 
                focus on the most critical threats first.
              </p>
              
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">Feature: Prioritized Alert Queue</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-4">Unified Investigation Workspace</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All customer data, transaction history, and behavioral insights consolidated in a single 
                view, eliminating context switching and reducing investigation time.
              </p>
              
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">Feature: Investigation Workspace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact - White Background (no images) */}
      <section id="impact" className="w-full py-12 md:py-16 bg-background scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">Impact</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The fraud analytics platform transformed Sterling Bank's approach to financial crime prevention, 
              delivering measurable improvements across multiple dimensions while enhancing both analyst 
              efficiency and customer trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border-2 border-green-500/20">
              <div className="text-4xl md:text-5xl font-light mb-2">78%</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Fraud Reduction</div>
              <p className="text-muted-foreground">
                Successful fraud attempts decreased dramatically through proactive detection and prevention.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border-2 border-blue-500/20">
              <div className="text-4xl md:text-5xl font-light mb-2">€2.3M</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Annual Savings</div>
              <p className="text-muted-foreground">
                Combined savings from prevented fraud, reduced investigation costs, and lower legal fees.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border-2 border-purple-500/20">
              <div className="text-4xl md:text-5xl font-light mb-2">92%</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Analyst Satisfaction</div>
              <p className="text-muted-foreground">
                Analysts reported significantly improved workflow efficiency and job satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border-2 border-orange-500/20">
              <div className="text-4xl md:text-5xl font-light mb-2">-73%</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">False Positives</div>
              <p className="text-muted-foreground">
                Machine learning dramatically reduced alert fatigue by filtering out legitimate activities.
              </p>
            </div>
          </div>

          <QuoteBlock 
            quote="This platform has completely changed how we work. We're now preventing fraud before it happens, not just reacting to it. The time savings alone have been incredible." 
            author="Senior Fraud Analyst, Sterling Bank"
          />
        </div>
      </section>

      {/* Key Learnings - White Background (no images) */}
      <section id="learnings" className="w-full py-12 md:py-16 bg-background scroll-mt-24">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-wider mb-8">Key Learnings</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal mb-3">Design for Expertise, Not Simplification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fraud analysts are domain experts who need powerful tools, not oversimplified interfaces. 
                The key is organizing complexity through clear information hierarchy and progressive disclosure, 
                not hiding it.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-normal mb-3">AI Transparency Builds Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Showing analysts why the AI flagged something as suspicious (behavioral patterns, risk factors) 
                was crucial for adoption. Black box AI decisions were met with skepticism and resistance.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-normal mb-3">Context is Everything</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reducing context switching by consolidating information had a bigger impact on efficiency 
                than any individual feature. Analysts needed to see the full picture in one place.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-normal mb-3">Iterate with Real Cases</h3>
              <p className="text-muted-foreground leading-relaxed">
                Testing with actual fraud cases, not hypothetical scenarios, revealed critical edge cases 
                and workflow needs that wouldn't have been discovered otherwise.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm">
              <a 
                href="/case-study/orgcompass" 
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>OrgCompass</span>
              </a>
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </a>
              <a 
                href="/case-study/specta" 
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Specta</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
