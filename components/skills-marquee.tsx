"use client"

interface SkillsMarqueeProps {
  skills: string[]
  pillClassName: string
  onSkillClick?: () => void
}

export function SkillsMarquee({ skills, pillClassName, onSkillClick }: SkillsMarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-2 animate-marquee hover:pause-marquee">
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <span 
            key={`first-${index}`} 
            className={pillClassName}
            onClick={onSkillClick}
          >
            {skill}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <span 
            key={`second-${index}`} 
            className={pillClassName}
            onClick={onSkillClick}
          >
            {skill}
          </span>
        ))}
        {/* Third set to ensure no gap */}
        {skills.map((skill, index) => (
          <span 
            key={`third-${index}`} 
            className={pillClassName}
            onClick={onSkillClick}
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Fade effect on both ends */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  )
}
