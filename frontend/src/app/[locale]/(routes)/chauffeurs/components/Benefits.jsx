import { BenefitsData1, BenefitsData2 } from '../data/ChaufferData'
import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { useTranslations } from 'next-intl'

export default function Benefits() {
  const t = useTranslations('ChaufferBenefits')
  return (
    <section
      aria-label="Chauffeur Benefits and Features"
      className="py-16 w-full flex items-center justify-center"
    >
      <div className="flex w-[80%] max-w-[1440px] flex-col gap-4">
        {/* First set of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BenefitsData1.map((data, idx) => (
            <article key={idx}>
              <InfoCard
                index={idx}
                src={data.src}
                alt={t(`cards1.${idx}.alt`)}
                title={t(`cards1.${idx}.title`)}
                description={t(`cards1.${idx}.description`)}
                height={70}
                width={70}
                orientation="flex-row items-center"
              />
            </article>
          ))}
        </div>

        {/* Second set of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BenefitsData2.map((data, idx) => (
            <article key={idx}>
              <InfoCard
                index={idx}
                src={data.src}
                alt={t(`cards2.${idx}.alt`)}
                title={t(`cards2.${idx}.title`)}
                description={t(`cards2.${idx}.description`)}
                height={70}
                width={70}
                orientation="flex-row items-center"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
