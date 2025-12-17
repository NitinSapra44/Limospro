'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { PartnersData } from '../../../data/HomePageData'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export default function OurPartners() {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }))
  const t = useTranslations('OurPartnersTestimonials')
  
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="w-full py-12 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-8">
          <h2
            id="partners-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="sr-only"
          >
            Our Partners
          </h2>

          {/* Visible Heading for visual users */}
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2"
          >
            {t('Heading1')}
          </p>
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-3xl lg:text-4xl font-bold text-[#003366]"
          >
            {t('Heading2')}
          </p>
        </div>

        {/* Carousel */}
        <div role="region" aria-label="Partners carousel" className="mt-8">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className="flex gap-6">
              {PartnersData.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="
                    basis-1/2
                    sm:basis-1/3
                    md:basis-1/4
                    lg:basis-1/5
                    xl:basis-1/6
                    flex justify-center items-center"
                >
                  <div className="w-full flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={data.src} 
                      alt={data.alt} 
                      width={160} 
                      height={80}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}