"use client"

import { ReactNode, useState } from 'react'
import { ExpandableText } from './expandable-text'

interface Experience {
  company: string
  location: string
  position: string
  dateRange: string
  description: string
  achievements: string[]
  projects?: Project[]
}

interface Project {
  title: string
  problem: string
  solution: string
  impacts: string[]
}

const experiences: Experience[] = [
  {
    company: "ZALANDO SE",
    location: "Berlin, Germany",
    position: "Senior Product Designer, Customer Care Pillar",
    dateRange: "Nov 2021 - Present",
    description: "I lead the end-to-end design for the customer care division at Europe's largest fashion e-commerce platform. My focus has been on initiatives that improve customer support experiences while making our operations more efficient.",
    achievements: [],
    projects: [
      {
        title: "Customer Care: Contextual Self-Help",
        problem: "Dealing with approximately 20 million customer inquiries every year. We needed a better way to solve customer challenges without them having to make multiple contacts.",
        solution: "Designed a data-driven contextual support system that gave customers personalized self-service options. My technical background as a UX engineer allowed me to collaborate with engineering on a smart content delivery API that cut down page load time by 35%.",
        impacts: [
          "Reduced support ticket volume by 42%",
          "Decreased resolution time from over 24 hours to under 3 hours",
          "Improved customer satisfaction scores by 28%",
          "Generated €3.4M in annual operational savings"
        ]
      },
      {
        title: "Guided Conversational Chatbot",
        problem: "Old chatbot was rigid with 78% abandonment rate and 43% escalation to human agents. Customers felt trapped in loops and kept having to repeat themselves.",
        solution: "By analyzing over 100 customer histories, I designed a new conversational architecture using natural language understanding with dynamic conversation paths that adapt to customer's emotional cues. Included multi-modal confirmation states to keep customers confident.",
        impacts: [
          "Increased automation rate by 34%, beating target by 9%",
          "Reduced average handling time by 47%",
          "Improved first-contact resolution rate by 23%"
        ]
      },
      {
        title: "Accessibility Transformation Initiative",
        problem: "78% of customer-facing interfaces had major WCAG compliance issues, excluding 15% of potential customers and creating legal/reputational risks.",
        solution: "Drove WCAG compliance solution for Customer Care touchpoints. Optimized and tested designs to achieve AA and AAA accessibility compliance for web forms, FAQs, and contextual self-help tools.",
        impacts: [
          "Achieved WCAG 2.1 AA compliance across 94% of customer interfaces",
          "Expanded potential market by approximately 2.3 million new customers",
          "Reduced legal compliance risk by 65%"
        ]
      }
    ]
  },
  {
    company: "UNITED BANK OF AFRICA",
    location: "Lagos, Nigeria",
    position: "Design Lead",
    dateRange: "Jan 2020 - Nov 2021",
    description: "Directed the design strategy for a pan-African financial institution, leading and managing design and engineering teams to deliver digital transformation initiatives that redefined banking experiences for over 20 million customers across 20 countries.",
    achievements: [
      "Established the bank's first comprehensive design system with 120+ reusable components, increasing design-to-development velocity by 65%",
      "Elevated organizational UX maturity through structured stakeholder engagement, improving cross-functional collaboration by 60%",
      "Mentored a team of four designers and one intern, developing their skills and careers",
      "Led 20+ designers, engineers, product managers, and analysts through complete product lifecycle"
    ],
    projects: [
      {
        title: "HCM CONNECT",
        problem: "Fragmented HR infrastructure creating significant vulnerabilities. Disconnected systems caused payroll errors, wasted 30+ weekly hours on manual reconciliation, and risked $1.2M in costs annually.",
        solution: "Led architecture and design of centralized employee management ecosystem consolidating seven systems into single source of truth. Developed intelligent data integration layer with real-time synchronization and automated validation checks maintaining 99.7% data integrity.",
        impacts: [
          "Eliminated $80,000 in monthly license fees",
          "Improved HR team productivity by 43%",
          "Reduced compliance reporting time from 3 days to 4 hours",
          "Contributed to 8% annual profitability improvement"
        ]
      }
    ]
  },
  {
    company: "STERLING BANK PLC",
    location: "Lagos, Nigeria",
    position: "Product Designer & UX Engineer",
    dateRange: "Jan 2014 - Jan 2020",
    description: "Over eight years, evolved from frontend engineer to senior product designer, playing a key role in digital transformation initiatives that redefined the bank's customer experience strategy and technical approach.",
    achievements: [
      "Collaborated with cross-functional teams to develop comprehensive product roadmaps",
      "Conducted thorough requirements analysis, user research, and usability testing for data-driven decisions",
      "Created production-ready UI components in HTML, CSS, and JavaScript",
      "Provided technical support during design hand-off ensuring designs were feasible and correctly implemented"
    ],
    projects: [
      {
        title: "Specta (Digital Lending Platform)",
        problem: "Nigeria's lending system was inefficient, taking 14-21 days for approval with extensive paperwork. This resulted in 68% application abandonment rate and limited market reach.",
        solution: "Architected Nigeria's first fully digital lending platform using biometric identity verification and real-time credit scoring for 5-minute loan approvals. Research-validated interface used progressive disclosure to boost completion rates.",
        impacts: [
          "Facilitated N20 billion ($55 million) in loan disbursements",
          "Achieved 5-minute loan approval vs. 14-21 days previously",
          "Increased completion rates by 82% above industry standards"
        ]
      }
    ]
  }
]

export function ExperienceSection() {
  const [expandedProjects, setExpandedProjects] = useState<{[key: string]: boolean}>({})
  
  const toggleProject = (key: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }
  
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
      </div>

            {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          {/* LinkedIn-Style Header with Logo */}
          <div className="flex gap-3 mb-4">
            {/* Company Logo Placeholder */}
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-gray-600 dark:text-gray-400 font-semibold text-lg">
              {exp.company.charAt(0)}
            </div>
            
            {/* Company & Position Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.position}
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {exp.company}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                <span>{exp.dateRange}</span>
                <span>·</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Description - Make expandable if long */}
          {exp.description.length > 200 ? (
            <ExpandableText 
              text={exp.description}
              maxLength={200}
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm"
            />
          ) : (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
              {exp.description}
            </p>
          )}

          {/* Achievements List - Show first 3, expandable for more */}
          {exp.achievements.length > 0 && (
            <div className="mb-6">
              <div className="space-y-2">
                {exp.achievements.slice(0, 3).map((achievement, aidx) => (
                  <div key={aidx} className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex-shrink-0 mt-1">
                      •
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
                
                {/* Show remaining achievements if expanded */}
                {expandedProjects[`achievements-${idx}`] && exp.achievements.length > 3 && (
                  exp.achievements.slice(3).map((achievement, aidx) => (
                    <div key={aidx + 3} className="flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex-shrink-0 mt-1">
                        •
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))
                )}
              </div>
              
              {/* Show more/less button for achievements */}
              {exp.achievements.length > 3 && (
                <button
                  onClick={() => toggleProject(`achievements-${idx}`)}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm mt-2"
                >
                  {expandedProjects[`achievements-${idx}`] ? 'Show less' : `Show ${exp.achievements.length - 3} more`}
                </button>
              )}
            </div>
          )}

          {/* Projects */}
          {exp.projects && exp.projects.length > 0 && (
            <div className="space-y-6 mt-6 pl-4 border-l-2 border-blue-200 dark:border-blue-900">
              {exp.projects.map((project, pidx) => (
                <div key={pidx} className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                    {project.title}
                  </h4>

                  {/* Problem */}
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                      Problem
                    </p>
                    <ExpandableText 
                      text={project.problem}
                      maxLength={150}
                      className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                    />
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                      Solution
                    </p>
                    <ExpandableText 
                      text={project.solution}
                      maxLength={150}
                      className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                    />
                  </div>

                  {/* Impact */}
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                      Impact
                    </p>
                    <div className="space-y-1">
                      {project.impacts.map((impact, iidx) => (
                        <div key={iidx} className="flex gap-2">
                          <span className="text-blue-500 dark:text-blue-400 text-sm flex-shrink-0">
                            →
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
