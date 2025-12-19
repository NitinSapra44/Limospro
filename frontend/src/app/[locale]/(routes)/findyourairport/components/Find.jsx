'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Search } from 'lucide-react'
import Link from 'next/link'
import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { FindData } from '../data/FYAData'

export default function Find() {
  const [searchQuery, setSearchQuery] = useState('')
  const t = useTranslations('FindAirport')
  const t1 = useTranslations('FYAFeatures')

  const cities = [
    { key: 'houston', name: 'Houston', href: '/destinations/houston' },
    { key: 'dallas', name: 'Dallas', href: '/destinations/dallas' },
    { key: 'paris', name: 'Paris', href: '/destinations/paris' },
    { key: 'sanAntonio', name: 'San Antonio', href: '/destinations/san-antonio' },
    { key: 'lasVegas', name: 'Las Vegas', href: '/destinations/las-vegas' },
    { key: 'orlando', name: 'Orlando', href: '/destinations/orlando' },
    { key: 'austin', name: 'Austin', href: '/destinations/austin' },
    { key: 'losAngeles', name: 'Los Angeles', href: '/destinations/los-angeles' },
    { key: 'london', name: 'London', href: '/destinations/london' },
    { key: 'frankfurt', name: 'Frankfurt', href: '/destinations/frankfurt' },
    { key: 'dubai', name: 'Dubai', href: '/destinations/dubai' },
    { key: 'riyadh', name: 'Riyadh', href: '/destinations/riyadh' },
    { key: 'cairo', name: 'Cairo', href: '/destinations/cairo' },
  ]

  // Filter cities based on search query
  const filteredCities = cities.filter((city) =>
    t(`cities.${city.key}`).toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section
      id="find-your-city"
      aria-labelledby="find-city-heading"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2
          id="find-city-heading"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-3xl lg:text-4xl font-bold text-[#003366] text-center mb-8"
        >
          {t('heading')}
        </h2>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative flex items-center">
            <div className="absolute left-0 flex items-center justify-center w-12 h-12 bg-[#003366] rounded-l-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontFamily: 'var(--font-quicksand)' }}
              className="w-full h-12 pl-16 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
              aria-label="Search for your city"
            />
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FindData.map((data, idx) => (
              <article key={idx}>
                <InfoCard
                  index={idx}
                  src={data.src}
                  alt={t1(`cards.${idx}.alt`)}
                  title={t1(`cards.${idx}.title`)}
                  description={t1(`cards.${idx}.description`)}
                  height={70}
                  width={70}
                  orientation="flex-col"
                  fontColour="text-[#003366]"
                />
              </article>
            ))}
          </div>
        </div>

        {/* City Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <Link
                key={city.key}
                href={city.href}
                style={{ fontFamily: 'var(--font-quicksand)' }}
                className="px-6 py-3 text-center text-gray-800 bg-gray-50 rounded-lg hover:bg-[#003366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm font-medium border border-gray-200"
              >
                {t(`cities.${city.key}`)}
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p style={{ fontFamily: 'var(--font-quicksand)' }} className="text-gray-500">
                {t('noResults')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
