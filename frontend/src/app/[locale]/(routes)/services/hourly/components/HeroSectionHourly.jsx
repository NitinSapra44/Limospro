'use client'

import HeroSection from '@/components/GlobalComponents/HeroSection'
import dynamic from 'next/dynamic'

const RideBookingCard = dynamic(
  () => import('@/components/GlobalComponents/ride-booking/RideBookingCard'),
  { ssr: false } // disable server-side rendering
)
import { useTranslations } from 'next-intl'

export default function HeroSectionHourly() {
  const t = useTranslations('hero.home')
  return (
    <HeroSection
      src="/HeroSections/hs-hourly-service.jpg"
      alt="Hourly Service"
      height="min-h-screen"
      gradient="bg-black/70"
    >
      <section
        aria-labelledby="hero-heading"
        className="max-w-[1440px] lg:w-[90%] px-4 lg:px-0 mx-auto flex flex-col lg:flex-row-reverse py-16"
      >
        {/* Left text content */}
        <div className="flex flex-col lg:flex-[40%] gap-3 px-5 lg:justify-end items-start">
          <h1
            id="hero-heading"
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
        </div>

        {/* Right booking card */}
        <aside className="lg:w-[60%] mt-5 w-full" aria-label="Ride Booking Card">
          <RideBookingCard />
        </aside>
      </section>
    </HeroSection>
  )
}
