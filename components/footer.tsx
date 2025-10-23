import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-neutral-950 dark:bg-neutral-950 text-neutral-100">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Case Studies */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-medium mb-4 text-neutral-50">Case Studies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-study/fraud-analytics" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Fraud Analytics
                </Link>
              </li>
              <li>
                <Link href="/case-study/specta" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Specta
                </Link>
              </li>
              <li>
                <Link href="/case-study/orgcompass" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  OrgCompass
                </Link>
              </li>
              <li>
                <Link href="/case-study/uba-hcm-connect" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  UBA HCM Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* More Case Studies */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-medium mb-4 opacity-0 md:opacity-100">More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-study/uba-redd" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  UBA REDD
                </Link>
              </li>
              <li>
                <Link href="/case-study/cashamm" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Cashamm
                </Link>
              </li>
              <li>
                <Link href="/case-study/zalando-chatbot" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Zalando Chatbot
                </Link>
              </li>
              <li>
                <Link href="/case-study/zalando-contextual" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Zalando Contextual
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-medium mb-4 text-neutral-50">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resume" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
