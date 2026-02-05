'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HomeIcon() {
  const pathname = usePathname();

  // Hide on zal-csh presentation page
  if (pathname.startsWith("/invite/casestudies/zal-csh")) {
    return null;
  }

  return (
    <Link
      href="/"
      style={{
        position: 'fixed',
        top: 16,
        left: 16,
        zIndex: 1000,
        color: 'rgba(255,255,255,0.5)',
        padding: 8,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </Link>
  );
}
