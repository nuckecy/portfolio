"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

interface ConditionalFooterProps {
  data?: any
}

export function ConditionalFooter({ data }: ConditionalFooterProps) {
  const pathname = usePathname()

  // Hide footer on about page
  if (pathname === "/about") {
    return null
  }

  return <Footer data={data} />
}
