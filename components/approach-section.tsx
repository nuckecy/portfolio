"use client"

import { useState } from "react"
import Image from "next/image"

export function ApproachSection() {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(0)

  const principles = [
    {
      title: "Anticipatory Design",
      description: "Predict customer needs based on order status, behavior, and historical patterns, surfacing information before customers realize they need it",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    },
    {
      title: "Contextual Intelligence",
      description: "Personalize content based on individual customer context, integrating cross-platform behavioral data for seamless experiences",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    },
    {
      title: "Trust Through Transparency",
      description: "Provide real-time, accurate status information with clear process explanations and realistic timelines",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    },
    {
      title: "Emotional Journey Design",
      description: "Address anxiety proactively during uncertain moments, celebrate positive moments, and provide reassurance during problem resolution",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    }
  ]

  return (
    <>
      {/* Centered Title and Description */}
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-xs font-medium uppercase tracking-wide px-3 py-1.5 bg-primary/10 text-primary rounded">
            Approach
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">Core Design Principles</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Four strategic pillars that guide the design of proactive customer support experiences.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Left Column - Visual */}
        <div className="rounded-xl overflow-hidden bg-muted/20 min-h-[400px] lg:col-span-2">
          {activePrinciple !== null && (
            <Image
              src={principles[activePrinciple].image}
              alt={principles[activePrinciple].title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Right Column - Accordion */}
        <div>
          <div className="space-y-2">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all ${
                  activePrinciple === index
                    ? 'border-l-4 border-blue-600 pl-6 py-4'
                    : 'border-l-4 border-gray-400 pl-6 py-4'
                }`}
                onClick={() => setActivePrinciple(activePrinciple === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg md:text-xl font-medium">
                    {principle.title}
                  </h4>
                  <span className="text-xl">
                    {activePrinciple === index ? "−" : "+"}
                  </span>
                </div>

                {activePrinciple === index && (
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3">
                    {principle.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
