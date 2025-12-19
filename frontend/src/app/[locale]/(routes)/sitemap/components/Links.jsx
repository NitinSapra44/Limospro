'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Links() {
  const t = useTranslations('SitemapLinks')

  const mainLinks = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'destinations', href: '/destinations' },
    { key: 'business', href: '/business-diplomats' },
    { key: 'about', href: '/about' },
    { key: 'blog', href: '/blog' },
    { key: 'help', href: '/help' },
  ]

  const quickLinks = [
    { key: 'fleet', href: '/fleet' },
    { key: 'testimonials', href: '/testimonials' },
    { key: 'contact', href: '/contact' },
    { key: 'findCity', href: '/find-your-city' },
  ]

  const legalLinks = [
    { key: 'privacy', href: '/privacy-policy' },
    { key: 'terms', href: '/terms-of-service' },
  ]

  const serviceLinks = [
    { key: 'airportTransfers', href: '/services/airport-transfers' },
    { key: 'hourlyHire', href: '/services/hourly-hire' },
    { key: 'cityToCity', href: '/services/city-to-city' },
  ]

  const destinationLinks = [
    { key: 'houston', href: '/destinations/houston' },
    { key: 'dallas', href: '/destinations/dallas' },
    { key: 'paris', href: '/destinations/paris' },
    { key: 'sanAntonio', href: '/destinations/san-antonio' },
    { key: 'austin', href: '/destinations/austin' },
    { key: 'losAngeles', href: '/destinations/los-angeles' },
    { key: 'lasVegas', href: '/destinations/las-vegas' },
    { key: 'orlando', href: '/destinations/orlando' },
    { key: 'london', href: '/destinations/london' },
    { key: 'frankfurt', href: '/destinations/frankfurt' },
    { key: 'dubai', href: '/destinations/dubai' },
    { key: 'riyadh', href: '/destinations/riyadh' },
    { key: 'cairo', href: '/destinations/cairo' },
  ]

  const businessLinks = [
    { key: 'corporations', href: '/business/corporations' },
    { key: 'diplomatic', href: '/business/diplomatic-services' },
    { key: 'events', href: '/business/events-planners' },
    { key: 'travel', href: '/business/travel-agents' },
  ]

  return (
    <section className="w-full bg-white ">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        {/* Top Section - Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12">
          {/* Main Links */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg font-semibold text-[#003366] mb-4"
            >
              {t('Main.title')}
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700  font-semibold hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`Main.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg  font-semibold text-[#003366] mb-4"
            >
              {t('QuickLinks.title')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700  font-semibold hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`QuickLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg  font-semibold text-[#003366] mb-4"
            >
              {t('Legal.title')}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700  font-semibold hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`Legal.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Services, Destinations, Business */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg  font-semibold text-[#003366] mb-4"
            >
              {t('Services.title')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700  font-semibold hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`Services.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg  font-semibold text-[#003366] mb-4"
            >
              {t('Destinations.title')}
            </h3>
            <ul className="space-y-3">
              {destinationLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700  font-semibold hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`Destinations.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Diplomats */}
          <div>
            <h3
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-lg font-bold text-[#003366] mb-4"
            >
              {t('Business.title')}
            </h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-quicksand)' }}
                    className="text-gray-700 hover:text-[#003366] transition-colors duration-200"
                  >
                    {t(`Business.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
