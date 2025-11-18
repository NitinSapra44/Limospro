'use client'
import Image from 'next/image'
import TestimonialCard from '@/components/GlobalComponents/Reusable-Cards/TestimonialCard'
import { TestimonialData } from '../data/HomePageData'
import { MoveLeft, MoveRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Testimonial() {
  const [carouselApi, setCarouselApi] = useState(null)
  const t = useTranslations('Testimonial')
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full pt-16 lg:pt-0 flex justify-end 2xl:justify-center"
    >
      <div className="lg:w-[90%] w-full max-w-[1440px] gap-10 flex">
        {/* Testimonials List */}
        <div className="lg:w-[45%] flex justify-center items-center">
          <div className="w-full px-2 lg:px-0 flex flex-col gap-3">
            {/* Section Heading */}
            <h2 id="testimonials-heading" className="sr-only">
              {t('Heading')}
            </h2>

            <Carousel
              opts={{ align: 'start', axis: 'y' }}
              className="w-full"
              setApi={setCarouselApi}
              orientation="vertical"
            >
              <CarouselContent className="gap-y-3 -mt-6 h-[600px]">
                {TestimonialData.map((data, i) => (
                  <CarouselItem key={i} className="pt-6 basis-1/3">
                    <TestimonialCard
                      index={i}
                      Quote={t(`TestimonialCards.${i}.Quote`)}
                      Name={t(`TestimonialCards.${i}.Name`)}
                      Position={t(`TestimonialCards.${i}.Position`)}
                      src={data.src}
                      alt={t(`TestimonialCards.${i}.alt`)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slider Controls */}
            <nav aria-label="Testimonials navigation" className="flex gap-4 mt-2">
              <MoveLeft
                onClick={() => carouselApi?.scrollPrev()}
                width={30}
                height={30}
                className="border-1 rounded-full border-black p-1 hover:cursor-pointer"
              />
              <MoveRight
                width={30}
                height={30}
                className="border-1 rounded-full border-black p-1 hover:cursor-pointer"
                onClick={() => carouselApi?.scrollNext()}
              />
            </nav>
          </div>
        </div>

        {/* Testimonial Image */}
        <figure className="relative hidden lg:flex lg:w-[55%] h-[700px]">
          <Image
            src="/HeroSections/hs-testimonial.png"
            alt="Chauffeur opening gate for his client"
            fill
            className="object-cover select-none pointer-events-none"
          />
          <figcaption className="sr-only">Hero image accompanying testimonials</figcaption>
        </figure>
      </div>
    </section>
  )
}
