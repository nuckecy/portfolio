"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  sections: { id: string; title: string }[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-120px 0px -35% 0px",
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Offset to account for navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6 rounded-t-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-sm font-semibold tracking-tight">Contents</h2>
            <ul className="space-y-2">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={cn(
                      "block w-full text-left text-sm transition-colors hover:text-foreground py-2",
                      activeSection === id
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="sticky top-24 hidden lg:block">
        <div className="space-y-1">
          <h2 className="mb-4 text-sm font-semibold tracking-tight">Contents</h2>
          <ul className="space-y-2">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "block w-full text-left text-sm transition-colors hover:text-foreground py-1",
                    activeSection === id
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
