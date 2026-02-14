"use client"

import { Navigation } from "@/components/navigation"

interface ConditionalNavigationProps {
  data?: any
}

export function ConditionalNavigation({ data }: ConditionalNavigationProps) {
  return <Navigation data={data} />
}
