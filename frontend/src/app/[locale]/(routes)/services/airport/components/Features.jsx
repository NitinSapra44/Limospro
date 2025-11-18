import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { FeaturesData } from '../data/ATData'
import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { useTranslations } from 'next-intl'

export default function Features({ Service, Subservice }) {
     const t = useTranslations('Features')
  return (
    <section
      aria-label="Airport Transfer Services Overview"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-8 w-[80%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink style={{ fontFamily: 'var(--font-montserrat)' }} className="text-lg">
                {Service}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-[#003366] text-lg"
              >
                {Subservice}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {/* Services Cards */}
      <section aria-label="List of Airport Transfer Services" className="py-16 w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FeaturesData.map((data, idx) => (
            <InfoCard
              key={idx}
              index={idx}
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
      </section>
    </section>
  )
}
