"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on about page
  if (pathname === "/about") {
    return null
  }
  
  return <Footer />
}
