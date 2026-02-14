"use client"

import { useState } from "react"
import { SkillsRadarChart } from "@/components/skills-radar-chart"
import { 
  PentagonRadar, 
  SunburstRadar, 
  ConcentricRadar, 
  PolarRadar, 
  HybridRadar 
} from "@/components/radar-variations"

// We'll create different radar variations
const radarOptions = [
  { id: 1, name: "Current Multi-Skill Radar", component: "current" },
  { id: 2, name: "Pentagon Radar (5 Categories)", component: "pentagon" },
  { id: 3, name: "Sunburst/Circular Bars", component: "sunburst" },
  { id: 4, name: "Concentric Rings", component: "concentric" },
  { id: 5, name: "Modern Polar Chart", component: "polar" },
  { id: 6, name: "Hybrid Radar + Bars", component: "hybrid" },
]

export default function RadarPreviewPage() {
  const [selectedRadar, setSelectedRadar] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-gray-100">
            Skills Radar Options
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Preview different visualization styles for your skills radar
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedRadar(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRadar === null
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
            }`}
          >
            Show All
          </button>
          {radarOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedRadar(option.component)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedRadar === option.component
                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              }`}
            >
              Option {option.id}
            </button>
          ))}
        </div>

        {/* Radar Displays */}
        <div className="grid gap-12">
          {radarOptions
            .filter((option) => !selectedRadar || option.component === selectedRadar)
            .map((option) => (
              <div
                key={option.id}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm"
              >
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-gray-100">
                      Option {option.id}: {option.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Component: {option.component}
                    </p>
                  </div>

                  {/* Render the appropriate radar component */}
                  <div className="flex justify-center">
                    {option.component === "current" && <SkillsRadarChart />}
                    {option.component === "pentagon" && <PentagonRadar />}
                    {option.component === "sunburst" && <SunburstRadar />}
                    {option.component === "concentric" && <ConcentricRadar />}
                    {option.component === "polar" && <PolarRadar />}
                    {option.component === "hybrid" && <HybridRadar />}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
