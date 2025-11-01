"use client"

import Link from "next/link"
import { TubelightNavBar } from "@/components/ui/tubelight-navbar"

interface NavigationProps {
  data?: any
}

export function Navigation({ data }: NavigationProps) {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <Link href="#main-content" className="skip-to-main">
        Skip to main content
      </Link>
      <TubelightNavBar />
    </>
  )
}
