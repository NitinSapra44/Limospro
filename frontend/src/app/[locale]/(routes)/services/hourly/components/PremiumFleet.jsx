import PriceCard from '@/components/GlobalComponents/Reusable-Cards/PriceCard'
import { PremiumFleetData } from '../data/HData'
import { useTranslations } from 'next-intl'

export default function PremiumFleet() {
    const t = useTranslations('PremiumFleet')
  return (
    <section aria-labelledby="fleet-heading" className="w-full flex py-16">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Header */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold items-start"
          >
            {t('Heading1')}
          </p>
          <h2
            id="fleet-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366] items-start"
          >
             {t('Heading2')}
          </h2>
          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C] items-start"
          >
             {t('Description1')}
            <br className="hidden lg:flex" />
            {t('Description2')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 px-3 lg:px-0 w-full mt-3">
          {PremiumFleetData.map((data, idx) => (
            <PriceCard
              index={idx}
              key={idx}
              src={data.src}
              alt={t(`cards.${idx}.alt`)}
              priceInfo={t(`cards.${idx}.priceInfo`)}
              CarInfo={t(`cards.${idx}.CarInfo`)}
              rating={data.rating}
              features={t.raw(`cards.${idx}.features`)} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
