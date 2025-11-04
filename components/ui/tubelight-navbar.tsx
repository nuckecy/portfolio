"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { LucideIcon, Home, User, Briefcase, FileText, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

export function TubelightNavBar({ className }: NavBarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Case Studies', url: '/case-studies', icon: Briefcase },
    { name: 'Resume', url: '/resume', icon: FileText },
  ]

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isActive = (url: string) => {
    if (url.startsWith('http')) return false // External links not active

    // Mark "Case Studies" as active for individual case study pages
    if (url === '/case-studies' && pathname.startsWith('/case-study/')) {
      return true
    }

    return pathname === url || pathname.startsWith(url + '/')
  }

  if (!mounted) return null

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-3",
        className,
      )}
    >
      <div className="flex items-center gap-1 md:gap-2 bg-background/80 border border-border dark:border-gray-600 backdrop-blur-lg py-2 px-2 md:px-3 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.url)
          const isExternal = item.url.startsWith('http')

          return (
            <Link
              key={item.name}
              href={item.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-5 py-2.5 rounded-full transition-all duration-200",
                "text-foreground hover:text-primary hover:bg-primary/10",
                active && !isExternal && "text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {active && !isExternal && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -bottom-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -bottom-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm bottom-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        {/* LinkedIn Icon (replaces divider on mobile) */}
        <Link
          href="https://www.linkedin.com/in/otobong/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer text-sm font-semibold px-3 md:px-5 py-2.5 rounded-full transition-all duration-200",
            "text-foreground hover:text-primary hover:bg-primary/10"
          )}
          aria-label="LinkedIn"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="inline-block"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </Link>

        {/* Divider - hidden on mobile */}
        <div className="hidden md:block h-6 w-px bg-border/40 mx-1" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={cn(
            "relative cursor-pointer px-3 md:px-5 py-2.5 rounded-full transition-all duration-200",
            "text-foreground hover:text-primary hover:bg-primary/10"
          )}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={18} strokeWidth={2.5} />
          ) : (
            <Moon size={18} strokeWidth={2.5} />
          )}
        </button>
      </div>
    </div>
  )
}
