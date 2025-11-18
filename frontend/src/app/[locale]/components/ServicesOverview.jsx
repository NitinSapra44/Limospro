import ServiceCard from '@/components/GlobalComponents/Reusable-Cards/ServiceCard'
import { ServicesOverviewData } from '../data/HomePageData'
import { useTranslations } from 'next-intl'

export default function ServicesOverview() {
  const t = useTranslations('services.overview')

  return (
    <section aria-labelledby="services-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-4">
        {/* Heading */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
            {t('premium')}
          </p>

          <h2
            id="services-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('title')}
          </h2>

          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 px-3 lg:px-0 lg:grid-cols-3 gap-4 w-full">
          {ServicesOverviewData.map((item, idx) => (
            <ServiceCard
              key={idx}
              index={idx}
              src={item.src}
              alt={t(`cards.${idx}.alt`)}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
              button={t(`cards.${idx}.button`)}
              fontColour="text-black"
              fontWidth="font-semibold"
              fontSize="text-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
