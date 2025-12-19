import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export default function BookARide() {
  const t = useTranslations('BookARideDS')
  return (
    <section
      aria-labelledby="houston-cta-heading"
      className="w-full flex items-center justify-center px-3 lg:px-0 py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] bg-[#FFFCF6] border-1 border-[#FFB300] flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center p-8">
        {/* Text / CTA */}
        <div>
          <h2
            id="houston-cta-heading"
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
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="bg-gradient-to-r from-[#0062C4] to-[#004C97] text-base !font-bold px-10 !py-8 hover:cursor-pointer"
            aria-label="Book Houston Airport Limo Service"
          >
            {t('Button')}
          </Button>
        </div>
      </div>
    </section>
  )
}
