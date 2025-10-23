"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
            OO
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </Link>
          <Link href="/resume" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
