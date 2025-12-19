import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useTranslations } from 'next-intl'

export default function Heading() {
  const t = useTranslations('FindYourAirport')
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
                  className="text-xl font-medium"
                >
                  {t('Service')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-[#003366] text-xl font-medium"
                >
                  {t('subservice')}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Page heading */}
      </div>
    </header>
  )
}
