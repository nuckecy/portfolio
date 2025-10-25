import Link from "next/link"
import { useState, useEffect } from "react"
import { getComponentData } from "@/lib/load-json"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [jsonData, setJsonData] = useState<any>(null)
  
  useEffect(() => {
    setJsonData(getComponentData('footer'))
  }, [])
  
  // Default footer data if JSON not available
  const defaultFooter = {
    sections: [
      {
        title: "Case Studies",
        links: [
          { label: "Fraud Analytics", href: "/case-study/fraud-analytics" },
          { label: "Specta", href: "/case-study/specta" },
          { label: "OrgCompass", href: "/case-study/orgcompass" },
          { label: "UBA HCM Connect", href: "/case-study/uba-hcm-connect" },
        ]
      },
      {
        title: "More",
        links: [
          { label: "UBA REDD", href: "/case-study/uba-redd" },
          { label: "Cashamm", href: "/case-study/cashamm" },
          { label: "Zalando Chatbot", href: "/case-study/zalando-chatbot" },
          { label: "Zalando Contextual", href: "/case-study/zalando-contextual" },
        ]
      },
      {
        title: "Connect",
        links: [
          { label: "Resume", href: "/resume", external: false },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/otobong/", external: true },
          { label: "Email", href: "mailto:hello@example.com", external: false },
        ]
      }
    ],
    copyright: `© ${currentYear} Otobong Okoko. All rights reserved.`
  }
  
  const footerData = jsonData || defaultFooter

  return (
    <footer className="border-t border-border bg-neutral-950 dark:bg-neutral-950 text-neutral-100">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {footerData.sections.map((section: any, sectionIndex: number) => (
            <div 
              key={sectionIndex} 
              className={sectionIndex === footerData.sections.length - 1 ? "col-span-2 md:col-span-1" : "flex flex-col items-center md:items-start"}
            >
              <h3 className="text-sm font-medium mb-4 text-neutral-50 text-center md:text-left">
                {section.title}
              </h3>
              <ul className={sectionIndex === footerData.sections.length - 1 ? "flex flex-wrap justify-center md:flex-col md:justify-start gap-x-6 gap-y-2 text-sm" : "space-y-2 text-sm flex flex-col items-center md:items-start"}>
                {section.links.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-neutral-400 hover:text-neutral-100 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-neutral-400 hover:text-neutral-100 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
