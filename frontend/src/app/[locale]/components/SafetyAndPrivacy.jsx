import InfoCardSecondary from '@/components/GlobalComponents/Reusable-Cards/InfoCardSecondary'
import { SafetyAndPrivacyData } from '../data/HomePageData'
import { useTranslations } from 'next-intl'

export default function SafetyAndPrivacy() {
   const t = useTranslations('SafetyAndPrivacy')
  return (
    <section id="highlights" aria-labelledby="highlights-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-4 items-start">
        {/* Optional Section Heading */}

        {/* Grid of Features / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 mt-3 px-3 lg:px-0 w-full">
          {SafetyAndPrivacyData.map((data, idx) => (
            <InfoCardSecondary
              key={idx}
              index={idx}
              src={data.src}
              alt={t(`cards.${idx}.alt`)}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
              height={70}
              width={70}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
