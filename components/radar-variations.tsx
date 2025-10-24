"use client"

// Pentagon Radar - Simple 5-category visualization
export function PentagonRadar() {
  const categories = [
    { name: "Product", value: 4.3, color: "#FFD4A3" },
    { name: "Experience", value: 4.7, color: "#FFB3D9" },
    { name: "Visuals", value: 3.7, color: "#B3D9FF" },
    { name: "Software", value: 3.7, color: "#B3F5D9" },
    { name: "People", value: 4.7, color: "#D4B3FF" },
  ]

  const width = 500
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = 180
  const levels = 5

  // Calculate pentagon points
  const points = categories.map((cat, i) => {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
    const radius = (cat.value / 5) * maxRadius
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    return { x, y, angle, ...cat }
  })

  // Create path
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'

  // Background pentagon levels
  const backgroundPentagons = Array.from({ length: levels }, (_, i) => {
    const radius = ((i + 1) / levels) * maxRadius
    const bgPoints = Array.from({ length: 5 }, (_, j) => {
      const angle = (j * 2 * Math.PI) / 5 - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      return `${j === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ') + ' Z'
    return bgPoints
  })

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Background pentagons */}
        {backgroundPentagons.map((bgPath, i) => (
          <path
            key={`bg-${i}`}
            d={bgPath}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
            className="dark:stroke-gray-700"
          />
        ))}

        {/* Radial lines */}
        {points.map((point, i) => {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
          const x2 = centerX + maxRadius * Math.cos(angle)
          const y2 = centerY + maxRadius * Math.sin(angle)
          return (
            <line
              key={`line-${i}`}
              x1={centerX}
              y1={centerY}
              x2={x2}
              y2={y2}
              stroke="#E5E7EB"
              strokeWidth="1"
              className="dark:stroke-gray-700"
            />
          )
        })}

        {/* Filled area with gradient */}
        <defs>
          <linearGradient id="pentagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {categories.map((cat, i) => (
              <stop key={i} offset={`${(i / categories.length) * 100}%`} stopColor={cat.color} stopOpacity="0.6" />
            ))}
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="url(#pentagonGradient)"
          stroke="url(#pentagonGradient)"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r="6"
            fill={point.color}
            stroke="white"
            strokeWidth="2"
            className="dark:stroke-gray-900"
          />
        ))}

        {/* Labels */}
        {points.map((point, i) => {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
          const labelRadius = maxRadius + 50
          const x = centerX + labelRadius * Math.cos(angle)
          const y = centerY + labelRadius * Math.sin(angle)
          
          return (
            <g key={`label-${i}`}>
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
              >
                {point.name}
              </text>
              <text
                x={x}
                y={y + 18}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-gray-500 dark:fill-gray-400"
              >
                {point.value.toFixed(1)}/5.0
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Sunburst/Circular Bars
export function SunburstRadar() {
  const skillsData = [
    { category: "Product", skills: [
      { name: "Business Impact", level: 4 },
      { name: "Market Intelligence", level: 4 },
      { name: "Design Thinking", level: 5 },
    ], color: "#FFD4A3" },
    { category: "Experience", skills: [
      { name: "Interface Design", level: 5 },
      { name: "Interaction Design", level: 5 },
      { name: "Usability & Human Factors", level: 4 },
    ], color: "#FFB3D9" },
    { category: "Visuals", skills: [
      { name: "Brand & Design System", level: 4 },
      { name: "Content Design", level: 4 },
      { name: "Motion Design", level: 3 },
    ], color: "#B3D9FF" },
    { category: "Software", skills: [
      { name: "Voice & Outcomes", level: 3 },
      { name: "Measuring KPIs", level: 4 },
      { name: "Fluency with Data", level: 4 },
    ], color: "#B3F5D9" },
    { category: "People", skills: [
      { name: "Communication", level: 5 },
      { name: "Leadership", level: 4 },
      { name: "Collaboration", level: 5 },
    ], color: "#D4B3FF" },
  ]

  const width = 600
  const height = 600
  const centerX = width / 2
  const centerY = height / 2
  const innerRadius = 60
  const barWidth = 20
  const gap = 3

  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)
  const anglePerSkill = (2 * Math.PI) / totalSkills

  let currentAngle = -Math.PI / 2
  const bars: any[] = []

  skillsData.forEach((category) => {
    category.skills.forEach((skill) => {
      const barLength = (skill.level / 5) * 120
      bars.push({
        startAngle: currentAngle,
        endAngle: currentAngle + anglePerSkill - (gap * Math.PI / 180),
        innerRadius,
        outerRadius: innerRadius + barLength,
        color: category.color,
        skill: skill.name,
        level: skill.level,
        category: category.category
      })
      currentAngle += anglePerSkill
    })
  })

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angle: number) => {
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  }

  const createArcPath = (bar: any) => {
    const innerStart = polarToCartesian(centerX, centerY, bar.innerRadius, bar.startAngle)
    const innerEnd = polarToCartesian(centerX, centerY, bar.innerRadius, bar.endAngle)
    const outerStart = polarToCartesian(centerX, centerY, bar.outerRadius, bar.startAngle)
    const outerEnd = polarToCartesian(centerX, centerY, bar.outerRadius, bar.endAngle)

    const largeArc = bar.endAngle - bar.startAngle > Math.PI ? 1 : 0

    return `
      M ${innerStart.x} ${innerStart.y}
      L ${outerStart.x} ${outerStart.y}
      A ${bar.outerRadius} ${bar.outerRadius} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}
      L ${innerEnd.x} ${innerEnd.y}
      A ${bar.innerRadius} ${bar.innerRadius} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}
      Z
    `
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Bars */}
        {bars.map((bar, i) => (
          <path
            key={i}
            d={createArcPath(bar)}
            fill={bar.color}
            stroke="white"
            strokeWidth="1"
            className="dark:stroke-gray-900 hover:opacity-80 transition-opacity"
          >
            <title>{bar.skill}: {bar.level}/5</title>
          </path>
        ))}

        {/* Center circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="white"
          className="dark:fill-gray-900"
        />
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
        >
          Skills
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {skillsData.map((category, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: category.color }} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{category.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Concentric Rings - Each category is a ring
export function ConcentricRadar() {
  const skillsData = [
    { category: "Product", skills: ["Business Impact", "Market Intelligence", "Design Thinking"], avgLevel: 4.3, color: "#FFD4A3" },
    { category: "Experience", skills: ["Interface Design", "Interaction Design", "Usability"], avgLevel: 4.7, color: "#FFB3D9" },
    { category: "Visuals", skills: ["Brand System", "Content Design", "Motion"], avgLevel: 3.7, color: "#B3D9FF" },
    { category: "Software", skills: ["Voice", "KPIs", "Data"], avgLevel: 3.7, color: "#B3F5D9" },
    { category: "People", skills: ["Communication", "Leadership", "Collaboration"], avgLevel: 4.7, color: "#D4B3FF" },
  ]

  const width = 500
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const ringWidth = 35
  const gap = 5

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {skillsData.map((category, i) => {
          const innerRadius = 50 + i * (ringWidth + gap)
          const outerRadius = innerRadius + ringWidth
          const fillPercentage = category.avgLevel / 5
          const arcLength = fillPercentage * 360

          return (
            <g key={i}>
              {/* Background ring */}
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius + ringWidth / 2}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth={ringWidth}
                className="dark:stroke-gray-800"
              />
              
              {/* Filled arc */}
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius + ringWidth / 2}
                fill="none"
                stroke={category.color}
                strokeWidth={ringWidth - 2}
                strokeDasharray={`${arcLength * 2 * Math.PI * (innerRadius + ringWidth / 2) / 360} ${2 * Math.PI * (innerRadius + ringWidth / 2)}`}
                strokeDashoffset={2 * Math.PI * (innerRadius + ringWidth / 2) / 4}
                strokeLinecap="round"
              />

              {/* Category label */}
              <text
                x={centerX + outerRadius + 15}
                y={centerY + (i - 2) * (ringWidth + gap)}
                className="text-sm font-medium fill-gray-700 dark:fill-gray-300"
              >
                {category.category}
              </text>
              <text
                x={centerX + outerRadius + 15}
                y={centerY + (i - 2) * (ringWidth + gap) + 14}
                className="text-xs fill-gray-500 dark:fill-gray-400"
              >
                {category.avgLevel.toFixed(1)}/5.0
              </text>
            </g>
          )
        })}

        {/* Center */}
        <circle cx={centerX} cy={centerY} r={45} fill="white" className="dark:fill-gray-900" />
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-semibold fill-gray-700 dark:fill-gray-300"
        >
          Overall
        </text>
        <text
          x={centerX}
          y={centerY + 16}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-bold fill-gray-900 dark:fill-gray-100"
        >
          4.2
        </text>
      </svg>
    </div>
  )
}

// Modern Polar Chart
export function PolarRadar() {
  const skills = [
    { name: "Business Impact", level: 4, category: "Product", color: "#FFD4A3" },
    { name: "Market Intelligence", level: 4, category: "Product", color: "#FFD4A3" },
    { name: "Design Thinking", level: 5, category: "Product", color: "#FFD4A3" },
    { name: "Interface Design", level: 5, category: "Experience", color: "#FFB3D9" },
    { name: "Interaction Design", level: 5, category: "Experience", color: "#FFB3D9" },
    { name: "Usability", level: 4, category: "Experience", color: "#FFB3D9" },
    { name: "Brand System", level: 4, category: "Visuals", color: "#B3D9FF" },
    { name: "Content Design", level: 4, category: "Visuals", color: "#B3D9FF" },
    { name: "Motion", level: 3, category: "Visuals", color: "#B3D9FF" },
    { name: "Voice", level: 3, category: "Software", color: "#B3F5D9" },
    { name: "KPIs", level: 4, category: "Software", color: "#B3F5D9" },
    { name: "Data", level: 4, category: "Software", color: "#B3F5D9" },
    { name: "Communication", level: 5, category: "People", color: "#D4B3FF" },
    { name: "Leadership", level: 4, category: "People", color: "#D4B3FF" },
    { name: "Collaboration", level: 5, category: "People", color: "#D4B3FF" },
  ]

  const width = 700
  const height = 400
  const centerX = width / 2
  const centerY = height
  const maxHeight = 320
  const barWidth = 35
  const gap = 8

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Background arcs */}
        {[1, 2, 3, 4, 5].map((level) => {
          const radius = (level / 5) * maxHeight
          return (
            <path
              key={level}
              d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="dark:stroke-gray-700"
            />
          )
        })}

        {/* Bars */}
        {skills.map((skill, i) => {
          const totalBars = skills.length
          const angle = Math.PI * (i / (totalBars - 1))
          const barHeight = (skill.level / 5) * maxHeight
          
          const x1 = centerX + (maxHeight + 20) * Math.cos(Math.PI - angle)
          const y1 = centerY - (maxHeight + 20) * Math.sin(Math.PI - angle)
          const x2 = centerX + barHeight * Math.cos(Math.PI - angle)
          const y2 = centerY - barHeight * Math.sin(Math.PI - angle)

          return (
            <g key={i}>
              <line
                x1={centerX}
                y1={centerY}
                x2={x1}
                y2={y1}
                stroke="#E5E7EB"
                strokeWidth="1"
                className="dark:stroke-gray-700"
              />
              <line
                x1={centerX}
                y1={centerY}
                x2={x2}
                y2={y2}
                stroke={skill.color}
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle
                cx={x2}
                cy={y2}
                r="5"
                fill={skill.color}
                stroke="white"
                strokeWidth="2"
                className="dark:stroke-gray-900"
              />
              
              {/* Labels */}
              <text
                x={x1}
                y={y1 - 10}
                textAnchor="middle"
                className="text-[10px] fill-gray-600 dark:fill-gray-400"
              >
                {skill.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Hybrid Radar + Bars
export function HybridRadar() {
  const categories = [
    { name: "Product", value: 4.3, color: "#FFD4A3", skills: 3 },
    { name: "Experience", value: 4.7, color: "#FFB3D9", skills: 3 },
    { name: "Visuals", value: 3.7, color: "#B3D9FF", skills: 3 },
    { name: "Software", value: 3.7, color: "#B3F5D9", skills: 3 },
    { name: "People", value: 4.7, color: "#D4B3FF", skills: 3 },
  ]

  const width = 600
  const height = 600
  const centerX = width / 2
  const centerY = height / 2
  const outerRadius = 180
  const innerRadius = 100

  // Pentagon points
  const points = categories.map((cat, i) => {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
    const radius = (cat.value / 5) * outerRadius
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    return { x, y, angle, ...cat }
  })

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Pentagon radar */}
        {[1, 2, 3, 4, 5].map((level) => {
          const radius = (level / 5) * outerRadius
          const bgPath = Array.from({ length: 5 }, (_, j) => {
            const angle = (j * 2 * Math.PI) / 5 - Math.PI / 2
            const x = centerX + radius * Math.cos(angle)
            const y = centerY + radius * Math.sin(angle)
            return `${j === 0 ? 'M' : 'L'} ${x} ${y}`
          }).join(' ') + ' Z'
          
          return (
            <path
              key={level}
              d={bgPath}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              className="dark:stroke-gray-700"
            />
          )
        })}

        <path
          d={path}
          fill="url(#hybridGradient)"
          fillOpacity="0.3"
          stroke="url(#hybridGradient)"
          strokeWidth="2"
        />

        <defs>
          <linearGradient id="hybridGradient">
            {categories.map((cat, i) => (
              <stop key={i} offset={`${(i / 5) * 100}%`} stopColor={cat.color} />
            ))}
          </linearGradient>
        </defs>

        {/* Inner bars */}
        {points.map((point, i) => {
          const barHeight = (point.value / 5) * 60
          const barY = centerY - barHeight / 2
          
          return (
            <g key={i}>
              <rect
                x={centerX - 60 + i * 24}
                y={barY}
                width="20"
                height={barHeight}
                fill={point.color}
                rx="3"
              />
              <text
                x={centerX - 50 + i * 24}
                y={centerY + 50}
                textAnchor="middle"
                className="text-[8px] fill-gray-600 dark:fill-gray-400"
              >
                {point.name.slice(0, 3)}
              </text>
            </g>
          )
        })}

        {/* Labels */}
        {points.map((point, i) => {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
          const labelRadius = outerRadius + 40
          const x = centerX + labelRadius * Math.cos(angle)
          const y = centerY + labelRadius * Math.sin(angle)
          
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
            >
              {point.name}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
