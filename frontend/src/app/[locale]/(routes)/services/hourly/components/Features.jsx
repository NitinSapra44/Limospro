import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { FeaturesData } from '../data/HData'
import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { useTranslations } from 'next-intl'

export default function Features({ Service, Subservice }) {
  const t = useTranslations('Features')
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* Breadcrumb navigation */}
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

      {/* Section heading for accessibility */}
      <h2 id="services-heading" className="sr-only">
        {Subservice} Services
      </h2>

      {/* Cards grid */}
      <div className="py-16 w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FeaturesData.map((data, idx) => (
            <article key={idx}>
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
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
