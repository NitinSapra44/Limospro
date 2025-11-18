import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function BookARide() {
  const t = useTranslations('BookARide')
  return (
    <section
      id="book-ride-cta"
      aria-labelledby="book-ride-heading"
      className="w-full flex items-center justify-center px-3 lg:px-0 py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] bg-[#FFFCF6] border-1 border-[#FFB300] flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center p-8">
        {/* Heading & Description */}
        <div className="flex flex-col">
          <h2
            id="book-ride-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-xl font-bold"
          >
            {t('title')}
          </h2>
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base">
            {t('description')}
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Button
            aria-label="Book A Ride"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="bg-gradient-to-r from-[#0062C4] to-[#004C97] hover:cursor-pointer text-base !font-bold px-10 !py-8"
          >
            {t('Button')}
          </Button>
        </div>
      </div>
    </section>
  )
}
