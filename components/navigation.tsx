"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Menu, X } from "lucide-react"
import { useState } from "react"
import { navigationConfig } from "@/config/navigation"
import { navigationStyles } from "@/config/styles/navigation"

interface NavigationProps {
  data?: any
}

export function Navigation({ data }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

      {/* Mobile Floating Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={navigationStyles.mobileMenu.button.className}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className={navigationStyles.mobileMenu.overlay.className}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={navigationStyles.mobileMenu.panel.className}>
            <nav className={navigationStyles.mobileMenu.nav.className}>
              {navConfig.links.map((link: any) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={navigationStyles.mobileMenu.link.className}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.external && link.showIcon && (
                    link.label === "Linkedin" ? (
                      <Image src="/images/linkedin.svg" alt="LinkedIn" width={16} height={16} className="w-4 h-4 dark:invert" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
