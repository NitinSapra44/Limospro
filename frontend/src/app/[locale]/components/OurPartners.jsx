'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { PartnersData } from '../data/HomePageData'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export default function OurPartners() {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }))
  const t = useTranslations('OurPartners')
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="w-full max-w-full overflow-hidden py-8"
    >
      <div className="w-full flex flex-col sm:flex-row sm:items-center items-start px-10">
        {/* Section Heading */}
        <div className="flex flex-col">
          <h2
            id="partners-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="sr-only"
          >
            Our Partners
          </h2>

          {/* Visible Heading for visual users */}
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-gray-400 text-base sm:text-lg md:text-2xl lg:text-3xl"
          >
            {t('Heading1')}
          </p>
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-gray-400 text-xl sm:text-3xl md:text-4xl lg:text-6xl"
          >
            {t('Heading2')}
          </p>
        </div>

        {/* Carousel */}
        <div role="region" aria-label="Partners carousel">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="flex gap-4">
              {PartnersData.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="
                    basis-1/2  /* ~7 items on very large screens */
                    xl:basis-1/6 /* ~6 items */
                    lg:basis-1/5 /* ~5 items */
                    md:basis-1/4 /* ~4 items */
                    sm:basis-1/3 /* ~3 items */
                    flex justify-center"
                >
                  <Image src={data.src} alt={data.alt} width={200} height={200} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
