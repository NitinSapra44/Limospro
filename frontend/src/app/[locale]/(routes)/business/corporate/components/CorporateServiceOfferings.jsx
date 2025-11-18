import ServiceCard from '@/components/GlobalComponents/Reusable-Cards/ServiceCard'
import { CorporateServiceOfferingsData } from '../data/BCData'
import { useTranslations } from 'next-intl'

export default function CorporateServiceOfferings() {
   const t = useTranslations('CorporateServiceOfferings') 
  return (
    <section aria-labelledby="corporate-offerings-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-4 items-start">
        <h2 id="corporate-offerings-heading" className="sr-only">
          Corporate Service Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 px-3 lg:px-0 gap-4 w-full">
          {CorporateServiceOfferingsData.map((data, idx) => (
            <article key={idx}>
              <ServiceCard
                index={idx}
                src={data.src}
                alt={t(`cards.${idx}.alt`)}
                title={t(`cards.${idx}.title`)}
                description={t(`cards.${idx}.description`)}
                fontColour="text-[#003366]"
                fontWidth="font-bold"
                fontSize="text-[22px] leading-[120%]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
