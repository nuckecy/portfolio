"use client"

interface Skill {
  name: string
  level: number // 1-5 scale
}

interface SkillCategory {
  name: string
  color: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    name: "Product",
    color: "#FFD4A3",
    skills: [
      { name: "Business Impact", level: 4 },
      { name: "Market Intelligence", level: 4 },
      { name: "Design Thinking", level: 5 },
    ]
  },
  {
    name: "Experience",
    color: "#FFB3D9",
    skills: [
      { name: "Interface Design", level: 5 },
      { name: "Interaction Design", level: 5 },
      { name: "Usability & Human Factors", level: 4 },
    ]
  },
  {
    name: "Visuals",
    color: "#B3D9FF",
    skills: [
      { name: "Brand & Design System", level: 4 },
      { name: "Content Design", level: 4 },
      { name: "Motion Design", level: 3 },
    ]
  },
  {
    name: "Software",
    color: "#B3F5D9",
    skills: [
      { name: "Voice & Outcomes", level: 3 },
      { name: "Measuring progress & KPIs", level: 4 },
      { name: "Fluency with Data", level: 4 },
    ]
  },
  {
    name: "People",
    color: "#D4B3FF",
    skills: [
      { name: "Communication & Storytelling", level: 5 },
      { name: "Leadership & Mentoring", level: 4 },
      { name: "Cross-functional Collaboration", level: 5 },
    ]
  },
]

export function SkillsRadarChart() {
  const width = 600
  const height = 600
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = 200
  const levels = 5
  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)
  
  // Calculate angle for each skill
  let currentAngle = -Math.PI / 2 // Start at top
  const angleStep = (2 * Math.PI) / totalSkills
  
  // Generate path data for each category
  const categoryPaths: { category: SkillCategory; path: string; points: {x: number, y: number, skill: Skill, angle: number}[] }[] = []
  
  skillsData.forEach(category => {
    const points: {x: number, y: number, skill: Skill, angle: number}[] = []
    
    category.skills.forEach(skill => {
      const radius = (skill.level / levels) * maxRadius
      const x = centerX + radius * Math.cos(currentAngle)
      const y = centerY + radius * Math.sin(currentAngle)
      
      points.push({ x, y, skill, angle: currentAngle })
      currentAngle += angleStep
    })
    
    // Create path for this category
    const pathData = points.map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`
      return `L ${p.x} ${p.y}`
    }).join(' ') + ' Z'
    
    categoryPaths.push({ category, path: pathData, points })
  })

  // Generate concentric circles for levels
  const concentricCircles = Array.from({ length: levels }, (_, i) => {
    const radius = ((i + 1) / levels) * maxRadius
    return radius
  })

  // Generate radial lines
  const radialLines: {x1: number, y1: number, x2: number, y2: number}[] = []
  let lineAngle = -Math.PI / 2
  for (let i = 0; i < totalSkills; i++) {
    const x2 = centerX + maxRadius * Math.cos(lineAngle)
    const y2 = centerY + maxRadius * Math.sin(lineAngle)
    radialLines.push({ x1: centerX, y1: centerY, x2, y2 })
    lineAngle += angleStep
  }

  // Generate labels
  const labels: {x: number, y: number, text: string, angle: number}[] = []
  let labelAngle = -Math.PI / 2
  skillsData.forEach(category => {
    category.skills.forEach(skill => {
      const labelRadius = maxRadius + 40
      const x = centerX + labelRadius * Math.cos(labelAngle)
      const y = centerY + labelRadius * Math.sin(labelAngle)
      
      labels.push({ x, y, text: skill.name, angle: labelAngle })
      labelAngle += angleStep
    })
  })

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Concentric circles */}
        {concentricCircles.map((radius, i) => (
          <circle
            key={`circle-${i}`}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="dark:stroke-gray-700"
          />
        ))}

        {/* Radial lines */}
        {radialLines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="dark:stroke-gray-700"
          />
        ))}

        {/* Category areas */}
        {categoryPaths.map(({ category, path, points }, i) => (
          <g key={`category-${i}`}>
            <path
              d={path}
              fill={category.color}
              fillOpacity="0.6"
              stroke={category.color}
              strokeWidth="2"
              className="transition-opacity hover:fill-opacity-80"
            />
            {/* Data points */}
            {points.map((point, j) => (
              <circle
                key={`point-${i}-${j}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill={category.color}
                stroke="white"
                strokeWidth="2"
                className="dark:stroke-gray-900"
              />
            ))}
          </g>
        ))}

        {/* Category labels in center ring */}
        {categoryPaths.map(({ category, points }, i) => {
          // Calculate center point of category
          const avgAngle = points.reduce((sum, p) => sum + p.angle, 0) / points.length
          const labelRadius = maxRadius * 0.4
          const x = centerX + labelRadius * Math.cos(avgAngle)
          const y = centerY + labelRadius * Math.sin(avgAngle)
          
          return (
            <text
              key={`cat-label-${i}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
            >
              {category.name}
            </text>
          )
        })}

        {/* Skill labels outside */}
        {labels.map((label, i) => {
          const angle = label.angle * (180 / Math.PI)
          const isRightSide = Math.cos(label.angle) > 0
          
          return (
            <text
              key={`label-${i}`}
              x={label.x}
              y={label.y}
              textAnchor={isRightSide ? "start" : "end"}
              dominantBaseline="middle"
              className="text-[10px] fill-gray-600 dark:fill-gray-400"
              transform={`rotate(${isRightSide ? angle : angle + 180}, ${label.x}, ${label.y})`}
            >
              {label.text}
            </text>
          )
        })}

        {/* Center circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r="50"
          fill="white"
          className="dark:fill-gray-900"
        />
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {skillsData.map((category, i) => (
          <div key={`legend-${i}`} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: category.color }}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
