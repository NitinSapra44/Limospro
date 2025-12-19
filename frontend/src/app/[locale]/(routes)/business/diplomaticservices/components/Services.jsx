import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import PhotoCard from '@/components/GlobalComponents/Reusable-Cards/photoCard'
import { ServicesData } from '../data/DSData'
import { useTranslations } from 'next-intl'

export default function Services({ Service, Subservice }) {
  const t = useTranslations('DSServices')
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
  <section id="why-choose" aria-labelledby="why-choose-limospro" className="w-full flex py-16">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
            {t('headingTop')}
          </p>

          <h2
            id="why-choose-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('headingBottom')}
          </h2>

      
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 px-3 lg:px-0 w-full mt-3">
          {ServicesData.map((data, idx) => (
            <PhotoCard
              key={idx}
              index={idx}
              src={data.src}
              alt={t(`cards.${idx}.alt`)}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
    </section>
  )
}
