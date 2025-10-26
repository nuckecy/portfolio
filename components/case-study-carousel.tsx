"use client"

import { useState } from "react"
import Image from "next/image"

interface CarouselImage {
  url: string
  alt: string
}

interface CaseStudyCarouselProps {
  images: CarouselImage[]
}

export function CaseStudyCarousel({ images }: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = (index: number) => {
    return (index + 1) % images.length
  }

  const prevImage = (index: number) => {
    return (index - 1 + images.length) % images.length
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNext = () => {
    setCurrentIndex(nextImage(currentIndex))
  }

  const goToPrev = () => {
    setCurrentIndex(prevImage(currentIndex))
  }

  const isFirstImage = currentIndex === 0
  const isLastImage = currentIndex === images.length - 1

  return (
    <div className="w-full bg-muted/30 py-8 md:py-12 overflow-hidden">
      {/* Container to center the main image */}
      <div className="w-full flex justify-center items-center relative">
        {/* Main Carousel Image - 1000px x 600px - Always centered */}
        <div className="relative rounded-xl overflow-hidden shadow-lg flex-shrink-0" style={{ width: '1000px', height: '600px' }}>
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-all duration-500"
            priority
          />
        </div>

        {/* Right Preview Card - Absolutely positioned to the right */}
        {!isLastImage && (
          <div
            className="hidden xl:block absolute rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{
              width: '1000px',
              height: '600px',
              left: 'calc(50% + 500px + 100px)', // Center + half main image width + gap
            }}
            onClick={goToNext}
          >
            <Image
              src={images[nextImage(currentIndex)].url}
              alt={images[nextImage(currentIndex)].alt}
              fill
              className="object-cover"
            />
            {/* Subtle overlay to indicate it's the next slide */}
            <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300" />
          </div>
        )}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-3 h-3 bg-foreground"
                : "w-2 h-2 bg-muted-foreground hover:bg-foreground/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
