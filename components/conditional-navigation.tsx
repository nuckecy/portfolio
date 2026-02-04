"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"

interface ConditionalNavigationProps {
  data?: any
}

export function ConditionalNavigation({ data }: ConditionalNavigationProps) {
  const pathname = usePathname()

  // Hide navigation on presentation pages
  if (pathname.startsWith("/invite/casestudies/zalando")) {
    return null
  }

  return <Navigation data={data} />
}
