import { cn } from "@/lib/utils"

interface MetricCardProps {
  value: string
  label: string
  className?: string
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
        {value}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
        {label}
      </div>
    </div>
  )
}

interface QuoteBlockProps {
  quote: string
  author?: string
  role?: string
  className?: string
}

export function QuoteBlock({ quote, author, role, className }: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-primary pl-4 md:pl-6 py-3 md:py-4 my-6 md:my-8 italic text-base md:text-lg text-muted-foreground",
        className
      )}
    >
      <p className="leading-relaxed">{quote}</p>
      {author && (
        <footer className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-foreground not-italic">
          — {author}{role && `, ${role}`}
        </footer>
      )}
    </blockquote>
  )
}
