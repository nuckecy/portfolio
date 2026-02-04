"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

interface ConditionalFooterProps {
  data?: any
}

export function ConditionalFooter({ data }: ConditionalFooterProps) {
  const pathname = usePathname()

  // Hide footer on about page and presentation pages
  if (pathname === "/about" || pathname.startsWith("/invite/casestudies/zalando")) {
    return null
  }

  return <Footer data={data} />
}
