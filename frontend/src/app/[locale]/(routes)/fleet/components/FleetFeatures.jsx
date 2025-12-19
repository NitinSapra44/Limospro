import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { FleetFeaturesData } from '../data/fleetData'
import { useTranslations } from 'next-intl'

export default function FleetFeatures() {
  const t = useTranslations('FleetFeatures')

  return (
    <section id="why-choose" aria-labelledby="why-choose-limospro" className="w-full flex py-16">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3  items-stretch gap-4 px-3 lg:px-0 w-full mt-3">
          {FleetFeaturesData.map((data, idx) => (
            <InfoCard
              key={idx}
              index={idx}
              src={data.src}
              alt={t(`cards.${idx}.alt`)}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
              height={60}
              width={60}
              orientation="flex-col"
              fontColour="text-[#003366]"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
