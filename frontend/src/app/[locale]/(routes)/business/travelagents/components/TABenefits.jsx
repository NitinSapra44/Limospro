import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { TABenefitsData } from '../data/TAData'
import { useTranslations } from 'next-intl'

export default function TABenefits() {
  const t = useTranslations('TAServices')
  return (
    <section id="why-choose" aria-labelledby="why-choose-limospro" className="w-full flex py-16">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
            {t('headingTop')}
          </p>

          <h2
            id="why-choose-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('headingBottom')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 px-3 lg:px-0 w-full mt-3">
          {TABenefitsData.map((data, idx) => (
            <InfoCard
              index={idx}
              key={idx}
              src={data.src}
              alt={t(`cards.${idx}.alt`)}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
              height={70}
              width={70}
              orientation="flex-col"
              fontColour="text-[#003366]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
