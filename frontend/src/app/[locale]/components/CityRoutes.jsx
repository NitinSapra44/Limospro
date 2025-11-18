import { CityRoutes1Data } from '../data/HomePageData'
import { CityRoutes2Data } from '../data/HomePageData'
import Link from 'next/link'
import CityCard from '@/components/GlobalComponents/Reusable-Cards/CityCard'
import RouteCard from '@/components/GlobalComponents/Reusable-Cards/RouteCard'
import { useTranslations } from 'next-intl'

export default function CityRoutes() {
  const t = useTranslations('CityRoutes')
  return (
    <section id="city-routes" aria-labelledby="city-routes-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold items-start"
          >
            {t('headingTop')}
          </p>
          <h2
            id="city-routes-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366] items-start"
          >
            {t('headingBottom')}
          </h2>
          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C] items-start"
          >
            {t('description1')}
            <br className="hidden lg:flex" />
            {t('description2')}
          </p>
        </div>

        {/* Top Cities Subsection */}
        <div className="flex justify-between w-full px-3 pt-8">
          <h3
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-base text-black font-bold"
          >
            {t('topCities')}
          </h3>
          <Link
            aria-label="See all destinations"
            href=""
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="font-semibold underline text-[#0062C4]"
          >
            {t('seeAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 mt-3 px-3 lg:px-0 w-full">
          {CityRoutes1Data.map((data, idx) => (
            <CityCard
              key={idx}
              index={idx}
              src={data.src}
              alt={t(`citycards.${idx}.alt`)}
              title={t(`citycards.${idx}.title`)}
              description={t(`citycards.${idx}.description`)}
            />
          ))}
        </div>

        {/* Top Routes Subsection */}
        <div className="flex justify-between w-full px-3 pt-8">
          <h3
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-base text-black font-bold"
          >
            {t('topRoutes')}
          </h3>
          <Link
            aria-label="See all Routes"
            href=""
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="font-semibold underline text-[#0062C4]"
          >
            {t('seeAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 mt-3 px-3 lg:px-0 w-full">
          {CityRoutes2Data.map((data, idx) => (
            <RouteCard
              key={idx}
              index={idx}
              from={t(`routeCards.${idx}.from`)}
              to={t(`routeCards.${idx}.to`)}
              time={t(`routeCards.${idx}.time`)}
              distance={t(`routeCards.${idx}.distance`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
