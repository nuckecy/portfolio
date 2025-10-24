"use client"

import { useEffect } from "react"
import Image from "next/image"
import { SkillsRadarChart } from "./skills-radar-chart"

interface SkillsRadarOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SkillsRadarOverlay({ isOpen, onClose }: SkillsRadarOverlayProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when overlay is open
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-[700px] lg:w-[850px] xl:w-[1000px] bg-white dark:bg-gray-900 z-50 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 md:px-8 py-6 flex items-center justify-between z-10">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-gray-100">
            Product Design Skills Radar
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close overlay"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8">
          {/* Radar Chart */}
          <SkillsRadarChart />

          {/* Description */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Comprehensive Design Expertise
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              This radar chart visualizes my proficiency across key product design disciplines, 
              from strategic thinking to hands-on execution. Each segment represents a core competency 
              area, with depth indicating experience level.
            </p>
            
            {/* Skill Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-300"></span>
                  Product
                </h4>
                <ul className="text-sm space-y-1 ml-5">
                  <li>Business Impact</li>
                  <li>Market Intelligence</li>
                  <li>Design Thinking</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-pink-300"></span>
                  Experience
                </h4>
                <ul className="text-sm space-y-1 ml-5">
                  <li>Interface Design</li>
                  <li>Interaction Design</li>
                  <li>Usability & Human Factors</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                  Visuals
                </h4>
                <ul className="text-sm space-y-1 ml-5">
                  <li>Brand & Design System</li>
                  <li>Motion Design</li>
                  <li>Content Design</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-300"></span>
                  Software
                </h4>
                <ul className="text-sm space-y-1 ml-5">
                  <li>Fluency with Data</li>
                  <li>Measuring Progress & KPIs</li>
                  <li>Voice & Outcomes</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-300"></span>
                  People
                </h4>
                <ul className="text-sm space-y-1 ml-5">
                  <li>Communication & Storytelling</li>
                  <li>Leadership & Mentoring</li>
                  <li>Cross-functional Collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Level Badges */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
              Hire me for these roles
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600">
                SENIOR DESIGNER
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600">
                PRINCIPAL DESIGNER
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600">
                DESIGN LEAD
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600">
                DESIGN MANAGER
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
