import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import InfoCard from '@/components/GlobalComponents/Reusable-Cards/InfoCard'
import { ServicesData } from '../data/BCData'
import { useTranslations } from 'next-intl'

export default function Services({ Service, Subservice }) {
  const t = useTranslations('BCServices')
  return (
    <section
      aria-labelledby="corporate-services-heading"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-8 w-[80%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-lg font-medium"
              >
                {Service}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-[#003366] text-lg font-medium"
              >
                {Subservice}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {/* Service Cards */}
      <div className="py-16 w-[80%]">
        <h2
          id="corporate-services-heading"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="sr-only"
        >
          Corporate Service Categories
        </h2>

        <section
          aria-label={`${Subservice} service categories`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ServicesData.map((data, idx) => (
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
        </section>
      </div>
    </section>
  )
}
