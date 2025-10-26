"use client"

import { useState } from "react"
import Image from "next/image"

export function SolutionArchitectureSection() {
  const [activeComponent, setActiveComponent] = useState<number | null>(0)

  const components = [
    {
      title: "Active Returns Dashboard",
      description: "Real-time status tracking with predictive delivery estimates, contextual action buttons, proactive problem alerts, and visual timeline",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    {
      title: "Intelligent Information Architecture",
      description: "Personalized content ranking, progressive disclosure, cross-reference integration, and multi-modal content",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    },
    {
      title: "Proactive Communication System",
      description: "Predictive notifications, contextual messaging adapting to emotional state, multi-channel coordination, and escalation prevention",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80"
    }
  ]

  return (
    <div>
      {/* Centered Title and Description */}
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
            Solution
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Solution Architecture</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          A comprehensive framework built on three core pillars designed to transform customer
          support from reactive to proactive.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Left Column - Image */}
        <div className="rounded-xl overflow-hidden bg-muted/20 min-h-[400px] lg:col-span-2">
          {activeComponent !== null && (
            <Image
              src={components[activeComponent].image}
              alt={components[activeComponent].title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Right Column - Accordion */}
        <div>

        <div className="space-y-2">
          {components.map((component, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all ${
                activeComponent === index
                  ? 'border-l-4 border-blue-600 pl-6 py-4'
                  : 'border-l-4 border-gray-400 pl-6 py-4'
              }`}
              onClick={() => setActiveComponent(activeComponent === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg md:text-xl font-medium">
                  {component.title}
                </h4>
                <span className="text-xl">
                  {activeComponent === index ? "−" : "+"}
                </span>
              </div>

              {activeComponent === index && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3">
                  {component.description}
                </p>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
