import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useTranslations } from 'next-intl'

export default function heading() {
  const t = useTranslations('ChaufferHeading')
  return (
    <header className="w-full py-12 flex justify-center items-center">
      <div className="w-[80%] max-w-[1440px] flex flex-col gap-3">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base font-medium"
                >
                  {t('Service')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-[#003366] text-base font-medium"
                >
                  {t('subservice')}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Page heading */}
        <h1
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-4xl font-bold text-[#003366]"
        >
          {t('Heading')}
        </h1>
      </div>
    </header>
  )
}
