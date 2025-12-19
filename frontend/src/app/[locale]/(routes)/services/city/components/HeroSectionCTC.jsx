'use client'

import HeroSection from '@/components/GlobalComponents/HeroSection'
import dynamic from 'next/dynamic'
const RideBookingCard = dynamic(
  () => import('@/components/GlobalComponents/ride-booking/RideBookingCard'),
  { ssr: false } // disable server-side rendering
)

import { useTranslations } from 'next-intl'

export default function HeroSectionCTC() {
  const t = useTranslations('hero.home')
  return (
    <section aria-label="Airport Transfer Hero Section">
      <HeroSection
        src="/HeroSections/hs-citytocity.jpg"
        alt="Airport Transfer"
        height="min-h-screen"
        gradient="bg-black/70"
      >
        <div className="max-w-[1440px] lg:w-[90%] px-4 lg:px-0 mx-auto flex flex-col lg:flex-row-reverse py-16">
          <div className="flex flex-col lg:flex-[40%] gap-3 px-5 lg:justify-end items-start">
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-white text-xl text-start md:text-2xl lg:text-4xl font-bold"
            >
              {t('title').split(' ')[0]} <br className="hidden lg:flex" />
              {t('title').split(' ').slice(1).join(' ')}
            </p>
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-white text-start text-base md:text-lg lg:text-lg"
            >
              {t('description')}
            </p>
          </div>

          <aside className="lg:w-[60%] mt-5 w-full" aria-label="Ride Booking Card">
            <RideBookingCard />
          </aside>
        </div>
      </HeroSection>
    </section>
  )
}
