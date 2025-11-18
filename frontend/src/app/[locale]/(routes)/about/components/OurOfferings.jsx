import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { OurOfferingsData } from '../data/AboutPageData'
import { useTranslations } from 'next-intl'

export default function OurOfferings() {
  const t = useTranslations('OurOfferingsAbout')
  return (
    <section id="our-services" aria-labelledby="our-services-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-8 items-start">
        {/* Section heading */}
        <header className="gap-2 px-3 lg:px-0 flex flex-col">
          <h2
            id="our-services-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('Heading1')}
          </h2>
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('Heading2')}
          </p>
        </header>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 px-3 lg:px-0 gap-4 w-full" role="list">
          {OurOfferingsData.map((data, idx) => (
            <article key={idx} role="listitem" aria-label={data.title}>
              <InfoCard
                index={idx}
                src={data.src}
                alt={t(`cards.${idx}.alt`)}
                title={t(`cards.${idx}.title`)}
                description={t(`cards.${idx}.description`)}
                height={70}
                width={70}
                orientation="flex-col"
                fontColour="text-[#003366]"
                className="shadow-xl"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
