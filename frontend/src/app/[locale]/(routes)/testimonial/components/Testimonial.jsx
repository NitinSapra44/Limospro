'use client'
import { TestimonialData } from '../../../data/HomePageData'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import TestimonialCard from '@/components/GlobalComponents/Reusable-Cards/TestimonialCard'
import Autoplay from 'embla-carousel-autoplay'

export default function TestimonialSection() {
  const [leftCarouselApi, setLeftCarouselApi] = useState(null)
  const [rightCarouselApi, setRightCarouselApi] = useState(null)
  const t = useTranslations('Testimonial')
  const t1 = useTranslations('TestimonialHeadings')

  // Split testimonials into two columns
  const leftColumnData = TestimonialData.filter((_, i) => i % 2 === 0)
  const rightColumnData = TestimonialData.filter((_, i) => i % 2 === 1)

  // Create autoplay plugins for both carousels
  const leftAutoplay = Autoplay({ delay: 3000, stopOnInteraction: false })
  const rightAutoplay = Autoplay({ delay: 3000, stopOnInteraction: false })

  // Reverse direction for right carousel
  useEffect(() => {
    if (!rightCarouselApi) return
    
    // Override the right carousel to scroll in opposite direction
    const interval = setInterval(() => {
      rightCarouselApi?.scrollPrev()
    }, 3000)

    return () => clearInterval(interval)
  }, [rightCarouselApi])

  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-section-heading"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <span
              style={{ fontFamily: 'var(--font-quicksand)' }}
              className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2 block"
            >
              {t1('Heading1')}
            </span>
            <h2
              id="testimonials-section-heading"
              className="text-3xl lg:text-4xl font-bold text-[#003366]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t1('Heading2')}
            </h2>
          </div>
        </div>

        {/* Two Column Carousel Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Scrolls Down */}
            <Carousel
              opts={{ 
                align: 'start', 
                loop: true,
                dragFree: true,
                containScroll: 'trimSnaps'
              }}
              orientation="vertical"
              plugins={[leftAutoplay]}
              setApi={setLeftCarouselApi}
              className="w-full"
            >
              <CarouselContent className="-mt-4 h-[600px]">
                {leftColumnData.map((data, i) => {
                  const originalIndex = i * 2
                  return (
                    <CarouselItem key={originalIndex} className="pt-4 basis-1/3">
                      <TestimonialCard
                        Quote={t(`TestimonialCards.${originalIndex}.Quote`)}
                        Name={t(`TestimonialCards.${originalIndex}.Name`)}
                        Position={t(`TestimonialCards.${originalIndex}.Position`)}
                        src={data.src}
                        alt={t(`TestimonialCards.${originalIndex}.alt`)}
                      />
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>

            {/* Right Column - Scrolls Up */}
            <Carousel
              opts={{ 
                align: 'start', 
                loop: true,
                dragFree: true,
                containScroll: 'trimSnaps'
              }}
              orientation="vertical"
              setApi={setRightCarouselApi}
              className="w-full"
            >
              <CarouselContent className="-mt-4 h-[600px]">
                {rightColumnData.map((data, i) => {
                  const originalIndex = i * 2 + 1
                  return (
                    <CarouselItem key={originalIndex} className="pt-4 basis-1/3">
                      <TestimonialCard
                        Quote={t(`TestimonialCards.${originalIndex}.Quote`)}
                        Name={t(`TestimonialCards.${originalIndex}.Name`)}
                        Position={t(`TestimonialCards.${originalIndex}.Position`)}
                        src={data.src}
                        alt={t(`TestimonialCards.${originalIndex}.alt`)}
                      />
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}