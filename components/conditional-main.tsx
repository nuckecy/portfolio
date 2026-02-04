"use client"

import { usePathname } from "next/navigation"

export function ConditionalMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Don't wrap presentation routes in <main>
  if (pathname.startsWith("/invite/casestudies/zalando")) {
    return <>{children}</>
  }

  return <main id="main-content">{children}</main>
}
