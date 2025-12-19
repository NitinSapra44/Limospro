'use client'
import React from 'react'
import HeroSection from '@/components/GlobalComponents/HeroSection'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

const RideBookingCard = dynamic(
  () => import('@/components/GlobalComponents/ride-booking/RideBookingCard'),
  { ssr: false }
)

export default function HeroSectionFleet() {
  const t = useTranslations('hero.home') // ✅ Correct namespace

  return (
    <section id="hero" aria-label={t('title')}>
      <HeroSection
        src="/HeroSections/hs-fleet.png"
        alt="Chauffer Opening gate"
        height="min-h-screen"
        gradient="bg-black/70"
      >
        <div className="max-w-[1440px] lg:w-[90%] px-4 lg:px-0 mx-auto flex flex-col lg:flex-row-reverse py-16">
          <div className="flex flex-col lg:flex-[40%] gap-3 px-5 lg:justify-end items-start">
            <h1
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-white text-xl text-start md:text-2xl lg:text-5xl font-bold"
            >
              {t('title').split(' ')[0]} <br className="hidden lg:flex" />
              {t('title').split(' ').slice(1).join(' ')}
            </h1>

            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-white text-start text-base md:text-lg lg:text-xl"
            >
              {t('description')}
            </p>
          </div>

          <div className="lg:w-[60%] mt-5 w-full">
            <RideBookingCard />
          </div>
        </div>
      </HeroSection>
    </section>
  )
}
