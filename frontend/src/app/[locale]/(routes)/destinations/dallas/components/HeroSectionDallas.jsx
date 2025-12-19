'use client'

import HeroSection from '@/components/GlobalComponents/HeroSection'
import dynamic from 'next/dynamic'

import { useTranslations } from 'next-intl'

const RideBookingCard = dynamic(
  () => import('@/components/GlobalComponents/ride-booking/RideBookingCard'),
  { ssr: false } // disable server-side rendering
)

export default function HeroSectionDallas() {
  const t = useTranslations('hero.home')
  return (
    <HeroSection
      src="/HeroSections/hs-dallas.png"
      alt="Houston"
      height="min-h-screen"
      gradient="bg-black/70"
    >
      <div className="max-w-[1440px] lg:w-[90%] px-4 lg:px-0 mx-auto flex flex-col lg:flex-row-reverse py-16">
        {/* Text Section */}
        <section
          aria-labelledby="houston-hero-heading"
          className="flex flex-col lg:flex-[40%] gap-3 px-5 lg:justify-end items-start"
        >
          <h1
            id="houston-hero-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-white text-xl text-start md:text-2xl lg:text-4xl font-bold"
          >
            {t('title').split(' ')[0]} <br className="hidden lg:flex" />
            {t('title').split(' ').slice(1).join(' ')}
          </h1>
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-white text-start text-base md:text-lg lg:text-lg"
          >
            {t('description')}
          </p>
        </section>

        {/* Ride Booking Card Section */}
        <aside className="lg:w-[60%] mt-5 w-full" aria-label="Ride booking">
          <RideBookingCard />
        </aside>
      </div>
    </HeroSection>
  )
}
