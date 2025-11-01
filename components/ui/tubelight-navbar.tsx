"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
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
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/otobong/', icon: User },
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
      <div className="flex items-center gap-2 bg-background/5 border border-border/40 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.url)
          const isExternal = item.url.startsWith('http')
          const isLinkedIn = item.name === 'LinkedIn'

          return (
            <Link
              key={item.name}
              href={item.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200",
                "text-foreground/70 hover:text-primary hover:bg-primary/10",
                active && !isExternal && "text-primary",
              )}
            >
              {isLinkedIn ? (
                <>
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="dark:invert"
                  />
                </>
              ) : (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </>
              )}
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

        {/* Divider */}
        <div className="h-6 w-px bg-border/40 mx-1" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={cn(
            "relative cursor-pointer px-5 py-2.5 rounded-full transition-all duration-200",
            "text-foreground/70 hover:text-primary hover:bg-primary/10"
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
