"use client"

import { TubelightNavBar } from "@/components/ui/tubelight-navbar"

interface NavigationProps {
  data?: any
}

export function Navigation({ data }: NavigationProps) {
  return <TubelightNavBar />
}

/*
=== ARCHIVED OLD NAVIGATION CODE ===

This code has been replaced with the TubelightNavBar component.
Original implementation preserved for reference:

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Menu, X } from "lucide-react"
import { navigationConfig } from "@/config/navigation"
import { navigationStyles } from "@/config/styles/navigation"

interface NavigationProps {
  data?: any
}

export function Navigation({ data }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use JSON data with fallback to TypeScript config
  const navConfig = data || navigationConfig

  return (
    <>
      <header className={navigationStyles.header.className}>
        <div className={navigationStyles.container.className}>
          <div className={navigationStyles.wrapper.className}>
            {/* Logo / Name */}
            <Link href={navConfig.brand.logoUrl} className={navigationStyles.brand.link.className}>
              <div className={navigationStyles.brand.logo.className}>
                {navConfig.brand.initials}
              </div>
              <span className={navigationStyles.brand.name.className}>{navConfig.brand.name}</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className={navigationStyles.nav.wrapper.className}>
              {navConfig.links.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={navigationStyles.nav.link.className}
                >
                  <span>{link.label}</span>
                  {link.external && link.showIcon && (
                    link.label === "Linkedin" ? (
                      <Image src="/images/linkedin.svg" alt="LinkedIn" width={16} height={16} className={`${navigationStyles.nav.externalIcon.className} dark:invert`} />
                    ) : (
                      <ExternalLink className={navigationStyles.nav.externalIcon.className} />
                    )
                  )}
                </Link>
              ))}
              {navConfig.settings.showThemeToggle && navigationStyles.themeToggle.show && <ThemeToggle />}
            </nav>

            {/* Mobile Theme Toggle - Always visible */}
            {navConfig.settings.showThemeToggle && (
              <div className="md:hidden">
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6 rounded-t-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-sm font-semibold tracking-tight">Navigation</h2>
            <ul className="space-y-2">
              {navConfig.links.map((link: any) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left text-sm transition-colors hover:text-foreground py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
*/
