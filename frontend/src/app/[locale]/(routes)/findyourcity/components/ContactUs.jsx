import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export default function ContactUsFYC() {
  const t = useTranslations('ContactUsFYC')
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="w-full flex items-center justify-center px-3 lg:px-0 py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] bg-[#FFFCF6] border border-[#FFB300] flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center p-8">
        <div className="flex flex-col">
          <h2
            id="contact-cta-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-xl font-bold"
          >
            {t('Heading')}
          </h2>
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base">
            {t('Description')}
          </p>
        </div>
        <div>
          <Button
            aria-label="Contact LIMOSPRO for corporate services"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="bg-gradient-to-r from-[#0062C4] to-[#004C97] text-base !font-bold px-10 py-8 hover:cursor-pointer"
          >
            {t('Button')}
          </Button>
        </div>
      </div>
    </section>
  )
}
