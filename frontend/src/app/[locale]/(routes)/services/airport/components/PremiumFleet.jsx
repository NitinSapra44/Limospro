import PriceCard from '@/components/GlobalComponents/Reusable-Cards/PriceCard'
import { PremiumFleetData } from '../data/ATData'
import { useTranslations } from 'next-intl'

export default function PremiumFleet() {
  const t = useTranslations('PremiumFleet')

  return (
    <section aria-label="Premium Fleet Section" className="w-full flex py-16">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}
        <header className="gap-2 px-3 lg:px-0 flex flex-col">
          <p className="text-base lg:text-lg text-[#2C2C2C] font-semibold">{t('Heading1')}</p>

          <h2 className="font-bold text-xl lg:text-3xl text-[#003366]">{t('Heading2')}</h2>

          <p className="text-base lg:text-lg text-[#2C2C2C]">
            {t('Description1')}
            <br className="hidden lg:flex" />
            {t('Description2')}
          </p>
        </header>

        {/* Cards */}
        <section
          aria-label="Fleet Cars Grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 lg:px-0 w-full mt-3"
        >
          {PremiumFleetData.map((card, idx) => (
            <PriceCard
              key={idx}
              src={card.src}
              alt={t(`cards.${idx}.alt`)}
              priceInfo={t(`cards.${idx}.priceInfo`)}
              CarInfo={t(`cards.${idx}.CarInfo`)}
              rating={card.rating}
              features={t.raw(`cards.${idx}.features`)} // 👈 key detail
            />
          ))}
        </section>
      </div>
    </section>
  )
}
