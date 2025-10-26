import Link from "next/link"

interface CaseStudyNavigationLink {
  url: string
  label: string
}

interface CaseStudyNavigationProps {
  prev?: CaseStudyNavigationLink
  next?: CaseStudyNavigationLink
  showBackHome?: boolean
}

export function CaseStudyNavigation({ prev, next, showBackHome = true }: CaseStudyNavigationProps) {
  return (
    <div className="w-full px-4 md:px-8 pt-8 md:pt-12 pb-8 md:pb-10 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-xs">
          {/* Previous Link */}
          {prev ? (
            <a
              href={prev.url}
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span className="font-medium">{prev.label}</span>
            </a>
          ) : (
            <div />
          )}

          {/* Back to Home Link */}
          {showBackHome && (
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          )}

          {/* Next Link */}
          {next ? (
            <a
              href={next.url}
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="font-medium">{next.label}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
