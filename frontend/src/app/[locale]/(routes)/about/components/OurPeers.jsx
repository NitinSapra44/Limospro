import { OurPeersData } from '../data/AboutPageData'
import ComparisonCard from '@/components/GlobalComponents/Reusable-Cards/comparisoncard'
import { useTranslations } from 'next-intl'

export default function OurPeers() {
  const t = useTranslations('OurPeers')
  return (
    <section id="comparison" aria-labelledby="comparison-heading" className="w-full flex py-16">
      <div className="flex flex-col gap-6 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Header Section */}
        <header className="gap-2 px-3 lg:px-0 flex flex-col">
          <h2
            id="comparison-heading"
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
            {t('Heading1')}
          </h2>
          <h3
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('Heading2')}
          </h3>
          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('Description')}
          </p>
        </header>

        {/* Comparison Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OurPeersData.map((data, index) => (
            <ComparisonCard
              key={index}
              title={data.title} // <-- optional translation support
              color={data.color}
              features={data.features.map((item) => ({
                ...item,
                text: t(item.text), // translate each feature
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
