import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { CorporateServicesAndFeaturesData } from '../data/BCData'
import { useTranslations } from 'next-intl'

export default function CorporateServicesAndFeatures() {
  const t = useTranslations('CorporateServicesAndFeatures')
  return (
    <section aria-labelledby="corporate-services-section-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-4 items-start">
        <h2 id="corporate-services-section-heading" className="sr-only">
          Corporate Services and Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 px-3 lg:px-0 gap-4 w-full">
          {CorporateServicesAndFeaturesData.map((data, idx) => (
            <article key={idx}>
              <InfoCard
                index={idx}
                src={data.src}
                alt={t(`cards.${idx}.alt`)}
                title={t(`cards.${idx}.title`)}
                description={t(`cards.${idx}.description`)}
                height={60}
                width={60}
                orientation="flex-row items-center"
                fontColour="text-black"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
